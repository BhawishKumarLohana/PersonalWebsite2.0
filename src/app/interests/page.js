"use client"
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";

export default function Interests() {
  // Define your interests as an array of objects
 
  const interests = [
    {
      title: "Programming",
      description:
        "I have been learning to code since I was 14 but I feel the same hunger everyday!",
      icon: "💻",
    },
    {
      title: "Model United Nations",
      description:
        "I came MUNs as a way to improve my communication & presentation skills. Never knew it would become such a big part of my life. I have been part of HKBUMUN Club since last 2 years, currently serving as EXCO.",
      icon: "🌍",
    },
    {
      title: "Philosophy",
      description:
        "I like listening to Alan Watts & Osho currently. It's been a side hobby/pleasure for me.",
      icon: "🧘",
    },
    ,{
        title: "Cycling",
        description:
          "A Cycle & GOOD Scenery is all I want. Special Thanks to Ben for introducing me to the wonders of cycling. ",
        icon: "🚴",
    }
   
  ];

  return (
    <div className="w-full min-h-screen">
      {/* Hero Section */}
      <div className="relative w-full h-[700px] overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage: 'url("in-cover.png")', // Replace with your interests background image
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
        {/* Overlay Content */}
        <div className="relative z-10 flex flex-col justify-center items-center h-full bg-black bg-opacity-40 px-4">
            
          <h1 className="text-4xl md:text-6xl font-bold text-white text-center">
            Interests
          </h1>
          <div className="mt-4 text-lg md:text-xl text-white text-center max-w-2xl">
            <TypeAnimation
              sequence={[
                "I have diary of things I started but never completed. Trust me I will start again soon :)",
                3000, // Wait 3 seconds
                "Life is Beautiful because I am.",
                3000, // Wait 3 seconds
                "I NEED to give my hobbies MORE TIME.",
                3000, // Wait 3 seconds
              ]}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
              style={{ display: "inline-block" }}
            />
          </div>
          <Link href="/contact">
           
          </Link>
        </div>
      </div>

      {/* Interests Section */}
      <div className="max-w-4xl mx-auto mt-12 p-6">
       
        <h2 className="text-5xl font-bold text-gray-900 mb-8 text-center">
          My Passions
        </h2>
        <div className="space-y-6">
          {interests.map((interest, index) => (
            <div
              key={index}
              className="flex items-start p-6 bg-white rounded-lg shadow-md border border-gray-200 transition transform hover:scale-105"
            >
              {/* Icon */}
              <div className="text-4xl mr-4">{interest.icon}</div>
              {/* Title & Description */}
              <div>
                <h3 className="text-2xl font-semibold text-gray-800">
                  {interest.title}
                </h3>
                <p className="text-gray-500 text-sm mt-1">
                  {interest.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
            {/* Inspiration Section */}
            <div className="max-w-4xl mx-auto mt-12 p-6">
        <h2 className="text-5xl font-bold text-gray-900 mb-8 text-center">
          Inspiration
        </h2>
        <div className="flex flex-col items-center bg-white rounded-lg shadow-md border border-gray-200 p-6">
          <img
            src="/drabdussalam.jpg" // Ensure this image exists in your public/images folder
            alt="Dr. Abdus Salam"
            className="w-32 h-32 rounded-full object-cover mb-4"
          />
          <p className="text-xl italic text-gray-700 text-center">
            "Education is the most powerful weapon to change the world."
          </p>
          <p className="mt-4 text-right text-gray-500">- Dr. Abdus Salam</p>
        </div>
      </div>

     
      
    </div>
  );
}
