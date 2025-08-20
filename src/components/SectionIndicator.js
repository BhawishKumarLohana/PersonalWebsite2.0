"use client";
import React from "react";

const SectionIndicator = ({ sections, currentSection }) => {
  return (
    <div className="fixed top-1/2 left-4 transform -translate-y-1/2 z-50">
      <div className="bg-black/80 backdrop-blur-sm rounded-full py-4 px-2 border-2 border-white/30">
        <div className="flex flex-col items-center space-y-4">
          {sections.map((section, index) => (
            <div key={section.id} className="flex flex-col items-center space-y-1">
              <div
                className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full transition-all duration-300 ${
                  index === currentSection
                    ? "bg-white scale-125 shadow-lg shadow-white/50"
                    : "bg-white/40"
                }`}
              />
              <span
                className={`text-[10px] sm:text-xs writing-mode-vertical font-mono transition-all duration-300 ${
                  index === currentSection
                    ? "text-white font-bold"
                    : "text-white/60"
                }`}
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
