"use client";
import React from "react";

const ContactSection = () => {
  const contactLinks = [
    {
      icon: "📧",
      label: "Email",
      href: "mailto:your.email@example.com",
      hoverColor: "hover:text-blue-300"
    },
    {
      icon: "💼",
      label: "LinkedIn",
      href: "https://linkedin.com/in/yourprofile",
      hoverColor: "hover:text-blue-300"
    },
    {
      icon: "🐙",
      label: "GitHub",
      href: "https://github.com/yourusername",
      hoverColor: "hover:text-blue-300"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-pink-900 via-red-900 to-orange-900 text-white">
      <div className="max-w-4xl mx-auto px-4 py-12 text-center">
        <h2 className="text-5xl md:text-6xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-orange-400"
            style={{ fontFamily: '"Playfair Display"', color: "white" }}>
          Contact
        </h2>
        
        <div className="space-y-6 text-xl">
          <p className="text-white/90">Ready to connect? Let's build something amazing together!</p>
          
          <div className="flex justify-center space-x-8 text-lg">
            {contactLinks.map((link, index) => (
              <a 
                key={index}
                href={link.href} 
                target={link.href.startsWith('http') ? "_blank" : undefined}
                rel={link.href.startsWith('http') ? "noopener noreferrer" : undefined}
                className={`${link.hoverColor} transition-colors duration-300 hover:scale-110 transform`}
              >
                {link.icon} {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
