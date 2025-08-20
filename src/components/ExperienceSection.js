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

const ExperienceSection = () => {
  const [photoSrc, setPhotoSrc] = useState(null);

  const handlePhotoUpload = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const url = URL.createObjectURL(file);
    setPhotoSrc(url);
  };

  const handleDownloadCV = () => {
    console.log("Downloading CV...");
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 py-14 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
          Experience &amp; Skills
        </h2>

        {/* ===== Experience (LinkedIn-style compact card) ===== */}
        <div className="relative mb-14 mx-auto max-w-4xl">
          <div className="rounded-xl bg-white/10 border border-white/15 backdrop-blur-md shadow-lg overflow-hidden">
            {/* Header with photo uploader (compact) */}
            <div className="flex items-center gap-3 p-4">
              <div className="relative">
                <div className="w-14 h-14 rounded-full overflow-hidden ring-2 ring-white/25">
                  {photoSrc ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={photoSrc} alt="Profile" className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-white/15 text-white/70 text-xs">
                      Upload
                    </div>
                  )}
                </div>
                <label className="absolute -bottom-1 -right-1 cursor-pointer">
                  <input type="file" accept="image/*" onChange={handlePhotoUpload} className="hidden" />
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-blue-500 text-white text-xs border border-white/20 hover:scale-110 transition-transform">
                    +
                  </span>
                </label>
              </div>

              <div className="text-left">
                <h3 className="text-base sm:text-lg font-semibold">Experience</h3>
                <p className="text-white/70 text-xs sm:text-sm">Add your photo to personalize your timeline</p>
              </div>
            </div>

            {/* Timeline body */}
            <div className="relative p-4">
             
              {/* Items wrapper (compact) */}
              <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
                {/* Item 1 */}
                <div className="relative flex-1 group">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-3 h-3 rounded-full bg-blue-400 ring-2 ring-blue-400/30 animate-pulse transition-all group-hover:scale-110 group-hover:ring-blue-300/50" />
                    <span className="text-[11px] bg-white/10 px-2 py-0.5 rounded-full border border-white/10 tracking-wide">
                      Sep 2024 – Present
                    </span>
                  </div>
                  <div className="p-3 rounded-lg bg-white/5 border border-white/10 text-left text-[13px] transition-all group-hover:scale-[1.02] group-hover:-translate-y-[2px] group-hover:shadow-lg group-hover:border-white/20 group-hover:bg-white/10">
                    <p className="font-semibold text-sm">Student Assistant</p>
                    <p className="text-blue-200">Language Centre, Hong Kong Baptist University</p>
                    <p className="text-white/70 mt-1">
                      Built webpages, increased online visibility, and ran chatbot workshops for 100+ students.
                    </p>
                  </div>
                </div>

                {/* Item 2 */}
                <div className="relative flex-1 group">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-3 h-3 rounded-full bg-pink-400 ring-2 ring-pink-400/30 animate-pulse transition-all group-hover:scale-110 group-hover:ring-pink-300/50" />
                    <span className="text-[11px] bg-white/10 px-2 py-0.5 rounded-full border border-white/10 tracking-wide">
                      Jun 2024 – Aug 2024
                    </span>
                  </div>
                  <div className="p-3 rounded-lg bg-white/5 border border-white/10 text-left text-[13px] transition-all group-hover:scale-[1.02] group-hover:-translate-y-[2px] group-hover:shadow-lg group-hover:border-white/20 group-hover:bg-white/10">
                    <p className="font-semibold text-sm">Software Developer Intern</p>
                    <p className="text-blue-200">Language Centre, Hong Kong Baptist University</p>
                    <p className="text-white/70 mt-1">
                      Debugged &amp; tested a full-stack link shortener (Sails.js), improving UX by ~25%.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer (actions) */}
            <div className="px-4 py-3 border-t border-white/10">
              <button
                onClick={handleDownloadCV}
                className="group relative px-5 py-2.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-md text-white text-sm font-medium overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl"
              >
                <span className="relative z-10 flex items-center gap-2">
                  📄 Download CV
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
