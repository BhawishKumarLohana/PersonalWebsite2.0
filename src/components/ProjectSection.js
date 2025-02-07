"use client";
import { motion } from 'framer-motion';
import { useInView } from "react-intersection-observer";
import { FaGithub } from "react-icons/fa";

export default function ProjectSection({ title, description, images, liveDemo, blogLink, github }) {
    const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.2 });
    
    return (
      <div ref={ref} className="w-full bg-white bg-opacity-10 backdrop-blur-xl rounded-2xl shadow-lg p-8 md:p-12 flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-12 border border-white/20 pt-5 mt-5">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex-1 text-center md:text-left"
        >
          <h3 className="text-4xl font-semibold text-white mb-4" style={{ fontFamily: 'PlayFair', color: "white" }}>{title}</h3>
          <p className="text-gray-300 text-lg mb-4" style={{ fontFamily: 'monospace', color: "#f9e243" }}>{description}</p>
          
          <div className="mt-6 flex justify-center">
  <a
    href={github}  // Replace with your CV link
    download
    className="border-2 border-yellow-400 text-yellow-400 font-semibold py-2 px-6 rounded-lg transition-all duration-300 transform hover:bg-yellow-400 hover:text-black hover:border-transparent mr-4 mt-10"
  >
    Live Demo
  </a>
  <a
    href={blogLink}  // Replace with your email
    className="border-2 border-white text-white font-semibold py-2 px-6 rounded-lg transition-all duration-300 transform hover:bg-white hover:text-yellow-400 hover:border-transparent mt-10"
  >
    Blog
  </a>
</div>
            
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="flex-1"
        >
          <motion.img
            src={images[0]}
            alt={title}
            className="rounded-lg shadow-lg w-full h-auto hover:scale-105 transition-transform duration-300"
          />
        </motion.div>
      </div>
    );
}

