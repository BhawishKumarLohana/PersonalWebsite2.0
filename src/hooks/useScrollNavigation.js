"use client";
import { useEffect, useRef, useState } from "react";

export const useScrollNavigation = (sections) => {
  const [currentSection, setCurrentSection] = useState(0);
  const containerRef = useRef(null);

  // Observe which section is in view and update immediately
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const sectionNodes = Array.from(container.querySelectorAll('[data-section-index]'));
    if (sectionNodes.length === 0) return;

    const thresholds = [0, 0.25, 0.5, 0.75, 1];
    const observer = new IntersectionObserver(
      (entries) => {
        let mostVisible = null;
        for (const entry of entries) {
          if (mostVisible === null || entry.intersectionRatio > mostVisible.intersectionRatio) {
            mostVisible = entry;
          }
        }
        if (mostVisible && mostVisible.target) {
          const indexAttr = mostVisible.target.getAttribute('data-section-index');
          const idx = Number(indexAttr);
          if (!Number.isNaN(idx)) {
            setCurrentSection((prev) => (prev !== idx ? idx : prev));
          }
        }
      },
      { root: container, threshold: thresholds }
    );

    sectionNodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, [sections.length]);

  return {
    currentSection,
    containerRef
  };
};

