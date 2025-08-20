"use client";
import React from "react";

const ProgressBar = ({ currentSection, totalSections }) => {
  const progressPercentage = ((currentSection + 1) / totalSections) * 100;
  
  return (
    <div className="fixed top-0 left-0 w-full h-1 bg-black/20 z-40">
      <div 
        className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transition-all duration-300"
        style={{ width: `${progressPercentage}%` }}
      />
    </div>
  );
};

export default ProgressBar;
