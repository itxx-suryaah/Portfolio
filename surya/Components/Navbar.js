// components/Navbar.jsx
'use client';
import React from 'react';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Navbar = () => {
  const [navbarBg, setNavbarBg] = useState('bg-transparent');
  const [menuOpen, setMenuOpen] = useState(false);
  const navbarRef = useRef(null);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setNavbarBg('bg-black bg-opacity-95');
      } else {
        setNavbarBg('bg-transparent');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Blog', path: '/blog' },
  ];

  const isActive = (path) => {
    return router.pathname === path;
  };

  return (
    <nav 
      ref={navbarRef}
      className={`fixed w-full transition-all duration-300 ease-in-out z-50 py-4 ${navbarBg}`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <div className="h-8 w-8">
            <svg viewBox="0 0 24 24" className="fill-white">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center justify-center flex-1">
          <div className="flex space-x-8">
            {navLinks.map((link) => (
              <Link 
                href={link.path} 
                key={link.name}
                className={`text-base transition-all duration-200 ${
                  isActive(link.path) 
                    ? 'text-white font-medium' 
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Link 
            href="/contact" 
            className="bg-white text-black hover:bg-gray-200 transition-colors duration-300 font-medium py-2 px-6 rounded-full"
          >
            Contact Me
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white focus:outline-none"
          >
            {menuOpen ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden transition-all duration-300 ease-in-out ${menuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <div className="px-4 pt-2 pb-4 bg-black bg-opacity-95 space-y-4">
          {navLinks.map((link) => (
            <Link
              href={link.path}
              key={link.name}
              className={`block text-base transition-all duration-200 ${
                isActive(link.path) 
                  ? 'text-white font-medium' 
                  : 'text-gray-300 hover:text-white'
              }`}
              onClick={() => setMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/contact"
            className="block text-center bg-white text-black hover:bg-gray-200 transition-colors duration-300 font-medium py-2 px-6 rounded-full"
            onClick={() => setMenuOpen(false)}
          >
            Contact Me
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;