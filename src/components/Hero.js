"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FaArrowDown } from "react-icons/fa";

function Hero() {


  return (
    <div className="relative h-screen flex flex-col justify-center items-center text-white text-center px-4 overflow-hidden">
     
      {/* Name with Glitch Effect */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl md:text-6xl font-extrabold relative glitch"
      >
        Bhawish Kumar
      </motion.h1>

      {/* Typewriter Effect for Tagline */}
      <TypeAnimation
        sequence={["Full Stack Developer", 1000, "Sophomore at HKBU'27 @ CS ", 1000, "Passionate about AI and Human Consciousnes", 1000]}
        wrapper="p"
        speed={50}
        repeat={Infinity}
        className="mt-4 text-base md:text-lg text-yellow-300 font-mono"
      />
     <div className="mt-6 flex justify-center">
      <motion.a
       initial={{ opacity: 0, y: -20 }}
       animate={{ opacity: 1, y: 0 }}
       transition={{ duration: 1 }}
       className="border-2 border-yellow-300 text-yellow-300 font-semibold py-2 px-6 rounded-lg transition-all duration-300 transform hover:bg-yellow-300 hover:text-white hover:border-transparent mr-4"
       href="/path/to/your/cv.pdf"  // Replace with your CV link
      >
        
            Download CV
          </motion.a>
          <motion.a
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            href="mailto:bhawishkumar000@gmail.com"  // Replace with your email
            className="border-2 border-white-600 text-white-600 font-semibold py-2 px-6 rounded-lg transition-all duration-300 transform hover:bg-white hover:text-yellow-300 hover:border-transparent"
          >
            Say Hello
          </motion.a>
        </div>

      {/* Scroll Down Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        className="absolute bottom-10 text-gray-300"
      >
        <FaArrowDown className="text-3xl" />
      </motion.div>
    </div>
  );
}

export default Hero;
