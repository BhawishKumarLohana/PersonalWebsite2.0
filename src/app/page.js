"use client"
import { useEffect, useState } from "react";
import ExperienceBlock from "@/components/ExperienceBlock"
import ProjectSection from "@/components/ProjectSection";
import Hero from "@/components/Hero"
import About from "@/components/About"


export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(true);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-blue-800 via-white-800 to-black via-white-800">
  

  {/* Hero Section */}
  <Hero/>
  {/* About Sections */}
  <h2 className="text-5xl md:text-6xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-amber-200"
      style={{ fontFamily: '"Playfair Display"', color:"white" }}>
        About
  </h2>
  <About/>
  {/* Exp Sections */}
  <div className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-5xl md:text-6xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-amber-200"
      style={{ fontFamily: '"Playfair Display"', color:"white" }}>
        Experience
      </h2>

      <div className="relative">
        {/* Timeline Connector */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l-2 border-gray-300"></div>

        {/* Experience Block 1 */}
        <ExperienceBlock
          role="Student Assistant"
          company="Language Centre, Hong Kong Baptist University"
          years="Sep 2024 – Present"
          skills="Java, Spring, SQL"
          details={["Designed engaging webpages for new schemes, increasing online visibility and estimated student interest.", "Conducted live workshops on the application of the in-house chatbot platform, engaging over 100 students and enhancing their understanding of the tools available"]}
          direction="left"
        />

        {/* Experience Block 2 */}
        <ExperienceBlock
          role="Software Developer Intern"
          company="Language Centre, Hong Kong Baptist University"
          years="Jun 2024 – Aug 2024"
          skills="Python, Flask"
          details={["Debugged and tested a full-stack link shortener built with Sails.js, resolving critical issues and enhancing front-end functionality, leading to an estimated 25% improvement in user experience.", "Co-presented at the Language Centre’s International Conference on Data Governance, contributing to discussions that engaged over 60 attendees.", "Converted language textbooks into machine-readable formats using open-source machine learning models, improving accessibility, enabling text analysis and facilitating automated content extraction."]}
          direction="right"
        />
      </div>
    </div>
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-5xl md:text-6xl font-bold mb-8 text-center text-transparent bg-clip-text"
      style={{ fontFamily: '"Playfair Display"',color:"white" }}>
        Projects
      </h2>

      <ProjectSection
        title="HKBUMUN Conference"
        description="A Full Stack Webpage showcasing the HKBUMUN conference serving as the official source for conference details and club’s outreach initiatives."
        images={[
          "projectA.png",
        ]}
        blogLink={"/blog/Project-HKBUMUNBrandWebsite"}
        github={"https://hkbumun.vercel.app/"}
      />
      
      <ProjectSection
        title="University Finder"
        description="A location-based app that helps users find universities worldwide, addressing the challenge of exploring higher education options. It uses the Google Maps Geocoding API for location and stores data in a SQLite database, facilitating informed decisions for prospective students."
        images={[
          "projectB.png",
        ]}
        blogLink={"/blog/Project-UniFinder"}
        github={"https://github.com/BhawishKumarLohana/University-Finder"}
      />
    </div>
 
 

</div>
    
    

      
  );
}
