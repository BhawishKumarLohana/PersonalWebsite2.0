"use client";
import React, { useState } from "react";

/* --- Simple GitHub official mark (SVG) --- */
const GitHubMark = ({ className = "w-5 h-5" }) => (
  <svg
    viewBox="0 0 16 16"
    aria-hidden="true"
    className={className}
    fill="currentColor"
  >
    <path d="M8 0C3.58 0 0 3.76 0 8.4c0 3.71 2.39 6.85 5.7 7.96.42.08.58-.19.58-.42 0-.21-.01-.9-.01-1.63-2.33.52-2.82-1.02-2.82-1.02-.38-1-.95-1.27-.95-1.27-.78-.55.06-.54.06-.54.86.06 1.31.9 1.31.9.77 1.36 2.02.97 2.51.74.08-.58.3-.97.54-1.19-1.86-.22-3.82-.97-3.82-4.34 0-.96.33-1.75.88-2.37-.09-.22-.38-1.11.08-2.31 0 0 .7-.23 2.3.9.66-.19 1.37-.29 2.07-.29.7 0 1.41.1 2.07.29 1.6-1.13 2.3-.9 2.3-.9.46 1.2.17 2.09.08 2.31.55.63.88 1.42.88 2.37 0 3.38-1.96 4.11-3.83 4.33.31.28.58.83.58 1.68 0 1.21-.01 2.18-.01 2.48 0 .23.16.5.59.42C13.61 15.25 16 12.11 16 8.4 16 3.76 12.42 0 8 0z" />
  </svg>
);

/* --- Reusable Modal with fade/scale animation --- */
const Modal = ({ open, onClose, children }) => {
  if (!open) return null;
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-md animate-[fadeIn_180ms_ease-out]"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative w-[92vw] max-w-3xl max-h-[88vh] overflow-auto rounded-2xl bg-gradient-to-b from-white/10 to-white/5 border border-white/20 p-4 md:p-6 text-left text-white shadow-2xl animate-[scaleIn_180ms_ease-out]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          className="absolute top-3 right-3 w-9 h-9 rounded-full bg-white/90 text-black flex items-center justify-center shadow-md hover:bg-white"
          onClick={onClose}
          aria-label="Close"
        >
          <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
        {children}
      </div>

      {/* Modal animations */}
      <style jsx global>{`
        @keyframes fadeIn { from { opacity: 0 } to { opacity: 1 } }
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(.96) }
          to { opacity: 1; transform: scale(1) }
        }
      `}</style>
    </div>
  );
};



/* --- Media component (image or video) --- */
const ProjectMedia = ({ mediaType, mediaSrc, poster = "", alt = "" }) => {
  return (
    <div className="mb-2 overflow-hidden rounded-xl border border-white/20 bg-black/30 px-2 py-2">
      <div className="relative w-full aspect-video">
        {mediaType === "video" ? (
          <video
            className="w-full h-full object-cover px-5 py-5"
            src={mediaSrc}
            poster={poster || undefined}
            controls
            playsInline
          />
        ) : (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={mediaSrc}
            alt={alt || "Project preview"}
            className="w-full h-full object-cover"
          />
        )}
      </div>
    </div>
  );
};

