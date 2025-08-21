"use client";
import React from "react";

/* --- Simple, organic, handwritten-notes vibe --- */
const StudyNoteCard = ({ note }) => {
  const {
    subject,
    topic,
    summary,
    updatedAt,
    pdfLink, // only action
    subjectColor = "bg-amber-200/70 border-amber-500/30",
  } = note;

  return (
    <div
      className="relative rounded-xl border border-stone-300/60 shadow-[0_6px_24px_rgba(0,0,0,0.12)] p-4 text-stone-800 bg-[length:100%_28px] bg-[repeating-linear-gradient(0deg,rgba(0,0,0,0.04)_0_1px,transparent_1px_28px),linear-gradient(90deg,rgba(37,99,235,0.15)_0_2px,transparent_2px)] bg-stone-50 hover:-rotate-[0.6deg] hover:scale-[1.01] transition-all duration-300"
      style={{ backgroundPosition: "left 40px top 0, left 40px top 0" }}
    >
      {/* Pin */}
      <div className="absolute -top-3 left-6 text-2xl select-none">📌</div>

      {/* subject + date */}
      <div className="flex items-center gap-2 mb-2">
        <span className={`px-2 py-0.5 rounded-full text-[11px] border ${subjectColor}`}>{subject}</span>
        {updatedAt && <span className="text-[11px] text-stone-500">· {updatedAt}</span>}
      </div>

      {/* topic */}
      <h3 className="text-lg font-semibold italic tracking-tight mb-1">{topic}</h3>

      {/* short summary */}
      {summary && <p className="text-sm text-stone-700 leading-relaxed line-clamp-3 pr-2">{summary}</p>}

      {/* only action: Download PDF */}
      {pdfLink && (
        <div className="mt-4">
          <a
            href={pdfLink}
            download
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-stone-400/70 bg-white/70 text-stone-800 text-sm hover:bg-white transition"
            aria-label="Download PDF"
            title="Download PDF"
          >
            Download PDF
          </a>
        </div>
      )}
    </div>
  );
};

const StudyNotesSection = () => {
  const notes = [
    {
      subject: "Software Development",
      topic: "SpringBoot Microservices",
      summary: "If you want to get started with advanced full stack development particularly relevant to entrepises.",
      updatedAt: "Aug 2025",
      pdfLink: "/pdfs/SpringBoot_MS.pdf",
    },
    {
      subject: "Software Development",
      topic: "SpringBoot Basics",
      summary: "Beginner's guide to SpringBoot",
      updatedAt: "Jul 2025",
      pdfLink: "/pdfs/SpringBoot_basics.pdf",
    },
  ];

  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-emerald-900 via-teal-900 to-cyan-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 relative group">
        Study Notes
        <span className="px-2 py-2 mt-11 absolute left-1/2 transform -translate-x-1/2 text-base md:text-lg font-semibold text-yellow-500 opacity-0 group-hover:opacity-100 animate-pulse transition duration-1000 ease-in-out drop-shadow-lg">
         
        </span>
      </h2>
      
      </div>

      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {notes.map((n, i) => (
            <StudyNoteCard key={i} note={n} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StudyNotesSection;


