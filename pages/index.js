import Navbar from '@/Components/Navbar'
import AboutSection from '@/Components/AboutSection'
import HeroSection from '@/Components/HeroSection'
import LiveEditor from '@/Components/LiveEditor'
import ToolsSection from '@/Components/ToolsSection'


import React from 'react'
import PortfolioSection from '@/Components/PortfolioSection'
import ContactSection from '@/Components/ContactSection'
import Footer from '@/Components/Footer'

const index = () => {
  return (
  <>
  <Navbar />
  <HeroSection />
  <AboutSection />
   <LiveEditor />  <ToolsSection />
  <PortfolioSection />
  <ContactSection />
  <Footer /> 

  </>
  )
}

export default index

