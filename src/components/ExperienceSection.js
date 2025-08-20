"use client";
import React from "react";

const ExperienceSection = () => {
  const handleDownloadCV = () => {
    // Add CV download logic here
    console.log("Downloading CV...");
    // You can add actual CV download functionality
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white">
      <div className="max-w-6xl mx-auto px-4 py-12 text-center">
        <h2 className="text-5xl md:text-6xl font-bold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
          Experience & Skills
        </h2>
        
        {/* Experience Timeline */}
        <div className="relative mb-12">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-400 to-purple-400"></div>
          
          {/* Experience Item 1 */}
          <div className="relative mb-8">
            <div className="flex items-center justify-center">
              <div className="bg-white/20 backdrop-blur-sm rounded-full p-3 border border-white/30">
                <div className="w-4 h-4 bg-blue-400 rounded-full"></div>
              </div>
            </div>
            <div className="mt-4 text-center max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-white mb-2">Student Assistant</h3>
              <p className="text-blue-200 mb-2">Language Centre, Hong Kong Baptist University</p>
              <p className="text-white/70 mb-3">Sep 2024 – Present</p>
              <p className="text-white/90 text-lg leading-relaxed">
                Designed engaging webpages for new schemes, increasing online visibility and estimated student interest. 
                Conducted live workshops on the application of the in-house chatbot platform, engaging over 100 students.
              </p>
              <div className="flex justify-center gap-2 mt-3">
                <span className="px-3 py-1 bg-blue-500/30 rounded-full text-sm border border-blue-400/50">Java</span>
                <span className="px-3 py-1 bg-blue-500/30 rounded-full text-sm border border-blue-400/50">Spring</span>
                <span className="px-3 py-1 bg-blue-500/30 rounded-full text-sm border border-blue-400/50">SQL</span>
              </div>
            </div>
          </div>

          {/* Experience Item 2 */}
          <div className="relative mb-8">
            <div className="flex items-center justify-center">
              <div className="bg-white/20 backdrop-blur-sm rounded-full p-3 border border-white/30">
                <div className="w-4 h-4 bg-purple-400 rounded-full"></div>
              </div>
            </div>
            <div className="mt-4 text-center max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-white mb-2">Software Developer Intern</h3>
              <p className="text-blue-200 mb-2">Language Centre, Hong Kong Baptist University</p>
              <p className="text-white/70 mb-3">Jun 2024 – Aug 2024</p>
              <p className="text-white/90 text-lg leading-relaxed">
                Debugged and tested a full-stack link shortener built with Sails.js, resolving critical issues and enhancing 
                front-end functionality, leading to an estimated 25% improvement in user experience.
              </p>
              <div className="flex justify-center gap-2 mt-3">
                <span className="px-3 py-1 bg-purple-500/30 rounded-full text-sm border border-purple-400/50">Python</span>
                <span className="px-3 py-1 bg-purple-500/30 rounded-full text-sm border border-purple-400/50">Flask</span>
                <span className="px-3 py-1 bg-purple-500/30 rounded-full text-sm border border-purple-400/50">Sails.js</span>
              </div>
            </div>
          </div>
        </div>

        {/* Download CV Button */}
        <div className="mt-8">
          <button 
            onClick={handleDownloadCV}
            className="group relative px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl text-white font-semibold text-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <span className="relative z-10 flex items-center gap-2">
              📄 Download CV
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
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
