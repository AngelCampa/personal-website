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
              <a
                href="#about"
                className="hover:text-pink-300 transition duration-200"
              >
                About
              </a>
            </li>
            <li>
              <Link to="/projects" className="hover:text-pink-300">
                Personal Projects
              </Link>
            </li>
            <li>
              <a
                href="#experience"
                className="hover:text-pink-300 transition duration-200"
              >
                Experience
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:text-pink-300 transition duration-200"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
