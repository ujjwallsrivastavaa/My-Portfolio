import React from "react";
import ContractFarming from '../utils/Contract-Farming.png';
import CropPricePredictor from "../utils/CropPricePredictor.png";
import JobBoardingApplication from "../utils/Job-Boarding-Application.png";
import MovieDatabase from "../utils/Movie-Database.png";
import WeatherApp from "../utils/Weather-App.png";

const Projects = ({projectsRef}) => {
  const projects = [
    { name: "Contract Farming", image: ContractFarming ,gitLink:"https://github.com/ujjwallsrivastavaa/AgriShield"},
    { name: "Crop Price Predictor", image: CropPricePredictor ,gitLink : "https://github.com/ujjwallsrivastavaa/Crop-Price-Prediction"},
    { name: "Job Boarding Application", image: JobBoardingApplication ,gitLink: "https://github.com/02YashRajput/React_Js_Projects/tree/main/job_application_forum"},
    { name: "Movie Database", image: MovieDatabase ,gitLink:"https://github.com/02YashRajput/React_Js_Projects/tree/main/movies_database"},
    { name: "Weather App", image: WeatherApp, gitLink:"https://github.com/02YashRajput/React_Js_Projects/tree/main/WeatherApp_Js"},
  ];

  return (
    <div ref={projectsRef} className="flex flex-col items-center justify-center gap-20 px-10 py-36 bg-muted">
      <div className="flex flex-col justify-center items-center gap-5">
        <h1 className="text-5xl font-bold">My Projects</h1>
        <p className="lg:text-xl text-gray-500">
          Check out some of my recent projects.
        </p>
      </div>
      <div className="flex flex-wrap justify-center items-center gap-10">
        {projects.map((project, index) => (
          <div key={index} className="flex flex-col p-5 bg-white rounded-lg border-[2px] border-white gap-3 hover:bg-muted transition-all duration-150">
            <img src={project.image} alt={`${project.name} thumbnail`} className="max-w-[350px]" />
            <p className="mt-2">{project.name}</p>
            <a href={project.gitLink} target="_blank" rel="noopener noreferrer">
              <button className="lg:text-lg py-2 px-4 bg-black w-40 text-white rounded-lg hover:opacity-70">
                View Git Repo
              </button>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
