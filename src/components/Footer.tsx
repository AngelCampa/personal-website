import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-4 mt-auto">
      <div className="container mx-auto">
        <div className="flex justify-center items-center">
          <p className="text-sm">&copy; {new Date().getFullYear()} Angel Campa. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
