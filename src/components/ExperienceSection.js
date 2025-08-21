"use client";
import React, { useState } from "react";
import {
  FaJava,
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
  FaGithub,
  FaDocker,
  FaLinux,
  FaAws,
} from "react-icons/fa";
import {
  SiCplusplus,
  SiTypescript,
  SiSpringboot,
  SiNextdotjs,
  SiTailwindcss,
  SiGitlab,
  SiPostman,
  SiKubernetes,
  SiAlibabacloud,
  SiMysql,
} from "react-icons/si";
import { FiChevronDown } from "react-icons/fi";
import ProfileImage from "./ProfilePicture";

const EXPERIENCE = [
  {
    id: "ipv4",
    date: "June 2025 – Present",
    color: "blue",
    dotClass: "bg-blue-400 ring-blue-400/30",
    title: "Full Stack Development Intern",
    org: "Ipv4 Superhub Limited",
    short: "Working across React/Next.js + Node/Spring services and infra.",
    bullets: [
      "Built compact UI components and integrated REST endpoints.",
      "Improved deployment flow; containerized services with Docker.",
      "Collaborated on DB schema tweaks and performance profiling.",
    ],
    stack: ["React", "Next.js", "Node/Spring", "Docker"],
  },
  {
    id: "hkbu-assistant",
    date: "Sep 2024 – Jan 2025",
    color: "blue",
    dotClass: "bg-blue-400 ring-blue-400/30",
    title: "Student Assistant",
    org: "Language Centre, Hong Kong Baptist University",
    short: "Built pages and supported chatbot workshops for 100+ students.",
    bullets: [
      "Designed and shipped pages improving visibility and conversions.",
      "Ran hands-on chatbot sessions; collected learner feedback.",
      "Optimized content delivery and accessibility across devices.",
    ],
    stack: ["HTML/CSS", "JavaScript", "Design Systems"],
  },
  {
    id: "hkbu-intern",
    date: "Jun 2024 – Aug 2024",
    color: "pink",
    dotClass: "bg-pink-400 ring-pink-400/30",
    title: "Software Developer Intern",
    org: "Language Centre, Hong Kong Baptist University",
    short: "Debugged & tested a full-stack link shortener (Sails.js).",
    bullets: [
      "Resolved frontend bugs, refined flows; ~25% UX uplift.",
      "Auth & routing fixes; added regression tests.",
      "Deployed staging builds and wrote concise release notes.",
    ],
    stack: ["Sails.js", "JavaScript", "Testing"],
  },
];

