import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-lg font-semibold mb-2">Angela Li</p>
            <p className="text-gray-300 text-sm">
              Computer Science Undergraduate
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-6 mb-4">
              <a 
                href="#hero" 
                className="text-gray-300 hover:text-white transition-colors duration-300"
              >
                Home
              </a>
              <a 
                href="#about" 
                className="text-gray-300 hover:text-white transition-colors duration-300"
              >
                About
              </a>
              <a 
                href="#projects" 
                className="text-gray-300 hover:text-white transition-colors duration-300"
              >
                Projects
              </a>
              <a 
                href="#contact" 
                className="text-gray-300 hover:text-white transition-colors duration-300"
              >
                Contact
              </a>
            </div>
            <p className="text-gray-400 text-sm">
              © {currentYear} Angela Li.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
