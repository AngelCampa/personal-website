import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold hover:text-pink-300">
          Angel Campa
        </Link>

        <button
          type="button"
          className="block lg:hidden hover:text-pink-300 focus:text-pink-300 focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6 fill-current"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Mobile menu</title>
            {isMenuOpen ? (
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M19.293 4.293a1 1 0 0 0-1.414 0L12 10.586 5.121 3.707a1 1 0 0 0-1.414 1.414L10.586 12l-7.879 6.879a1 1 0 0 0 1.414 1.414L12 13.414l6.879 6.879a1 1 0 0 0 1.414-1.414L13.414 12l6.879-6.879a1 1 0 0 0 0-1.414z"
              />
            ) : (
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm16 4H4v2h16v-2z"
              />
            )}
          </svg>
        </button>

        <ul
          className={`${
            isMenuOpen ? "block" : "hidden"
          } lg:flex lg:items-center`}
        >
          <li>
            <Link
              to="/projects"
              className="block lg:inline-block text-lg font-medium hover:text-pink-300 px-3 py-2 rounded-lg"
            >
              Personal Projects
            </Link>
          </li>
          <li>
            <Link
              to="/experience"
              className="block lg:inline-block text-lg font-medium hover:text-pink-300 px-3 py-2 rounded-lg"
            >
              Experience
            </Link>
          </li>
          <li>
            <Link
              to="/education"
              className="block lg:inline-block text-lg font-medium hover:text-pink-300 px-3 py-2 rounded-lg"
            >
              Education
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
