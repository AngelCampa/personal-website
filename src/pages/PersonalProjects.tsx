import React from "react";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

const PersonalProjects = () => {
  const projects = [
    {
      title: "LSTM Application to Predict Mexican Stock Prices",
      description: "A project that utilizes LSTM to predict Mexican stock prices based on historical data.",
      github: "https://github.com/AngelCampa/LSTM-application-to-predict-Mexican-Stock-Prices",
    },
    {
      title: "Personal Website",
      description: "My personal website built using React, TypeScript, Tailwind CSS, and Vite.",
      github: "https://github.com/AngelCampa/personal-website",
    },
    {
      title: "Web Scraping with Python to SQL Database",
      description: "A web scraping project using Python to gather and store data into an SQL database.",
      github: "https://github.com/AngelCampa/Web-Scraping-with-python-to-SQL-database",
    },
    {
      title: "Genetic Algorithm Python",
      description: "A genetic algorithm implementation in Python for solving optimization problems.",
      github: "https://github.com/AngelCampa/Genetic-Algorithm-Python",
    },
    {
      title: "Brandamo",
      description: "An online platform for creating and managing brand content.",
      website: "https://brandamo.app/",
    },
  ];

  return (
    <div className="p-10">
      <h1 className="text-4xl font-bold mb-5">Personal Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-gradient-to-br from-purple-500 to-pink-500 bg-opacity-30 p-5 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-3">{project.title}</h2>
            <p>{project.description}</p>
            {project.github ? (
              <a href={project.github} target="_blank" rel="noreferrer" className="inline-flex items-center mt-4 text-white hover:text-pink-400">
                <FaGithub className="mr-2" />
                View on GitHub
              </a>
            ) : (
              <a href={project.website} target="_blank" rel="noreferrer" className="inline-flex items-center mt-4 text-white hover:text-pink-400">
                <FiExternalLink className="mr-2" />
                Visit Website
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PersonalProjects;
