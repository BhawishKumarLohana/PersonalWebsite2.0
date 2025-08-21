"use client";
import { useEffect, useState } from "react";

export default function ProfileImage() {
  const [isOpen, setIsOpen] = useState(false);
  const [stage, setStage] = useState("closed"); // "closed" | "opening" | "open" | "closing"

  const open = () => {
    setIsOpen(true);
    requestAnimationFrame(() => setStage("opening"));
    // settle to "open" after transition
    setTimeout(() => setStage("open"), 200);
  };

  const close = () => {
    setStage("closing");
    setTimeout(() => {
      setIsOpen(false);
      setStage("closed");
    }, 200);
  };

  // Close on ESC
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => e.key === "Escape" && close();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen]);

  return (
    <div className="relative">
      {/* Small Profile Image (trigger) */}
      <button
        type="button"
        className="w-14 h-14 rounded-full overflow-hidden ring-2 ring-white/25 focus:outline-none focus:ring-4 focus:ring-white/40 transition-transform hover:scale-[1.03]"
        onClick={open}
        aria-label="Open profile photo"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/BK.jpg" alt="Profile" className="w-full h-full object-cover" />
      </button>

      {/* Modal */}
      {isOpen && (
        <div
          className={`fixed inset-0 z-50 flex items-center justify-center ${
            stage === "opening" || stage === "open"
              ? "bg-black/60"
              : "bg-black/0"
          } transition-colors duration-200`}
          onClick={close}
          aria-modal="true"
          role="dialog"
        >
          {/* Inner container prevents backdrop click from closing */}
          <div
            className="relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              type="button"
              onClick={close}
              aria-label="Close"
              className="absolute -top-4 -right-4 md:-top-5 md:-right-5 w-9 h-9 md:w-10 md:h-10 rounded-full bg-white/90 text-black shadow-lg border border-black/10
                         flex items-center justify-center hover:bg-white transition"
            >
              <svg
                viewBox="0 0 24 24"
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>

            {/* Circular image with scale/opacity animation */}
            <div
              className={`
                rounded-full overflow-hidden ring-4 ring-white shadow-2xl
                ${stage === "opening" || stage === "open" ? "opacity-100 scale-100" : "opacity-0 scale-95"}
                transition-all duration-200 ease-out
              `}
              style={{
                width: "30vmin",
                height: "30vmin",
                maxWidth: "520px",
                maxHeight: "520px",
                minWidth: "220px",
                minHeight: "220px",
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/BK.jpg"
                alt="Profile Enlarged"
                className="w-full h-full object-cover"
                draggable={false}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
