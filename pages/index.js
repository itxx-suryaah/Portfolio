import React from 'react';
import Navbar from '../Components/Navbar';
import Home from '../Components/Home';
import About from '@/Components/About';
import Livecode from '@/Components/Livecode';
import Framework from '@/Components/Framework';
import Mypro from '@/Components/Mypro';
import Contact from "@/Components/Contact";
import Email from "@/Components/Email";
import Sildefooter from '@/Components/Sildefooter';
import Scrollup from '@/Components/Scrollup';


const scrollToSectionWithOffset = (sectionId) => {
  const section = document.getElementById(sectionId);
  if (section) {
    const offset = 100; // margin-top of 50px
    const bodyRect = document.body.getBoundingClientRect().top;
    const elementRect = section.getBoundingClientRect().top;
    const elementPosition = elementRect - bodyRect;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    });
  }
};

export const index = () => {
  return (
    <>
      <Navbar scrollToSectionWithOffset={scrollToSectionWithOffset} />
      <Home />
      <About />
      <Livecode />
      <Framework />
      <Mypro />
      <Contact />
      <Email />
      <Sildefooter />
    
    </>
  );
};

export default index;