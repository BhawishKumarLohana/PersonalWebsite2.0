"use client";
import React, { useState } from "react";

const ROW_H = "h-6"; // 24px row keeps centers aligned

const SectionIndicator = ({ sections, currentSection }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="fixed top-1/2 left-4 -translate-y-1/2 z-50">
      <div
        className="ml-2 bg-gradient-to-b from-black/60 to-black/40 backdrop-blur-md rounded-2xl py-3 px-2 border border-white/20 shadow-xl transition-all duration-300"
        onMouseEnter={() => setExpanded(true)}
        onMouseLeave={() => setExpanded(false)}
        onClick={() => setExpanded((p) => !p)}
      >
        {/* Fixed-height rows; no vertical jitter */}
        <div className="flex flex-col gap-5">
          {sections.map((section, index) => (
            <div key={section.id} className={`flex items-center ${ROW_H}`}>
              {/* Dot (no scale); use ring/glow for active */}
              <div
                className={`w-3.5 h-3.5 ml-3 rounded-full shrink-0 transition-shadow
                  ${index === currentSection
                    ? "bg-white ring-2 ring-white/30 shadow-[0_0_12px_2px_rgba(255,255,255,0.35)]"
                    : "bg-white/40"
                  }`}
                aria-current={index === currentSection ? "true" : "false"}
              />

              {/* Title (appears on hover/tap), doesn't affect row height */}
              <span
                className={`ml-3 text-xs sm:text-sm font-mono whitespace-nowrap overflow-hidden 
                  transition-[opacity,transform,max-width] duration-300
                  ${expanded ? "opacity-100 translate-x-0 max-w-[160px]" : "opacity-0 -translate-x-1 max-w-0"}
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
