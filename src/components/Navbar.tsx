import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-4">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-bold">Angel Campa</h1>
          <ul className="flex space-x-6">
            <li>
              <a href="#about" className="hover:text-pink-300 transition duration-200">
                About
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-pink-300 transition duration-200">
                Personal Projects
              </a>
            </li>
            <li>
              <a href="#experience" className="hover:text-pink-300 transition duration-200">
                Experience
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-pink-300 transition duration-200">
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
