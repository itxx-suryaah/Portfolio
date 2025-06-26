// components/PortfolioSection.js
'use client';
import React from 'react';

export default function PortfolioSection() {
  const projects = [
    "Stock Momentum Analyzer",
    "StayFinder",
    "NetflixGPT",
    "Medical Booking",
    "AI Chatbot",
    "E-Commerce Platform"
  ];

  return (
    <section className="px-6 py-12 max-w-6xl mx-auto text-white">
      <h2 className="text-2xl font-bold mb-8 text-center">My Portfolio Highlights</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((title, i) => (
          <div key={i} className="bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
            <div className="h-40 bg-gray-700 mb-4 rounded-md flex items-center justify-center text-gray-400">
              {/* Placeholder for image or screenshot */}
              <span>Project Image</span>
            </div>
            <h3 className="text-lg font-semibold">{title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
