// components/ContactSection.js
'use client';
import React from 'react';
export default function ContactSection() {
    return (
      <section className="px-6 py-12 max-w-4xl mx-auto text-center">
        <h2 className="text-xl font-bold mb-4">Contact me for</h2>
        <p className="text-gray-400 text-sm mb-6">Reach out to discuss your project or just say hi.</p>
        <textarea placeholder="Your message..." className="w-full p-3 bg-gray-800 rounded text-sm mb-2"></textarea>
        <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">Send</button>
      </section>
    );
  }
  