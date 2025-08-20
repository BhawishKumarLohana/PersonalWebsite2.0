"use client";
import React from "react";

const ProjectCard = ({ project, index }) => {
  const { title, description, technologies, liveDemo, github, statusColor } = project;
  
  return (
    <div className="group relative bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105">
      <div className={`absolute top-4 right-4 w-3 h-3 ${statusColor} rounded-full animate-pulse`}></div>
      <div className="mb-4">
        <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
        <p className="text-white/80 text-sm leading-relaxed">{description}</p>
      </div>
      <div className="flex flex-wrap gap-2 mb-6">
        {technologies.map((tech, techIndex) => (
          <span key={techIndex} className="px-3 py-1 bg-indigo-500/30 rounded-full text-xs border border-indigo-400/50">
            {tech}
          </span>
        ))}
      </div>
      <div className="flex gap-3">
        {liveDemo && (
          <a 
            href={liveDemo} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex-1 px-4 py-2 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg text-white text-sm font-medium hover:from-indigo-600 hover:to-purple-700 transition-all duration-300 text-center"
          >
            🌐 Live Demo
          </a>
        )}
        <a 
          href={github} 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex-1 px-4 py-2 bg-white/20 border border-white/30 rounded-lg text-white text-sm font-medium hover:bg-white/30 transition-all duration-300 text-center"
        >
          🐙 GitHub
        </a>
      </div>
    </div>
  );
};

const ProjectsSection = () => {
  const projects = [
    {
      title: "HKBUMUN Conference",
      description: "A Full Stack Webpage showcasing the HKBUMUN conference serving as the official source for conference details and club's outreach initiatives.",
      technologies: ["React", "Next.js", "Tailwind"],
      liveDemo: "https://hkbumun.vercel.app/",
      github: "https://github.com/yourusername/hkbumun",
      statusColor: "bg-green-400"
    },
    {
      title: "University Finder",
      description: "A location-based app that helps users find universities worldwide, addressing the challenge of exploring higher education options.",
      technologies: ["Python", "Flask", "SQLite"],
      liveDemo: "https://university-finder-demo.vercel.app/",
      github: "https://github.com/BhawishKumarLohana/University-Finder",
      statusColor: "bg-blue-400"
    },
    {
      title: "Personal Portfolio",
      description: "A modern, interactive portfolio website built with Next.js and Three.js, featuring animated backgrounds and gamified navigation.",
      technologies: ["Next.js", "Three.js", "Tailwind"],
      liveDemo: null,
      github: "https://github.com/BhawishKumarLohana/PersonalWebsite2.0",
      statusColor: "bg-pink-400"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12 text-center">
        <h2 className="text-5xl md:text-6xl font-bold mb-16 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-pink-400">
          Featured Projects
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;
