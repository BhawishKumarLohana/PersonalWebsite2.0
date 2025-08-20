"use client";
import React from "react";
import {
  FaJava,
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
  FaGithub,
  FaDocker,
  FaLinux,
  FaAws,
} from "react-icons/fa";
import {
  SiCplusplus,
  SiTypescript,
  SiSpringboot,
  SiNextdotjs,
  SiTailwindcss,
  SiGitlab,
  SiPostman,
  SiKubernetes,
  SiAlibabacloud,
  SiMysql,
} from "react-icons/si";


const ExperienceSection = () => {
  const handleDownloadCV = () => {
    console.log("Downloading CV...");
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 py-16 text-center">
        <h2 className="text-5xl md:text-6xl font-bold mb-20 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
          Experience & Skills
        </h2>

        {/* Timeline */}
        <div className="relative flex flex-col md:flex-row md:items-center md:justify-between mb-24 gap-12 md:gap-0">
          {/* Animated horizontal line (hidden on mobile) */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
            <div className="h-1 bg-white/80 animate-[grow_3s_ease-out_forwards] origin-left"></div>
          </div>

          {/* Timeline Items */}
          <div className="relative z-10 flex flex-col items-center text-center md:min-w-[250px]">
            <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 border border-white/30 mb-4">
              <div className="w-4 h-4 bg-blue-400 rounded-full animate-pulse"></div>
            </div>
            <h3 className="text-xl font-bold mb-1">Student Assistant</h3>
            <p className="text-blue-200 text-sm mb-1">HKBU Language Centre</p>
            <p className="text-white/70 text-sm mb-2">Sep 2024 – Present</p>
            <p className="text-white/80 text-sm max-w-xs">
              Designed webpages, increased online visibility, conducted chatbot
              workshops for 100+ students.
            </p>
          </div>

          <div className="relative z-10 flex flex-col items-center text-center md:min-w-[250px]">
            <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 border border-white/30 mb-4">
              <div className="w-4 h-4 bg-purple-400 rounded-full animate-pulse"></div>
            </div>
            <h3 className="text-xl font-bold mb-1">Software Dev Intern</h3>
            <p className="text-blue-200 text-sm mb-1">HKBU Language Centre</p>
            <p className="text-white/70 text-sm mb-2">Jun 2024 – Aug 2024</p>
            <p className="text-white/80 text-sm max-w-xs">
              Debugged & tested full-stack link shortener (Sails.js), improving UX by ~25%.
            </p>
          </div>
        </div>

        {/* Download CV */}
        <div className="mt-16">
          <button
            onClick={handleDownloadCV}
            className="group relative px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl text-white font-semibold text-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <span className="relative z-10 flex items-center gap-2">
              📄 Download CV
              <svg
                className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExperienceSection;
