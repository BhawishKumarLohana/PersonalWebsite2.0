"use client"
import { faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Footer = () => {
    return (
      <footer className="py-4 bg-white p-4 md:p-8 flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-12 border border-white/10 pt-5 mt-5">
        <div className="container mx-auto text-center">
          <p className="text-sm font-seri text-black">
            &copy; {new Date().getFullYear()} Bhawish Kumar Personal Website. All rights reserved.
          </p>
          <div className="mt-2">
          <div className="mt-4 flex justify-center">
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-300 mx-2">
            <FontAwesomeIcon icon={faInstagram} size="lg" />
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-300 mx-2">
            <FontAwesomeIcon icon={faLinkedin} size="lg" />
          </a>
        </div>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;