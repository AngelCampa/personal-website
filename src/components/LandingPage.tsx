import React from "react";
import {
    faPython,
    faJava,
    faJs,
    faHtml5,
    faCss3,
    faGit,
    faGithub,
    faJira,
    faNodeJs,
    faReact,
  } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloud } from '@fortawesome/free-solid-svg-icons';


const LandingPage: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-purple-500 to-pink-500 min-h-screen flex items-center">
      <div className="container mx-auto p-8">
        <div className="text-white text-center">
          <h1 className="text-5xl font-bold mb-6">Angel Campa</h1>
          <h2 className="text-3xl font-semibold mb-8">
            Sr. SDET | ISTQB® Certified Agile Tester
          </h2>
          <div className="text-lg text-white mb-8 space-x-8">
            <a
              href="resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-purple-600 px-6 py-3 rounded-lg shadow-md hover:bg-purple-600 hover:text-white transition duration-200 mb-8"
            >
              View Resume
            </a>
            <a
              href="mailto:angel_campa97@outlook.com"
              className="bg-white text-purple-600 px-6 py-3 rounded-lg shadow-md hover:bg-purple-600 hover:text-white transition duration-200 mb-8"
            >
              Contact Me
            </a>
          </div>
          <div className="mt-16">
            <h3 className="text-white text-3xl font-semibold mb-8">About Me</h3>
            <p className="text-white text-lg">
              Experienced Software Development Engineer in Test with a strong
              background in QA, Frontend and Backend Test Automation, Scrum,
              CI/CD Integration, and various testing tools. Passionate about
              delivering high-quality software solutions and ensuring optimal
              user experiences.
            </p>
          </div>
          <div className="mt-16">
            <h3 className="text-white text-3xl font-semibold mb-8">Skills</h3>
            <ul className="flex flex-wrap justify-center space-x-6 text-white">
            <li>
              <FontAwesomeIcon icon={faPython} className="mr-2 text-white" size="3x" />
            </li>
            <li>
              <FontAwesomeIcon icon={faJava} className="mr-2 text-white" size="3x" />
            </li>
            <li>
              <FontAwesomeIcon icon={faJs} className="mr-2 text-white" size="3x" />
            </li>
            <li>
              <FontAwesomeIcon icon={faHtml5} className="mr-2 text-white" size="3x" />
            </li>
            <li>
              <FontAwesomeIcon icon={faCss3} className="mr-2 text-white" size="3x" />
            </li>
            <li>
              <FontAwesomeIcon icon={faGit} className="mr-2 text-white" size="3x" />
              Git
            </li>
            <li>
              <FontAwesomeIcon icon={faGithub} className="mr-2 text-white" size="3x" />
            </li>
            <li>
              <FontAwesomeIcon icon={faCloud} className="mr-2 text-white" size="3x" />
            </li>
            <li>
              <FontAwesomeIcon icon={faJira} className="mr-2 text-white" size="3x" />
            </li>
            <li>
              <FontAwesomeIcon icon={faNodeJs} className="mr-2 text-white" size="3x" />
            </li>
            <li>
              <FontAwesomeIcon icon={faReact} className="mr-2 text-white" size="3x" />
            </li>
            </ul>
          </div>
          <div className="mt-16">
            <h3 className="text-white text-3xl font-semibold mb-8">
              Recent Work
            </h3>
            <ul className="text-white space-y-4">
              <li>
                <strong>High priority ETL project:</strong> Lead the testing
                efforts by creating more than 5,000 automated API regression
                tests using Postman, Azure, and CosmosDB.
              </li>
              <li>
                <strong>Appium-based test automation framework:</strong>{" "}
                Refactor and maintain a cross-platform framework for Vanco's
                mobile app.
              </li>
              <li>
                <strong>Data migration testing:</strong> Lead, coordinate, and
                execute cross-team testing efforts for data migration, ensuring
                data integrity across hundreds of thousands of records.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
