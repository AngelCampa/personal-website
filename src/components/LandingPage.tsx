import React from "react";

const LandingPage: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 min-h-screen">
      <div className="flex flex-col items-center justify-center h-full px-5">
        <h1 className="text-5xl font-bold text-white mb-5">Angel Campa</h1>
        <h2 className="text-2xl text-white mb-8">
          Sr. SDET @ Vanco | ISTQB® Certified Agile Tester
        </h2>
        <p className="text-lg text-white mb-8">
          I am an experienced Software Development Engineer in Test (SDET) with
          a strong background in front-end and back-end test automation, working
          in Agile (Scrum) environments. I have a proven track record of
          creating robust, reliable, and scalable test automation frameworks and
          solutions using tools like Cypress, Selenium, Appium, Postman, and
          Azure DevOps.
        </p>
        <div className="flex flex-wrap gap-5">
          <a
            href="angel-campa-cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-purple-600 px-6 py-3 rounded-lg shadow-md hover:bg-purple-600 hover:text-white transition duration-200"
          >
            View Resume
          </a>
          <a
            href="mailto:angel_campa97@outlook.com"
            className="bg-white text-purple-600 px-6 py-3 rounded-lg shadow-md hover:bg-purple-600 hover:text-white transition duration-200"
          >
            Contact Me
          </a>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
