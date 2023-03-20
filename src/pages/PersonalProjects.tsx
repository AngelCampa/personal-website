import React from "react";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

const PersonalProjects = () => {
  const projects = [
    {
      title: "LSTM Application to Predict Mexican Stock Prices",
      description:
        "This project implements a Long-short Term Memory (LSTM) Recurrent Neural Network to predict the price of Cemex stock on the Mexican stock exchange from January 2020 to April 2021. The results are compared to a simple RNN. The LSTM has an R2 of 0.72 and RMSE of 0.21 in testing, while the simple RNN has an R2 of 0.75 and RMSE of 0.20, indicating it is the better model for this dataset. The code and methodology are provided.",
      github:
        "https://github.com/AngelCampa/LSTM-application-to-predict-Mexican-Stock-Prices",
    },
    {
      title: "Web Scraping with Python to SQL Database",
      description:
        "This project developed a Python script to extract information from the transcriptions page of Andrés Manuel López Obrador, transfer it to a relational database, and practice querying the database. The methodology involved importing necessary libraries, iterating through web pages to obtain information, and converting the data into data frames to export to MySQL. The project involved testing and writing SQL queries to obtain specific information from the database, such as the number of times specific words were mentioned in López Obrador's speeches.",
      github:
        "https://github.com/AngelCampa/Web-Scraping-with-python-to-SQL-database",
    },
    {
      title: "Genetic Algorithm Python",
      description:
        "This project explores the use of a genetic algorithm to optimize the selection of parameters for the Relative Strength Index (RSI) technical indicator and increase profits for trading strategies. The study found that using a genetic algorithm to optimize parameters yielded a 57% annual profit, versus a 6% annual profit gained by using the default parameters. The algorithm was tested on ten representative stocks of the Mexican stock market.",
      github: "https://github.com/AngelCampa/Genetic-Algorithm-Python",
    },
    {
      title: "Brandamo",
      description:
        "Brandamo is a one-stop content creation platform that allows users to generate tailored content for major social media platforms using the power of AI. It offers a user-friendly interface and customizable content creation options, with analytics to gain insights on content performance. Brandamo helps users create engaging content, save time and effort, and track their progress.",
      website: "https://brandamo.app/",
    },
    {
      title: "Personal Website",
      description:
        "My personal website built using React, TypeScript, Tailwind CSS, and Vite.",
      github: "https://github.com/AngelCampa/personal-website",
    },
  ];

  return (
    <div className="p-10">
      <h1 className="text-4xl font-bold mb-5">Personal Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gradient-to-br from-purple-700 to-pink-400 bg-opacity-30 p-5 rounded-lg shadow-md"
          >
            <h2 className="text-2xl font-semibold mb-3">{project.title}</h2>
            <p>{project.description}</p>
            {project.github ? (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center mt-4 text-white hover:text-pink-400"
              >
                <FaGithub className="mr-2" />
                View on GitHub
              </a>
            ) : (
              <a
                href={project.website}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center mt-4 text-white hover:text-pink-400"
              >
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