/* --- Card --- */
const ProjectCard = ({ project, index }) => {
  const {
    title,
    description,
    specialAchievement, // 👈 used below
    blogLink,
    technologies = [],
    liveDemo,
    github,
    statusColor,
    mediaType,
    mediaSrc,
    poster,
    details,
    bullets = [],
  } = project;

  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="group relative bg-white/10 backdrop-blur-sm rounded-2xl p-5 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-[1.02]">
        {/* Status dot */}
        <div className={`absolute top-4 right-4 w-3 h-3 ${statusColor} rounded-full animate-pulse`} />

       

        {/* Media at the top */}
        {mediaSrc && (
          <ProjectMedia
            mediaType={mediaType}
            mediaSrc={mediaSrc}
            poster={poster}
            alt={`${title} preview`}
          />
        )}

        {/* Title & Description */}
        <div className="mb-3">
          <h3 className="text-xl font-bold text-white mb-1">{title}</h3>
          <p className="text-white/80 text-sm leading-relaxed line-clamp-3">
            {description}
          </p>
        </div>

        {/* Optional inline callout chip (keeps attention within card body) */}
        {specialAchievement && (
          <div className="mb-4 inline-flex items-center gap-2 rounded-lg border border-amber-400/60 bg-amber-500/10 px-2.5 py-1.5 text-[11px] text-amber-200">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-amber-300 animate-pulse" />
            <span className="font-medium">{specialAchievement}</span>
          </div>
        )}

        {/* Tech chips */}
        <div className="flex flex-wrap gap-2 mb-5">
          {technologies.map((tech, i) => (
            <span
              key={i}
              className="px-2.5 py-1 bg-indigo-500/30 rounded-full text-[11px] border border-indigo-400/40"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="flex gap-2">
          {liveDemo && (
            <a
              href={liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 px-4 py-2 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg text-white text-sm font-medium hover:from-indigo-600 hover:to-purple-700 transition-all text-center"
            >
              Live Demo
            </a>
          )}

          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 px-4 py-2 bg-white/20 border border-white/30 rounded-lg text-white text-sm font-medium hover:bg-white/30 transition-all text-center flex items-center justify-center gap-2"
          >
            <GitHubMark className="w-5 h-5" />
            <span>GitHub</span>
          </a>
        </div>

        {/* View More */}
        <button
          onClick={() => setOpen(true)}
          className="mt-3 w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white/90 text-sm hover:bg-white/15 transition flex items-center justify-center gap-2"
          aria-haspopup="dialog"
          aria-expanded={open}
        >
          <span>View More</span>
          <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 5v14M5 12h14" />
          </svg>
        </button>
      </div>

      {/* Modal with more details */}
      <Modal open={open} onClose={() => setOpen(false)}>
        {/* Modal media first, larger */}
        {mediaSrc && (
          <ProjectMedia
            mediaType={mediaType}
            mediaSrc={mediaSrc}
            poster={poster}
            alt={`${title} preview large`}
          />
        )}

        {/* Modal achievement callout */}
        {specialAchievement && (
          <div className="mt-3 mb-4 rounded-xl border-2 border-amber-400/70 bg-amber-500/10 px-3 py-2 flex items-start gap-2">
            <svg viewBox="0 0 24 24" className="w-5 h-5 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M8 21h8M12 17v4M7 4h10v3a5 5 0 0 1-10 0V4Z" />
              <path d="M7 7H5a3 3 0 0 1-3-3V3h5M17 7h2a3 3 0 0 0 3-3V3h-5" />
            </svg>
            <span className="text-amber-100 text-sm font-semibold leading-5">{specialAchievement}</span>
          </div>
        )}

        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <p className="text-white/80 mb-3">{description}</p>

        {details && <p className="text-white/80 mb-3">{details}</p>}

        {bullets.length > 0 && (
          <ul className="list-disc list-outside pl-5 space-y-1 text-white/85 mb-4">
            {bullets.map((b, i) => (
              <li key={i}>{b}</li>
            ))}
          </ul>
        )}

        {/* Tech stack again (small) */}
        {technologies.length > 0 && (
          <div className="mb-4 flex flex-wrap gap-1.5">
            {technologies.map((t, i) => (
              <span key={i} className="px-2 py-0.5 rounded-full bg-white/10 border border-white/15 text-[11px]">
                {t}
              </span>
            ))}
          </div>
        )}

        {/* Links */}
        <div className="flex gap-2">
          {liveDemo && (
            <a
              href={liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 px-10 py-10 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg text-white text-sm font-medium hover:from-indigo-600 hover:to-purple-700 transition-all text-center"
            >
              Live Demo
            </a>
          )}
          <a
            href={blogLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 px-4 py-2 bg-white/20 border border-white/30 rounded-lg text-white text-sm font-medium hover:bg-white/30 transition-all text-center flex items-center justify-center gap-2"
          >
            <span>Blog</span>
          </a>

        <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 px-4 py-2 bg-white/20 border border-white/30 rounded-lg text-white text-sm font-medium hover:bg-white/30 transition-all text-center flex items-center justify-center gap-2"
          >
            <GitHubMark className="w-5 h-5" />
            <span>GitHub</span>
          </a>
        </div>
      </Modal>
    </>
  );
};


{/* 

  {
      title: "Cloud Kitchen",
      blogLink:"",
      description:
        "Full Stack Application with a Modular Micro-service arhitecture as a prototype of Food Delivery Applications like FoodPanda.",
      technologies: ["SpringBoot", "Next.js", "MySql","Docker"],
      liveDemo: "https://github.com/BhawishKumarLohana/CloudKitchen",
      github: "https://github.com/BhawishKumarLohana/CloudKitchen",
      statusColor: "bg-green-400",
      mediaType: "image",
      mediaSrc: "WIP.png",
      details:
        "Project is in Progress. Please wait.",
      bullets: [
        
        
        
      ],
    },
  
  
  
  */}

/* --- Section --- */
const ProjectsSection = () => {
  const projects = [
    {
      title: "FoodBites",
      specialAchievement : "Nominated for Best Pitch at UnitedHack",
      blogLink:"",
      description: 
     "FoodBites delivers a simple yet powerful solution to inefficiencies in food donation and redistribution.",
      technologies: ["Next.js", "MySql","GoogleMapsApi"],
      liveDemo: "https://github.com/BhawishKumarLohana/CloudKitchen",
      github: "https://github.com/BhawishKumarLohana/CloudKitchen",
      statusColor: "bg-green-400",
      mediaType: "image",
      mediaSrc: "FOODBITESDEMO.gif",
      details:
        "",
      bullets: [
        "Frontend: Developed with Next.js for rendering and routing",
        "Styling: Powered by TailwindCSS for responsive, accessible design",
        "Backend: MySQL used for data storage, managed via Prisma ORM",
        "Maps Integration: Google Maps API for real-time geolocation and address-based interaction"
                
        
        
      ],
    },
    {
      title: "Vista - Crypto Tracker",
      specialAchievement:null,
      blogLink:"",
      description:
        " Built Crypto website with live coin tracking, portfolio management, price alerts, social features, and chart visualizations",
      technologies: ["Next.Js", "MySql", "Prisma"],
      liveDemo: "https://vista-zeta.vercel.app/",
      github: "https://github.com/BhawishKumarLohana/vista",
      statusColor: "bg-blue-400",
      mediaType: "image",
      mediaSrc: "VistaDemo.gif", // <— replace with your video
      poster: "/projects/university-finder-poster.jpg", // optional poster image
      details:
        "",
      bullets: [
        "Live coin prices via CoinMarketCap & CryptoCompare APIs",
        "Historical charts with filters (24H, 7D, 30D, 1Y)",
        "Price alerts with automatic email notifications",
      ],
    },
    {
      title: "HKBUMUN Conference",
      specialAchievement:null,
      blogLink:"",
      description:
        "Build conference website that acts as the central hub for official conference information, serving 100+ active members.",
      technologies: ["Next.js", "Tailwind"],
      liveDemo: "https://hkbumun.vercel.app/",
      github: null ,
      statusColor: "bg-pink-400",
      mediaType: "image",
      mediaSrc: "/HKBUMUNDEMO.gif", 
      details:
        "",
      bullets: [
        "Implemented dynamic pages for committees, resources, and schedule, enabling organizers to scale and update content easily.",
        "Designed and maintained a glassmorphic, mobile-first UI with clear CTAs and structured navigation for seamless delegate onboarding.",
      ],
    },
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
