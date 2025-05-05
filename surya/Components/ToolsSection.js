// components/ToolsSection.js
'use client';
import React from 'react';
export default function ToolsSection() {
    const tools = ["HTML5", "CSS", "JS", "ReactJS", "Tailwind CSS", "NextJS", "Redux", "Firebase", "Framer Motion", "Vercel"];
    return (
      <section className="px-6 py-12 max-w-4xl mx-auto text-center">
        <h2 className="text-xl font-bold mb-4">Essential Tools I Use</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {tools.map(tool => (
            <div key={tool} className="bg-gray-800 p-3 rounded shadow text-sm">{tool}</div>
          ))}
        </div>
      </section>
    );
  }
  