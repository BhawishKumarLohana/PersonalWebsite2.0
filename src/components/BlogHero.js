// components/HeroSection.js
"use client";

import { motion } from "framer-motion";
import { FaArrowDown } from "react-icons/fa";

import { TypeAnimation } from "react-type-animation";

export default function HeroSection() {
  return (
    <div className="relative w-full h-[700px] overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: 'url(b-cover.JPG)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      ></div>
      {/* Overlay Content */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full bg-black bg-opacity-40 px-4">
        {/* First Line */}
         <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="text-4xl md:text-6xl font-extrabold relative glitch text-white"
              >
                BLOG
              </motion.h1>
        
        {/* Second Line with Type Animation */}
        <div className="mt-4 text-lg md:text-xl text-white text-center max-w-2xl">
          <TypeAnimation
            sequence={[
              "Painting a digital landscape where innovation meets insight and the soul finds expression.",
              3000, // Wait 3 seconds
            ]}
            wrapper="span"
            cursor={true}
            repeat={Infinity}
            style={{ display: "inline-block" }}
          />
        </div>
        <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        className="absolute bottom-10 text-gray-300"
      >
        <FaArrowDown className="text-3xl" />
      </motion.div>
        
      </div>
    </div>
  );
}
