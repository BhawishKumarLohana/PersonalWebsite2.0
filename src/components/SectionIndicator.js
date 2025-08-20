"use client";
import React, { useState } from "react";

const SectionIndicator = ({ sections, currentSection }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="fixed top-1/2 left-4 transform -translate-y-1/2 z-50">
      <div
        className="bg-gradient-to-b from-black/60 to-black/40 backdrop-blur-md rounded-2xl py-6 px-3 border border-white/20 shadow-xl
        transition-all duration-300"
        onMouseEnter={() => setExpanded(true)}   // expands on hover (desktop)
        onMouseLeave={() => setExpanded(false)}
        onClick={() => setExpanded((prev) => !prev)} // toggles on tap (mobile)
      >
        <div className="flex flex-col space-y-6">
          {sections.map((section, index) => (
            <div
              key={section.id}
              className="flex items-center space-x-3 group"
            >
              {/* Dot */}
              <div
                className={`w-3.5 h-3.5 rounded-full transition-all duration-300 ${
                  index === currentSection
                    ? "bg-white scale-125 shadow-[0_0_10px_rgba(255,255,255,0.8)]"
                    : "bg-white/40"
                }`}
              />

              {/* Name — hidden on mobile unless expanded */}
              <span
                className={`text-xs sm:text-sm font-mono transition-all duration-300
                ${expanded ? "opacity-100 w-auto" : "opacity-0 w-0"} 
                hidden sm:inline-block sm:opacity-100 sm:w-auto
                ${index === currentSection ? "text-white font-bold" : "text-white/60"}`}
              >
                {section.title}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionIndicator;
