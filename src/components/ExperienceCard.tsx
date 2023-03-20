import React from "react";
import { experiences } from "../data/ExperienceData";
import { FaBriefcase } from "react-icons/fa";

const ExperienceCard: React.FC = () => {
  return (
    <div className="p-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-md">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-white">Experience</h1>
        <p className="text-xl text-white">Here is a summary of my work experience:</p>
      </div>
      <div className="flex flex-col gap-6 mt-6">
        {experiences.map((experience) => {
          return (
            <div
              key={experience.id}
              className="bg-gradient-to-r from-indigo-600 to-red-600 rounded-lg shadow-lg overflow-hidden text-gray-800 px-6 py-4"
            >
              <div className="flex items-center mb-2">
                <FaBriefcase className="mr-2" />
                <h2 className="text-xl font-bold">{experience.jobTitle}</h2>
              </div>
              <div className="mb-4">
                <h3 className="text-lg font-bold">{experience.company}</h3>
                <p className="text-sm">{`${experience.startDate} - ${experience.endDate}`}</p>
                <p className="text-sm">{experience.location}</p>
              </div>
              <ul className="list-disc pl-6">
                {experience.activities.map((activity, index) => (
                  <li key={index} className="mb-2">
                    {activity}
                  </li>
                ))}
              </ul>
              <div className="mt-4">
                <p className="text-gray-800 font-bold">Tools used:</p>
                <ul className="list-disc pl-6">
                  {experience.tools.map((tool, index) => (
                    <li key={index} className="mb-2">
                      {tool}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ExperienceCard;
