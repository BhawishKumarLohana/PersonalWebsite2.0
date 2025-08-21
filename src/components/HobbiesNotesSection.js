"use client";
import React from "react";

const HobbyCard = ({ icon, title, items, gradientColors }) => (
  <div className="group bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105">
    <div className="text-center">
      <div className={`w-16 h-16 ${gradientColors} rounded-full flex items-center justify-center mx-auto mb-4`}>
        <span className="text-2xl">{icon}</span>
      </div>
      <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
      <div className="space-y-3 text-left">
        {items.map((item, index) => (
          <div key={index} className="flex items-center gap-3">
            <span className={`w-2 h-2 ${item.color} rounded-full`}></span>
            <span className="text-white/90">{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const HobbiesNotesSection = () => {
  const hobbies = [
    { name: "Digital Art & Design", color: "bg-violet-400" },
    { name: "Photography", color: "bg-purple-400" },
    { name: "Creative Writing", color: "bg-fuchsia-400" },
    { name: "Music Production", color: "bg-violet-400" }
  ];

  const studyNotes = [
    { name: "Programming Concepts", color: "bg-purple-400" },
    { name: "Web Development", color: "bg-fuchsia-400" },
    { name: "Data Structures", color: "bg-purple-400" },
    { name: "System Design", color: "bg-fuchsia-400" }
  ];

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-violet-900 via-purple-900 to-fuchsia-900 text-white">
      <div className="max-w-6xl mx-auto px-4 py-12 text-center">
        <h2 className="text-5xl md:text-6xl font-bold mb-16 text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-400">
          What I do for Myself
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <HobbyCard
            icon="🎨"
            title="Creative Pursuits"
            items={hobbies}
            gradientColors="bg-gradient-to-br from-violet-500 to-purple-600"
          />
          
          <HobbyCard
            icon="📚"
            title="Study Resources"
            items={studyNotes}
            gradientColors="bg-gradient-to-br from-purple-500 to-fuchsia-600"
          />
        </div>

        {/* Explore Notes Button */}
        <div className="mt-8">
          <a 
            href="/interests" 
            className="group relative inline-flex px-8 py-4 bg-gradient-to-r from-violet-500 to-fuchsia-600 rounded-xl text-white font-semibold text-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <span className="relative z-10 flex items-center gap-2">
              🔍 Explore Notes & Hobbies
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-fuchsia-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default HobbiesNotesSection;
