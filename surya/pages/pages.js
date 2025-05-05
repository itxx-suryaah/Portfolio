// pages/index.js
'use client';
import React from 'react';
import Navbar from "@/Components/Navbar";
import HeroSection from "../Components/HeroSection";
import AboutSection from "@/components/AboutSection";
import LiveEditor from "@/components/LiveEditor";
import ToolsSection from "@/components/ToolsSection";
import PortfolioSection from "@/components/PortfolioSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <LiveEditor />
      <ToolsSection />
      <PortfolioSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
