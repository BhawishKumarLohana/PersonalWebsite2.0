"use client";
import React from "react";

const BlogCard = ({ blog }) => {
  const { category, readTime, title, description, date, readMoreLink, categoryColor } = blog;
  
  return (
    <div className="group bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105">
      <div className="text-left">
        <div className="flex items-center gap-2 mb-3">
          <span className={`px-2 py-1 ${categoryColor} rounded-full text-xs border border-white/30`}>
            {category}
          </span>
          <span className="text-white/60 text-sm">{readTime}</span>
        </div>
        <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
        <p className="text-white/80 text-sm leading-relaxed mb-4">{description}</p>
        <div className="flex items-center justify-between">
          <span className="text-white/60 text-sm">{date}</span>
          <a 
            href={readMoreLink} 
            className="text-emerald-400 hover:text-emerald-300 transition-colors font-medium"
          >
            Read More →
          </a>
        </div>
      </div>
    </div>
  );
};

const BlogsSection = () => {
  const blogs = [
    {
      category: "Web Development",
      readTime: "5 min read",
      title: "Building the HKBUMUN Brand Website",
      description: "A deep dive into creating a comprehensive conference website that serves as the official source for conference details and club outreach initiatives.",
      date: "Dec 2024",
      readMoreLink: "/blog/Project-HKBUMUNBrandWebsite",
      categoryColor: "bg-emerald-500/30 border-emerald-400/50"
    },
    {
      category: "App Development",
      readTime: "7 min read",
      title: "University Finder: Location-Based Education Discovery",
      description: "Exploring the development of a location-based app that helps students find universities worldwide using Google Maps API and SQLite.",
      date: "Nov 2024",
      readMoreLink: "/blog/Project-UniFinder",
      categoryColor: "bg-cyan-500/30 border-cyan-400/50"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-emerald-900 via-teal-900 to-cyan-900 text-white">
      <div className="max-w-6xl mx-auto px-4 py-12 text-center">
        <h2 className="text-5xl md:text-6xl font-bold mb-16 text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
          Blog & Insights
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {blogs.map((blog, index) => (
            <BlogCard key={index} blog={blog} />
          ))}
        </div>

        {/* View All Blogs Button */}
        <div className="mt-8">
          <a 
            href="/blog" 
            className="group relative inline-flex px-8 py-4 bg-gradient-to-r from-emerald-500 to-cyan-600 rounded-xl text-white font-semibold text-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <span className="relative z-10 flex items-center gap-2">
              📚 View All Blog Posts
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-cyan-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default BlogsSection;
