import React from "react";
import usdp from "../utils/dp.jpg"; // Ensure the correct path to your image file
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Hero = ({ homeRef, projectsRef, contactRef }) => {
  const scrollToSection = (sectionRef) => {
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      ref={homeRef}
      className="flex items-center flex-wrap justify-center gap-20 px-10 py-36"
    >
      <div className="max-w-[650px] flex flex-col gap-5 flex-grow">
        <h1 className="text-5xl font-bold ">Ujjwal Srivastava</h1>
        <h3 className="text-2xl lg:text-3xl text-gray-500">
          Software Developer
        </h3>
        <p className="lg:text-xl">
          An innovative software developer proficient in React, Node.js, Python, Java, C++, and Machine Learning, with a strong passion for problem-solving and building scalable, high-performance applications.
        </p>
        <div className="flex gap-10">

          <button
            className="lg:text-lg py-2 px-4 border-[1px] border-white bg-black text-white rounded-lg hover:opacity-80 transition-all duration-150"
            onClick={() => {
              window.open("https://drive.google.com/file/d/1CPozQT-banJxR4sixpqbSlMEjn5htnTT/view?usp=sharing", "_blank"); // The file is now accessible from the root of your site
            }}
          >
            View Resume
          </button>

          <button
            className="lg:text-lg py-2 px-4 border-[1px] border-white bg-black text-white rounded-lg hover:opacity-80 transition-all duration-150"
            onClick={() => scrollToSection(contactRef)}
          >
            Contact Me
          </button>


          <button
            className="text-4xl"
            onClick={() => {
              window.open("https://instagram.com/ujjwallsrivastavaa", "_blank");
            }}
          >
            <FaLinkedinIn />
          </button>

          <button
            className="text-4xl"
            onClick={() => {
              window.open("https://instagram.com/ujjwallsrivastavaa", "_blank");
            }}
          >
            <FaGithub />
          </button>

        </div>

      </div>

      {/* Replaced About Me with Image */}
      <div className="max-w-[400px] flex-grow flex justify-center">
        <img
          src={usdp} // Now using the imported image
          alt="Ujjwal Srivastava"
          className="w-auto h-auto rounded-full object-cover border-2 border-black"
        />
      </div>

    </div>
  );
};

export default Hero;
