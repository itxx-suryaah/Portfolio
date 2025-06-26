'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link'; // Kept Link for potential future use if some nav items are actual pages
import { usePathname } from 'next/navigation'; // Still useful for active state logic if you mix page & section links

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname(); // Remains for potential active state if you navigate to other pages

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Define navigation links for same-page scrolling
  const navLinks = [
    { name: 'Home', path: '/HomeSection' },
    { name: 'About', path: '/AboutSection' },
    { name: 'Projects', path: '/ProjectsSection' },
  ];

  // Function to handle smooth scrolling
  const handleScrollToSection = (e, selector) => {
    e.preventDefault();
    
    // Remove the # if it exists to get the actual ID
    const id = selector.startsWith('#') ? selector.slice(1) : selector;
    
    // Try to find element by ID first
    let section = document.getElementById(id);
    
    // If not found by ID, try querySelector (for class selectors or other selectors)
    if (!section) {
      section = document.querySelector(selector);
    }
    
    if (section) {
      // Account for fixed navbar height (adjust the offset as needed)
      const navbarHeight = 80; // Adjust this value based on your navbar height
      const targetPosition = section.offsetTop - navbarHeight;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth',
      });
    } else {
      console.warn(`Element with selector "${selector}" not found`);
    }
    
    setMenuOpen(false); // Close mobile menu after clicking a link
  };

  // Active state logic for same-page navigation
  const isSectionActive = (sectionId) => {
    if (typeof window !== 'undefined') {
      return window.location.hash === sectionId;
    }
    return false;
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out py-3 ${
        scrolled ? 'shadow-lg' : ''
      }`}
      style={{ boxShadow: scrolled ? '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)' : 'none' }}
    >
      <div className="container mx-auto px-4  flex items-center justify-between">
        {/* Logo - Aligned to the left */}
        <a // Changed to <a> for consistency with same-page scrolling
          href="#home-section"
          onClick={(e) => handleScrollToSection(e, '#home-section')}
          className="flex items-center"
        >
          {/* Replaced with a simple white SVG for demonstration.
              Replace with your actual logo, ensure it's visible on black. */}
          <svg
            width="30"
            height="30"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-white"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5z" />
            <path d="M2 17l10 5 10-5" />
            <path d="M2 12l10 5 10-5" />
          </svg>
        </a >

        {/* Center Nav with Bubble - Hidden on small screens, flex on medium and up */}
        {/* Added justify-center to the parent div for centering the bubble itself */}
        <div className="hidden md:flex justify-center flex-grow"> {/* flex-grow to take available space */}
          <div className="bg-[#6E7175] text-[#151B23] px-2 py-1 rounded-[10px] flex space-x-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.path}
                onClick={(e) => handleScrollToSection(e, link.path)}
                className={`px-4 py-2 rounded-[6px] text-sm font-medium transition-all duration-300 ${
                  isSectionActive(link.path) // This needs active state logic
                    ? 'bg-white text-black'
                    : 'text-gray-400 hover:bg-white hover:text-black'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>

        {/* Contact Button - Hidden on small screens, block on medium and up */}
        <div className="hidden md:block">
          <a
            href="#contact-section"
            onClick={(e) => handleScrollToSection(e, '#contact-section')}
            className="bg-white text-black font-medium py-2 px-5 rounded-[12px] hover:bg-gray-200 transition"
          >
            Contact Me
          </a>
        </div>

        {/* Mobile menu toggle - Visible on small screens, hidden on medium and up */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-white">
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

      {/* Mobile Menu - Collapsible */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          menuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
        <div className="px-4 pt-2 pb-4 bg-black space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.path}
              onClick={(e) => handleScrollToSection(e, link.path)}
              className={`block px-4 py-2 rounded-[12px] text-base text-center transition-all duration-300 ${ // text-center for mobile links
                isSectionActive(link.path)
                  ? 'bg-white text-black font-medium'
                  : 'text-gray-300 hover:bg-white hover:text-black'
              }`}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact-section"
            onClick={(e) => handleScrollToSection(e, '#contact-section')}
            className="block text-center bg-white text-black font-medium py-2 px-6 rounded-full hover:bg-gray-200"
          >
            Contact Me
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;