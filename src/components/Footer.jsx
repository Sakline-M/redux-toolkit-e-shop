/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Logo and Description */}
        <div className="mb-6 md:mb-0">
          <Link to="/" className="text-2xl font-bold mb-2 inline-block">e-SHOP</Link>
          <p className="text-gray-400">Your one-stop shop for everything.</p>
        </div>

        {/* Links */}
        <div className="flex flex-col md:flex-row md:space-x-6 mb-6 md:mb-0">
          <Link to="/" className="text-gray-400 hover:text-white mb-2 md:mb-0">Home</Link>
          <Link to="/about" className="text-gray-400 hover:text-white mb-2 md:mb-0">About</Link>
          <Link to="/services" className="text-gray-400 hover:text-white mb-2 md:mb-0">Services</Link>
          <Link to="/contact" className="text-gray-400 hover:text-white">Contact</Link>
        </div>

        {/* Social Icons */}
        <div className="flex space-x-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
            <FaFacebook className="text-2xl" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
            <FaTwitter className="text-2xl" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
            <FaInstagram className="text-2xl" />
          </a>
        </div>
      </div>

      <div className="mt-6 text-center text-gray-500 text-sm">
        &copy; 2024 e-SHOP. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
