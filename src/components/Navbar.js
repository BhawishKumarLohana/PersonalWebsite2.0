"use client";
// components/Navbar.js
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-30 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2 pt-4">
            <img src="/logo.png" alt="Logo" className="h-14" />
            <div className="flex flex-col">
              <a
                href="/"
                className="hover:text-[#ffffff] transition-colors duration-300 text-2xl font-bold"
                style={{
                  color: "#f9e243",
                  fontFamily: '"Playfair Display", serif',
                }}
              >
                KUMAR
              </a>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a
                href="/blog"
                className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium"
              >
                Blogs
              </a>
              <a
                href="/interests"
                className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium"
              >
                Interests
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-gradient-to-br from-blue-800 via-white-800 to-black via-white-800 transition-transform transform translate-x-0 duration-300 ease-in-out lg:hidden">
          <div className=" bg-gradient-to-br from-blue-800 via-white-800 to-black via-white-800 h-full p-10 flex flex-col space-y-12 shadow-lg">
            <button
              onClick={toggleMenu}
              className="text-[#f9e243] focus:outline-none"
              aria-label="Close menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <a
              href="/"
              className="hover:text-[#ffffff] transition-colors duration-300 text-2xl font-bold"
              style={{ color: "#f9e243" }}
            >
              Home
            </a>
            <a
              href="/blog"
              className="hover:text-[#ffffff] transition-colors duration-300 text-2xl font-bold"
              style={{ color: "#f9e243" }}
            >
              Blog
            </a>
            <a
              href="/interests"
              className="hover:text-[#ffffff] transition-colors duration-300 text-2xl font-bold"
              style={{ color: "#f9e243" }}
            >
              Interests
            </a>
           
          </div>
        </div>
      )}
    </nav>
  );
}