import React from "react";

const Education: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white py-10 px-4 sm:px-10">
      <h1 className="text-4xl font-bold text-center mb-10">Education</h1>
      <div className="flex flex-col sm:flex-row justify-center items-center gap-10">
        <div className="bg-gradient-to-br from-purple-700 to-pink-400 rounded-xl shadow-md p-6 flex-grow-0 flex-shrink-0 sm:w-1/2">
          <h2 className="text-2xl font-semibold mb-4">Traditional Education</h2>
          <div className="flex flex-col gap-4">
            <div className="bg-gradient-to-br from-purple-700 to-pink-400 rounded-lg p-4 flex-grow-0 flex-shrink-0">
              <h3 className="text-lg font-semibold">
                Master of Engineering, Information Technology
              </h3>
              <div className="text-sm font-medium">
                IEXE University (Finish 08/2023)
              </div>
            </div>
            <div className="bg-gradient-to-br from-purple-700 to-pink-400 rounded-lg p-4 flex-grow-0 flex-shrink-0">
              <h3 className="text-lg font-semibold">
                Bachelor’s Degree, Economics
              </h3>
              <div className="text-sm font-medium">
                Universidad Autónoma de Tamaulipas
              </div>
            </div>
            <div className="bg-gradient-to-br from-purple-700 to-pink-400 rounded-lg p-4 flex-grow-0 flex-shrink-0">
              <h3 className="text-lg font-semibold">Bachelor’s Degree, Law</h3>
              <div className="text-sm font-medium">Universidad Tamaulipeca</div>
            </div>
          </div>
        </div>
        <div className="bg-gradient-to-br from-purple-700 to-pink-400 rounded-xl shadow-md p-6 flex-grow-0 flex-shrink-0 sm:w-1/2">
          <h2 className="text-2xl font-semibold mb-4">Certifications</h2>
          <div className="flex flex-col gap-4">
            <div className="bg-gradient-to-br from-purple-700 to-pink-400 rounded-lg p-4 flex-grow-0 flex-shrink-0">
              <h3 className="text-lg font-semibold">
                677 points - TOEFL ITP, English level 100%
              </h3>
            </div>
            <div className="bg-gradient-to-br from-purple-700 to-pink-400 rounded-lg p-4 flex-grow-0 flex-shrink-0">
              <h3 className="text-lg font-semibold">
                Certified Agile Tester - ISTQB
              </h3>
            </div>
            <div className="bg-gradient-to-br from-purple-700 to-pink-400 rounded-lg p-4 flex-grow-0 flex-shrink-0">
              <h3 className="text-lg font-semibold">
                Certified Tester - ISTQB
              </h3>
            </div>
            <div className="bg-gradient-to-br from-purple-700 to-pink-400 rounded-lg p-4 flex-grow-0 flex-shrink-0">
              <h3 className="text-lg font-semibold">
                IT Automation with Python Professional Certificate – Google
                Coursera
              </h3>
            </div>
            <div className="bg-gradient-to-br from-purple-700 to-pink-400 rounded-lg p-4 flex-grow-0 flex-shrink-0">
              <h3 className="text-lg font-semibold">
                Data Science Professional Certificate – IBM Coursera
              </h3>
            </div>
            <div className="bg-gradient-to-br from-purple-700 to-pink-400 rounded-lg p-4 flex-grow-0 flex-shrink-0">
              <h3 className="text-lg font-semibold">
                Big Data Technical Diploma – SEP
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
