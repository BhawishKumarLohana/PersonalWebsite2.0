"use client";
import { useEffect, useRef, useState } from "react";

export const useScrollNavigation = (sections) => {
  const [currentSection, setCurrentSection] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleWheel = (e) => {
      if (isScrolling) return;
      
      setIsScrolling(true);
      const direction = e.deltaY > 0 ? 1 : -1;
      const nextSection = Math.max(0, Math.min(sections.length - 1, currentSection + direction));
      
      if (nextSection !== currentSection) {
        setCurrentSection(nextSection);
        if (containerRef.current) {
          containerRef.current.scrollTo({
            top: nextSection * window.innerHeight,
            behavior: 'smooth'
          });
        }
      }
      
      setTimeout(() => setIsScrolling(false), 1000);
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('wheel', handleWheel, { passive: false });
    }

    return () => {
      if (container) {
        container.removeEventListener('wheel', handleWheel);
      }
    };
  }, [currentSection, isScrolling, sections.length]);

  const goToSection = (sectionIndex) => {
    if (sectionIndex >= 0 && sectionIndex < sections.length) {
      setCurrentSection(sectionIndex);
      if (containerRef.current) {
        containerRef.current.scrollTo({
          top: sectionIndex * window.innerHeight,
          behavior: 'smooth'
        });
      }
    }
  };

  return {
    currentSection,
    containerRef,
    goToSection
  };
};
