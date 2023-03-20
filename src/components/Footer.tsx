import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-4 mt-auto">
      <div className="container mx-auto">
        <div className="flex justify-center items-center">
          <p className="text-sm">&copy; {new Date().getFullYear()} Angel Campa. All rights reserved.</p>
          <div className="ml-6 space-x-4">
            <a
              href="https://github.com/AngelCampa"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-pink-300 transition duration-200"
            >
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
            <a
              href="https://www.linkedin.com/in/angel-campa-3383a0144/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-pink-300 transition duration-200"
            >
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
