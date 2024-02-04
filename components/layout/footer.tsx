import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-2">
          <div className="flex items-center space-x-4 justify-center md:justify-start">
            <a
              href="#"
              className="text-2xl text-white hover:text-gray-400 transition-colors duration-300"
            >
              <FaFacebookF size={20} />
            </a>
            <a
              href="#"
              className="text-2xl text-white hover:text-gray-400 transition-colors duration-300"
            >
              <FaTwitter size={20} />
            </a>
            <a
              href="#"
              className="text-2xl text-white hover:text-gray-400 transition-colors duration-300"
            >
              <FaInstagram size={20} />
            </a>
          </div>
          <div className="text-sm text-gray-400 flex items-center space-x-4 pt-4 md:pt-0">
            <a
              href="#"
              className="text-sm hover:text-gray-400 transition-colors duration-300"
            >
              Privacy Policy
            </a>
            <span className="text-gray-400">|</span>
            <a
              href="#"
              className="text-sm hover:text-gray-400 transition-colors duration-300"
            >
              Terms and Conditions
            </a>
          </div>
        </div>
        <div className="text-sm text-gray-400 pt-8 border-t border-gray-800 text-center md:text-left">
          &copy; {new Date().getFullYear()} MySite. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
