"use client";
import { FaJava, FaPython, FaJsSquare, FaHtml5, FaCss3Alt } from "react-icons/fa";
import {
  SiCplusplus,
  SiReact,
  SiNodedotjs,
  SiFlask,
  SiWordpress,
  SiTailwindcss,
  SiGit,
  SiPycharm,
  SiIntellijidea,
} from "react-icons/si";
import React from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { useState } from "react";

function About() {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const x = (clientX / window.innerWidth - 0.5) * 20;
    const y = (clientY / window.innerHeight - 0.5) * 20;
    setTilt({ x, y });
  };

  return (
    <div>
      <div className="max-w-7xl mx-auto px-4 py-12 border-t-4 border-gray-300">
        
        {/* Image and About Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mb-12 flex flex-col md:flex-row-reverse items-center text-center md:text-left border-b-4 border-gray-300 pb-12"
        >
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="w-full md:w-1/2 flex justify-center mt-8 md:mt-0"
            onMouseMove={handleMouseMove}
            style={{
              transform: `rotateX(${tilt.y}deg) rotateY(${tilt.x}deg)`,
              transition: "transform 0.1s ease-out",
            }}
          >
            <motion.img
              src="BK.jpg"
              alt="Bhawish Kumar"
              className="rounded-full w-80 h-80 object-cover shadow-lg border-4 border-white"
              whileHover={{ scale: 1.05 }}
            />
          </motion.div>

          {/* About Text Section */}
          <div className="md:w-1/2 md:pr-8 mt-5">
            {/* Typewriter Effect */}
            <p className="text-lg md:text-xl max-w-2xl mx-auto md:mx-0" style={{ fontFamily: "monospace", color: "white" }}>
              <Typewriter 
                words={[
                  "I am a passionate developer with a keen interest in creating innovative solutions.",
                  "I love exploring new technologies and continuously learning.",
                  "I enjoy turning ideas into real-world applications."
                ]}
                loop={true}
                cursor
                cursorStyle={<span style={{ color: "#FFD700", animation: "bounce 1s infinite" }}>_</span>}
                typeSpeed={50}
                deleteSpeed={30}
                delaySpeed={2000}
              />
            </p>

            {/* Education Section */}
            <motion.h3
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="text-2xl font-semibold mt-8"
              style={{ fontFamily: '"Playfair Display"', color: "white", textShadow: "2px 2px 5px rgba(255, 255, 255, 0.3)" }}
            >
              Education
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 1 }}
              className="text-lg md:text-xl"
              style={{ fontFamily: "monospace", color: "white" }}
            >
              Bachelor of Science (Hons) in Computer Science from Hong Kong Baptist University (2023 - 2027).
            </motion.p>

            {/* Skills Section */}
            <motion.h3
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7, duration: 1 }}
              className="text-2xl font-semibold mt-8"
              style={{ fontFamily: '"Playfair Display"', color: "white", textShadow: "2px 2px 5px rgba(255, 255, 255, 0.3)" }}
            >
              Skills
            </motion.h3>

            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.2 }
                }
              }}
              className="mt-4 grid grid-cols-3 gap-4 md:grid-cols-4 mx-auto"
            >
              {[
                { icon: <FaJava />, name: "Java", color: "#f89820" },
                { icon: <FaPython />, name: "Python", color: "#306998" },
                { icon: <SiCplusplus />, name: "C/C++", color: "#00599C" },
                { icon: <FaJsSquare />, name: "JavaScript", color: "#F7DF1E" },
                { icon: <FaHtml5 />, name: "HTML", color: "#E34F26" },
                { icon: <FaCss3Alt />, name: "CSS", color: "#264De4" },
                { icon: <SiReact />, name: "React", color: "#61DAFB" },
                { icon: <SiNodedotjs />, name: "Node.js", color: "#8CC84B" },
                { icon: <SiFlask />, name: "Flask", color: "#000000" },
                { icon: <SiWordpress />, name: "WordPress", color: "#21759B" },
                { icon: <SiTailwindcss />, name: "TailwindCSS", color: "#38B2AC" },
                { icon: <SiGit />, name: "Git", color: "#F05032" },
                { icon: <SiPycharm />, name: "PyCharm", color: "#000000" },
                { icon: <SiIntellijidea />, name: "IntelliJ", color: "#000000" },
              ].map((skill, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col items-center relative group"
                  whileHover={{ scale: 1.1 }}
                >
                  <div className="text-3xl mb-2 relative" style={{ color: skill.color }}>
                    {skill.icon}
                    <motion.div
                      className="absolute inset-0 blur-lg opacity-0 group-hover:opacity-50 transition-all duration-300"
                      style={{ backgroundColor: skill.color }}
                    />
                  </div>
                  <span style={{ fontFamily: "Playfair Display", color: "#ffffff" }}>{skill.name}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default About;
