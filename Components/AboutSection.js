import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';

export default function AboutSection() {
  const projectMotion = useMotionValue(0);
  const expMotion = useMotionValue(0);

  // This will transform motion values to displayable values
  const projectCount = useTransform(projectMotion, latest => Math.floor(latest));
  const experienceCount = useTransform(expMotion, latest => Math.floor(latest));

  const [typedText, setTypedText] = useState('');
  const fullText = "I'm Surya";

  useEffect(() => {
    animate(projectMotion, 10, { duration: 2, ease: 'easeOut' });
    animate(expMotion, 0, { duration: 2, ease: 'easeOut' });

    let current = 0;
    const interval = setInterval(() => {
      setTypedText(fullText.slice(0, current + 1));
      current++;
      if (current === fullText.length) {
        clearInterval(interval); // Stop once the text is fully typed
      }
    }, 1000);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <section className="flex items-center justify-center px-4  mt-[70px] ">
      <div className="bg-[#27272a80] text-white rounded-2xl p-8 md:p-12 max-w-4xl w-full shadow-lg relative overflow-hidden">

        {/* Typing Text with Gradient Color */}
        <motion.h1
          className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-sky-400 via-purple-400 to-pink-500 bg-clip-text text-transparent"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {typedText}
          <span className="text-white animate-pulse">|</span>
        </motion.h1>

        {/* Paragraph */}
        <motion.p
          className="text-lg md:text-xl text-gray-300 leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          I'm a front-end developer specializing in React JS. With expertise in modern web technologies, I focus on building user-centric interfaces that combine clean code with exceptional user experience. Currently working on projects that optimize Core Web Vitals and implement seamless API integrations, I'm always excited to tackle new challenges in web development.
        </motion.p>

        {/* Stats */}
        <div className="mt-10 grid grid-cols-2 md:flex md:justify-start gap-8 text-center md:text-left">
          <div>
            <motion.h2 className="text-3xl font-semibold">
              <motion.span>{projectCount}</motion.span>
              <span className="text-sky-400">+</span>
            </motion.h2>
            <p className="text-gray-400 mt-1">Project done</p>
          </div>
          <div>
            <motion.h2 className="text-3xl font-semibold">
              <motion.span>{experienceCount}</motion.span>
              <span className="text-sky-400">+</span>
            </motion.h2>
            <p className="text-gray-400 mt-1">Years of experience</p>
          </div>
        </div>

        {/* Optional Icon */}
        <div className="flex justify-end -mt-5">
          <img src="/logos.jpg" alt="icon" className="w-6 h-6" />
        </div>
      </div>
    </section>
  );
}
