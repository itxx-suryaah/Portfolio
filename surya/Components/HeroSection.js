
// components/HeroSection.js
'use client';
import React from 'react';
import Image from 'next/image';
export default function HeroSection() {
  return (
    <section className="w-full flex flex-col lg:flex-row items-center justify-center text-white py-12 px-6 text-center lg:text-left">
      <div className="flex-1">
        <p className="text-sm text-blue-400">@milindsahu.dev</p>
        <h1 className="text-4xl sm:text-5xl font-bold mt-2">
          Building Scalable <br />
          <span className="text-gray-300">Modern Websites</span> for the <br />
          <span className="text-blue-400">Future</span>
        </h1>
        <div className="mt-4 flex flex-wrap justify-center lg:justify-start gap-4">
          <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded">Download CV</button>
          <button className="border border-gray-400 hover:border-white text-gray-300 py-2 px-4 rounded">Send Email</button>
        </div>
      </div>
      <div className="flex-1 mt-8 lg:mt-0 flex justify-center">
        <Image src="/profile.jpg" alt="Profile" width={200} height={200} className="rounded-full border-4 border-white" />
      </div>
    </section>
  );
}
