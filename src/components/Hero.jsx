import React from "react";
import usdp from "../utils/usdp.jpeg"; // Ensure the correct path to your image file

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
      <div className="max-w-[600px] flex flex-col gap-5 flex-grow">
        <h1 className="text-5xl font-bold ">Ujjwal Srivastava</h1>
        <h3 className="text-2xl lg:text-3xl text-gray-500">
          Software Developer
        </h3>
        <p className="lg:text-xl">
          A versatile software developer skilled in React, Node.js, Python,
          Java, and C++, with a passion for building dynamic and efficient
          applications.
        </p>
        <div className="flex gap-10">
          <button
            className="lg:text-lg py-2 px-4 bg-black text-white rounded-lg hover:opacity-70 transition-all duration-150"
            onClick={() => scrollToSection(projectsRef)}
          >
            View Projects
          </button>
          <button
            className="lg:text-lg py-2 px-4 border-[1px] border-gray-200 rounded-lg hover:bg-muted transition-all duration-150"
            onClick={() => scrollToSection(contactRef)}
          >
            Contact Me
          </button>
        </div>
      </div>

      {/* Replaced About Me with Image */}
      <div className="max-w-[400px] flex-grow flex justify-center">
        <img
          src={usdp} // Now using the imported image
          alt="Ujjwal Srivastava"
          className="w-auto h-auto rounded-full object-cover"
        />
      </div>
    </div>
  );
};

export default Hero;
