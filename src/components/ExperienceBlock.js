"use client"
import { useInView } from "react-intersection-observer";
import { motion } from 'framer-motion';

export default function ExperienceBlock({ role, company, years, skills, details, direction }) {
    const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.2 });
  
    return (
      <div ref={ref} className={`flex flex-col md:flex-row${direction === "right" ? "-reverse" : ""} items-center mb-12 relative z-10`}>
        <motion.div
          initial={{ opacity: 0, x: direction === "left" ? -100 : 100 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="bg-white bg-opacity-10 backdrop-blur-xl rounded-2xl shadow-lg p-6 w-full md:w-5/12 border border-white/20 hover:bg-opacity-30 hover:shadow-2xl transition-all duration-500"
        >
          <h3 className="text-xl font-semibold"  style={{ fontFamily: 'PlayFair', color: "white" }}>{role}</h3>
          <p className="text-gray-300"   style={{ fontFamily: 'serif', color: "white" }}>{company}</p>
          <p className="text-gray-400"   style={{ fontFamily: 'serif', color: "white" }}>{years}</p>
          <p className="text-gray-400"   style={{ fontFamily: 'serif', color: "white" }}>Skills Used: {skills}</p>
          <ul className="mt-2 text-gray-300">
            {details.map((detail, index) => (
              <li key={index} className="transition-transform duration-300 hover:translate-x-1"   style={{ fontFamily: 'monospace', color: "white" }}>• {detail}</li>
            ))}
          </ul>
        </motion.div>
       
      </div>
    );
  }
