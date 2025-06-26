'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

export default function HeroSection() {
  const router = useRouter();

  const handleViewResume = () => {
    router.push('/Surya T Resume (1).pdf');
  };

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.3,
        duration: 0.6,
        ease: 'easeOut',
      },
    }),
  };

  return (
    <section className=" w-full  text-white flex items-center justify-center   px-6 ">
      <style jsx>{`
        @keyframes spin-slow {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
        .glow-ring {
          background: conic-gradient(
            from 0deg,
            #22d3ee,
            #3b82f6,
            #6366f1,
            #22d3ee
          );
          filter: blur(40px);
          opacity: 0.5;
          animation: spin-slow 6s linear infinite;
        }
        .icon-bounce {
          animation: bounce 1.5s infinite;
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }
      `}</style>

      <div className="max-w-7xl w-full flex flex-col-reverse lg:flex-row mt-[10%] items-center justify-between gap-12">
        {/* Left Content */}
        <div className="flex-1 flex flex-col px-30 items-center lg:items-start text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="flex items-center gap-2 mb-4"
          >
            <img src="/logos.jpg " alt="Avatar" width={12} height={12} className="rounded-full" />
            <span className="text-sm text-gray-300">
              <span className="inline-block w-2 h-2 bg-green-500 rounded-full mr-1" />
              Available for work
            </span>
          </motion.div>

          <div className="space-y-1 sm:space-y-2 md:space-y-3">
            {[
              'Building ',
              'Modern Websites',
              'Scalable for the',
              'Future',
            ].map((line, index) => (
              <motion.h1
                key={index}
                custom={index}
                variants={textVariants}
                initial="hidden"
                animate="visible"
                className={`text-3xl sm:text-4xl md:text-5xl lg:text-[2.5rem] xl:text-[4rem] font-extrabold leading-tight ${
                  index === 0
                    ? 'text-white'
                    : index === 1
                    ? 'text-gray-300'
                    : index === 2
                    ? 'text-gray-400'
                    : 'text-blue-400'
                }`}
              >
                {line}
              </motion.h1>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 1 }}
            className="mt-6 flex flex-wrap justify-center lg:justify-start gap-4"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              onClick={handleViewResume}
              className="bg-[#22b2f2] hover:bg-[#1aa0db] text-black font-medium py-2 px-6 rounded-xl text-base flex items-center gap-2 transition duration-300"
            >
              View CV
              <span className="text-lg">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m.75 12 3 3m0 0 3-3m-3 3v-6m-1.5-9H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                </svg>
              </span>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="bg-white/10 hover:bg-white/20 border border-white/20 text-white font-medium py-2 px-6 rounded-xl text-base flex items-center gap-2 transition duration-300"
            >
              Scroll down
              <span className="text-lg icon-bounce">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5" />
                </svg>
              </span>
            </motion.button>
          </motion.div>
        </div>

        {/* Right: Glowing Circular Image with Gradient Ring */}
        <div className="flex-1 flex justify-center items-center relative">
          {/* Glowing Ring Background */}
          <div className="absolute w-72 h-72 sm:w-80 sm:h-80 rounded-full glow-ring z-0" />
          {/* Foreground Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="w-64 h-64 sm:w-72 sm:h-72 rounded-full z-10 p-1"
          >
            <div className="w-full h-full rounded-full overflow-hidden">
              <Image
                src="/WhatsApp Image 2025-05-05 at 23.29.05_a2748b9b.jpg"
                alt="Profile"
                width={500}
                height={500}
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
