
// components/PortfolioSection.js
'use client';
import React from 'react';
export default function PortfolioSection() {
    const projects = ["Stock Momentum Analyzer", "StayFinder", "NetflixGPT", "Medical Booking", "AI Chatbot", "E-Commerce Platform"];
    return (
      <section className="px-6 py-12 max-w-6xl mx-auto">
        <h2 className="text-xl font-bold mb-4 text-center">My Portfolio Highlights</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((title, i) => (
            <div key={i} className="bg-gray-800 p-4 rounded shadow">
              <div className="h-40 bg-gray-700 mb-2 rounded"></div>
              <h3 className="text-sm font-semibold">{title}</h3>
            </div>
          ))}
        </div>
      </section>
    );
  }
  