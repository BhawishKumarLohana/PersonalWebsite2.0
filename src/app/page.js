"use client";
import React from "react";
import Hero from "@/components/Hero";
import About from "@/components/About";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import BlogsSection from "@/components/BlogsSection";
import HobbiesNotesSection from "@/components/HobbiesNotesSection";
import ContactSection from "@/components/ContactSection";
import SectionIndicator from "@/components/SectionIndicator";
import ProgressBar from "@/components/ProgressBar";
import { useScrollNavigation } from "@/hooks/useScrollNavigation";

export default function Home() {
  const sections = [
    { id: 'hero', title: 'Introduction', component: <Hero /> },
    { id: 'experience', title: 'Experience', component: <ExperienceSection /> },
    { id: 'projects', title: 'Projects', component: <ProjectsSection /> },
    { id: 'Study Notes', title: 'Study Notes ', component: <BlogsSection /> },
    { id: 'What I do For Myself', title: 'What I do For Myself', component: <HobbiesNotesSection /> },
  ];

  const { currentSection, containerRef } = useScrollNavigation(sections);

  return (
    <div ref={containerRef} className="h-screen overflow-y-scroll snap-y snap-mandatory scrollbar-hide">
      {/* Section Indicator */}
      <SectionIndicator sections={sections} currentSection={currentSection} />

      {/* Progress Bar */}
      <ProgressBar currentSection={currentSection} totalSections={sections.length} />

      {/* Sections */}
      {sections.map((section, index) => (
        <div key={section.id} className="snap-start min-h-screen">
          {section.component}
        </div>
      ))}
    </div>
  );
}