const ExperienceSection = () => {
  const [photoSrc, setPhotoSrc] = useState(null);
  const [openIds, setOpenIds] = useState(() => new Set());

  

  const toggleOpen = (id) => {
    setOpenIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const handleDownloadCV = () => {
    console.log("Downloading CV...");
  };

  // Extra milestones (decorative circular positions) along the line
  const horizontalMilestones = [12, 36, 64, 88]; // percentages across width
  const verticalMilestones = [15, 40, 70, 90];   // percentages down the height

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 py-14 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 relative group">
        Professional Experience
        <span className="px-2 py-2 mt-11 absolute left-1/2 transform -translate-x-1/2 text-base md:text-lg font-semibold text-yellow-500 opacity-0 group-hover:opacity-100 animate-pulse transition duration-1000 ease-in-out drop-shadow-lg">
          FOR RECRUITERS
        </span>
      </h2>



        {/* ===== Experience (LinkedIn-style compact card) ===== */}
        <div className="relative mb-14 mx-auto max-w-4xl">
          <div className="rounded-xl bg-white/10 border border-white/15 backdrop-blur-md shadow-lg overflow-hidden">
            {/* Header with photo uploader (compact) */}
          <div className="flex items-center gap-3 p-4">
            <div className="w-12 h-12 sm:w-14 sm:h-14 flex-shrink-0">
              <ProfileImage />
            </div>
            <div className="text-left">
              <h3 className="text-base sm:text-lg font-semibold">Bhawish Kumar</h3>
            </div>
          </div>


            {/* Timeline body */}
            <div className="relative p-4">
              {/* Decorative extra circular positions */}
             
              {/* Items wrapper (compact) */}
              <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
                {EXPERIENCE.map((item) => {
                  const open = openIds.has(item.id);
                  const isBlue = item.color === "blue";
                  return (
                    <div key={item.id} className="relative flex-1 group">
                      {/* Dot + Date row */}
                      <div className="flex items-center gap-2 mb-1">
                        <div
                          className={`w-3 h-3 rounded-full ring-2 animate-pulse transition-all group-hover:scale-110 ${
                            item.dotClass
                          } ${isBlue ? "shadow-[0_0_8px_rgba(59,130,246,0.55)]" : "shadow-[0_0_8px_rgba(236,72,153,0.55)]"}`}
                        />
                        <span className="text-[11px] bg-white/10 px-2 py-0.5 rounded-full border border-white/10 tracking-wide">
                          {item.date}
                        </span>
                      </div>

                      {/* Card */}
                      <div className="p-3 rounded-lg bg-white/5 border border-white/10 text-left text-[13px] transition-all group-hover:scale-[1.02] group-hover:-translate-y-[2px] group-hover:shadow-lg group-hover:border-white/20 group-hover:bg-white/10">
                        {/* Header Row: title/org + View More */}
                        <div className="flex items-start justify-between gap-2">
                          <div>
                            <p className="font-semibold text-sm">{item.title}</p>
                            <p className="text-blue-200">{item.org}</p>
                          </div>

                          {/* View More Toggle */}
                          <button
                            onClick={() => toggleOpen(item.id)}
                            className="flex items-center gap-1 text-white/80 hover:text-white px-2 py-1 rounded-md bg-white/5 border border-white/10 hover:bg-white/10 transition text-xs"
                            aria-expanded={open}
                            aria-controls={`exp-${item.id}`}
                          >
                            <span>{open ? "Hide" : "View"}</span>
                            <FiChevronDown
                              className={`transition-transform ${open ? "rotate-180" : ""}`}
                              aria-hidden
                            />
                          </button>
                        </div>

                        {/* Short summary */}
                        {item.short && (
                          <p className="text-white/70 mt-2">{item.short}</p>
                        )}

                        {/* Expandable details */}
                        <div
                          id={`exp-${item.id}`}
                          className={`grid transition-[grid-template-rows] duration-300 ease-out overflow-hidden ${
                            open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                          }`}
                        >
                          <div className="min-h-0">
                            <ul className="mt-3 list-disc list-outside pl-5 space-y-1 text-white/80">
                              {item.bullets.map((b, i) => (
                                <li key={i}>{b}</li>
                              ))}
                            </ul>
                            {item.stack?.length ? (
                              <div className="mt-3 flex flex-wrap gap-1.5">
                                {item.stack.map((t) => (
                                  <span
                                    key={t}
                                    className="px-2 py-0.5 rounded-full bg-white/10 border border-white/10 text-[11px]"
                                  >
                                    {t}
                                  </span>
                                ))}
                              </div>
                            ) : null}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Footer (actions) */}
            <div className="px-4 py-3 border-t border-white/10">
              <button
                onClick={handleDownloadCV}
                className="group relative px-5 py-2.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-md text-white text-sm font-medium overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl"
              >
                <span className="relative z-10 flex items-center gap-2">
                   Download Resume
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
            </div>
          </div>

          {/* Keyframes for the line draw */}
          <style jsx global>{`
            @keyframes grow {
              from { transform: scaleX(0); }
              to { transform: scaleX(1); }
            }
          `}</style>
        </div>

        {/* ===== Skills (compact, combined with icons) ===== */}
        <div className="grid md:grid-cols-2 gap-6 text-center">
          {/* Languages & Frameworks */}
          <div className="rounded-xl bg-white/10 border border-white/15 backdrop-blur-md p-4 shadow-lg">
            <h3 className="text-lg font-semibold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-orange-300">
              Languages &amp; Frameworks
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-[13px]">
              <div className="flex items-center justify-center gap-2 px-2 py-1.5 rounded-md bg-white/5 border border-white/10 hover:bg-white/10 transition">
                <FaJava className="text-base" aria-hidden /> <span>Java</span>
              </div>
              <div className="flex items-center justify-center gap-2 px-2 py-1.5 rounded-md bg-white/5 border border-white/10 hover:bg-white/10 transition">
                <FaPython className="text-base" aria-hidden /> <span>Python</span>
              </div>
              <div className="flex items-center justify-center gap-2 px-2 py-1.5 rounded-md bg-white/5 border border-white/10 hover:bg-white/10 transition">
                <SiCplusplus className="text-base" aria-hidden /> <span>C/C++</span>
              </div>
              <div className="flex items-center justify-center gap-2 px-2 py-1.5 rounded-md bg-white/5 border border-white/10 hover:bg-white/10 transition">
                <FaJs className="text-base" aria-hidden /> <span>JavaScript</span>
              </div>
              <div className="flex items-center justify-center gap-2 px-2 py-1.5 rounded-md bg-white/5 border border-white/10 hover:bg-white/10 transition">
                <SiTypescript className="text-base" aria-hidden /> <span>TypeScript</span>
              </div>
              <div className="flex items-center justify-center gap-2 px-2 py-1.5 rounded-md bg-white/5 border border-white/10 hover:bg-white/10 transition">
                <FaHtml5 className="text-base" aria-hidden /> <span>HTML</span>
              </div>
              <div className="flex items-center justify-center gap-2 px-2 py-1.5 rounded-md bg-white/5 border border-white/10 hover:bg-white/10 transition">
                <FaCss3Alt className="text-base" aria-hidden /> <span>CSS</span>
              </div>
              <div className="flex items-center justify-center gap-2 px-2 py-1.5 rounded-md bg-white/5 border border-white/10 hover:bg-white/10 transition">
                <SiSpringboot className="text-base" aria-hidden /> <span>Spring Boot</span>
              </div>
              <div className="flex items-center justify-center gap-2 px-2 py-1.5 rounded-md bg-white/5 border border-white/10 hover:bg-white/10 transition">
                <FaReact className="text-base" aria-hidden /> <span>React.js</span>
              </div>
              <div className="flex items-center justify-center gap-2 px-2 py-1.5 rounded-md bg-white/5 border border-white/10 hover:bg-white/10 transition">
                <SiNextdotjs className="text-base" aria-hidden /> <span>Next.js</span>
              </div>
              <div className="flex items-center justify-center gap-2 px-2 py-1.5 rounded-md bg-white/5 border border-white/10 hover:bg-white/10 transition">
                <SiTailwindcss className="text-base" aria-hidden /> <span>TailwindCSS</span>
              </div>
            </div>
          </div>

          {/* Developer Tools */}
          <div className="rounded-xl bg-white/10 border border-white/15 backdrop-blur-md p-4 shadow-lg">
            <h3 className="text-lg font-semibold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-teal-300">
              Developer Tools
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-[13px]">
              <div className="flex items-center justify-center gap-2 px-2 py-1.5 rounded-md bg-white/5 border border-white/10 hover:bg-white/10 transition">
                <FaGitAlt className="text-base" aria-hidden /> <span>Git</span>
              </div>
              <div className="flex items-center justify-center gap-2 px-2 py-1.5 rounded-md bg-white/5 border border-white/10 hover:bg-white/10 transition">
                <FaGithub className="text-base" aria-hidden /> <span>GitHub</span>
              </div>
              <div className="flex items-center justify-center gap-2 px-2 py-1.5 rounded-md bg-white/5 border border-white/10 hover:bg-white/10 transition">
                <SiGitlab className="text-base" aria-hidden /> <span>GitLab</span>
              </div>
              <div className="flex items-center justify-center gap-2 px-2 py-1.5 rounded-md bg-white/5 border border-white/10 hover:bg-white/10 transition">
                <SiPostman className="text-base" aria-hidden /> <span>Postman</span>
              </div>
              <div className="flex items-center justify-center gap-2 px-2 py-1.5 rounded-md bg-white/5 border border-white/10 hover:bg-white/10 transition">
                <FaDocker className="text-base" aria-hidden /> <span>Docker</span>
              </div>
              <div className="flex items-center justify-center gap-2 px-2 py-1.5 rounded-md bg-white/5 border border-white/10 hover:bg-white/10 transition">
                <SiKubernetes className="text-base" aria-hidden /> <span>Kubernetes</span>
              </div>
              <div className="flex items-center justify-center gap-2 px-2 py-1.5 rounded-md bg-white/5 border border-white/10 hover:bg-white/10 transition">
                <FaLinux className="text-base" aria-hidden /> <span>Linux</span>
              </div>
              <div className="flex items-center justify-center gap-2 px-2 py-1.5 rounded-md bg-white/5 border border-white/10 hover:bg-white/10 transition">
                <FaAws className="text-base" aria-hidden /> <span>AWS</span>
              </div>
              <div className="flex items-center justify-center gap-2 px-2 py-1.5 rounded-md bg-white/5 border border-white/10 hover:bg-white/10 transition">
                <SiAlibabacloud className="text-base" aria-hidden /> <span>Alibaba Cloud</span>
              </div>
              <div className="flex items-center justify-center gap-2 px-2 py-1.5 rounded-md bg-white/5 border border-white/10 hover:bg-white/10 transition">
                <SiMysql className="text-base" aria-hidden /> <span>MySQL</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ExperienceSection;

