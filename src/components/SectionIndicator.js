"use client";
import React from "react";

const SectionIndicator = ({ sections, currentSection }) => {
  return (
    <div className="fixed top-8 left-1/2 transform -translate-x-1/2 z-50">
      <div className="bg-black/80 backdrop-blur-sm rounded-full px-6 py-3 border-2 border-white/30">
        <div className="flex items-center space-x-4">
          {sections.map((section, index) => (
            <div key={section.id} className="flex items-center space-x-2">
              <div className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSection 
                  ? 'bg-white scale-125 shadow-lg shadow-white/50' 
                  : 'bg-white/40'
              }`} />
              <span className={`text-sm font-mono transition-all duration-300 ${
                index === currentSection 
                  ? 'text-white font-bold' 
                  : 'text-white/60'
              }`}>
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
