"use client";
import { useEffect, useRef, useState } from "react";

export const useScrollNavigation = (sections) => {
  const [currentSection, setCurrentSection] = useState(0);
  const containerRef = useRef(null);

  // Accurate: choose section whose center is closest to viewport center
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let rafId = null;

    const computeActive = () => {
      rafId = null;
      const nodes = Array.from(container.querySelectorAll('[data-section-index]'));
      if (nodes.length === 0) return;

      const containerRect = container.getBoundingClientRect();
      const viewportCenter = container.scrollTop + container.clientHeight / 2;

      let bestIdx = 0;
      let bestDistance = Number.POSITIVE_INFINITY;

      for (const node of nodes) {
        const idxStr = node.getAttribute('data-section-index');
        const idx = Number(idxStr);
        const rect = node.getBoundingClientRect();
        const nodeCenter = (rect.top - containerRect.top) + container.scrollTop + rect.height / 2;
        const distance = Math.abs(nodeCenter - viewportCenter);
        if (distance < bestDistance) {
          bestDistance = distance;
          bestIdx = Number.isNaN(idx) ? bestIdx : idx;
        }
      }

      setCurrentSection((prev) => (prev !== bestIdx ? bestIdx : prev));
    };

    const onScroll = () => {
      if (rafId !== null) return;
      rafId = requestAnimationFrame(computeActive);
    };

    const onResize = () => {
      if (rafId !== null) return;
      rafId = requestAnimationFrame(computeActive);
    };

    // Initialize immediately
    computeActive();

    container.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onResize);
    return () => {
      container.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [sections.length]);

  return {
    currentSection,
    containerRef
  };
};

