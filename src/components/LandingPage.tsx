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
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloud } from "@fortawesome/free-solid-svg-icons";

const LandingPage: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-purple-500 to-pink-500 min-h-screen flex items-center">
      <div className="container mx-auto p-4 sm:p-8">
        <div className="text-white text-center px-4">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">Angel Campa</h1>
          <h2 className="text-2xl sm:text-3xl font-semibold mb-8">
            Sr. SDET | 3x ISTQB® Agile Technical Tester
          </h2>
          <div className="text-lg text-white mb-8 space-x-4 sm:space-x-8">
            <a
              href="/angel-campa-cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-purple-600 px-4 sm:px-6 py-2 sm:py-3 rounded-lg shadow-md hover:bg-purple-600 hover:text-white transition duration-200 mb-8 inline-block"
            >
              View Resume
            </a>
            <a
              href="mailto:angel_campa97@outlook.com"
              className="bg-white text-purple-600 px-4 sm:px-6 py-2 sm:py-3 rounded-lg shadow-md hover:bg-purple-600 hover:text-white transition duration-200 mb-8 inline-block"
            >
              Contact Me
            </a>
          </div>
          <div className="mt-16">
            <h3 className="text-white text-2xl sm:text-3xl font-semibold mb-8">
              Coding Experience
            </h3>
            <ul className="grid grid-cols-2 sm:grid-cols-6 gap-4 text-white">
              <li>
                <FontAwesomeIcon icon={faPython} className="text-white" size="3x" />
                Python
              </li>
              <li>
                <FontAwesomeIcon icon={faJava} className="text-white" size="3x" />
                Java
              </li>
              <li>
                <FontAwesomeIcon icon={faJs} className="text-white" size="3x" />
                JavaScript
              </li>
              <li>
                <FontAwesomeIcon icon={faHtml5} className="text-white" size="3x" />
                HTML5
              </li>
              <li>
                <FontAwesomeIcon icon={faCss3} className="text-white" size="3x" />
                CSS3
              </li>
              <li>
                <FontAwesomeIcon icon={faGit} className="text-white" size="3x" />
                Git
              </li>
              <li>
                <FontAwesomeIcon icon={faGithub} className="text-white" size="3x" />
                GitHub
              </li>
              <li>
                <FontAwesomeIcon icon={faCloud} className="text-white" size="3x" />
                Cloud
              </li>
              <li>
                <FontAwesomeIcon icon={faJira} className="text-white" size="3x" />
                Jira
              </li>
              <li>
                <FontAwesomeIcon icon={faNodeJs} className="text-white" size="3x" />
                Node.js
              </li>
              <li>
                <FontAwesomeIcon icon={faReact} className="text-white" size="3x" />
                React
              </li>
            </ul>
          </div>
          <div className="mt-16">
            <h3 className="text-white text-2xl sm:text-3xl font-semibold mb-8">
              Major Projects
            </h3>
            <ul className="text-white space-y-4">
              <li>
                <strong>Vanco Mobile App Test Automation:</strong> Pioneered
                cross-platform Appium-based test automation for Vanco's React
                Native app, ensuring seamless execution across iOS and Android.
              </li>
              <li>
                <strong>High-Priority ETL Project:</strong> Led the testing
                efforts by creating more than 5,000 automated API regression
                tests using Postman, Azure, and CosmosDB.
              </li>
              <li>
                <strong>Appium-based Test Automation Framework:</strong> Refactored
                and maintained a cross-platform framework for Vanco's mobile app.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
