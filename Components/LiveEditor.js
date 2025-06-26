'use client';
import React from 'react';

export default function LiveEditor() {
    return (
      <section className="px-6 py-12 max-w-4xl mx-auto">
        <h2 className="text-xl font-bold text-center mb-4">Live Code Editor</h2>
        <pre className="bg-gray-800 p-4 rounded overflow-x-auto text-sm">
  {`function greet(name) {
    return "Hello, " + name + "!";
  }
  
  console.log(greet("Milind"));`}
        </pre>
      </section>
    );
  }
  