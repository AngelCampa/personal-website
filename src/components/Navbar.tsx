import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-4">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-xl font-bold hover:text-pink-300">
            Angel Campa
          </Link>
          <ul className="flex space-x-6">
            <li>
              <Link
                to="/projects"
                className="bg-white text-purple-600 px-6 py-3 rounded-lg shadow-md hover:bg-purple-600 hover:text-white transition duration-200 mb-8"
              >
                Personal Projects
              </Link>
            </li>
            <li>
              <Link
                to="/experience"
                className="bg-white text-purple-600 px-6 py-3 rounded-lg shadow-md hover:bg-purple-600 hover:text-white transition duration-200 mb-8"
              >
                Experience
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
