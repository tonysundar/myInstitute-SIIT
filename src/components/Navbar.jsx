import React from 'react';
import siitLogo from '../assets/siitLogo.jpeg';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <header className="text-gray-600 body-font shadow-md fixed w-full z-10 top-0 left-0 bg-white">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          {/* Logo Section */}
          
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 hover:text-blue-500">
            <img 
              src={siitLogo} 
              alt="SIIT Logo" 
              className="w-16 h-16 rounded-full transition-all duration-300 ease-in-out hover:scale-105" 
            />
            <span className="ml-3 text-xl text-blue-500">SIIT</span>
          </a>
          

          {/* Navbar Links */}
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            {/* Home Link */}
            <NavLink
              to="/"
              className="mr-5 text-gray-800 hover:text-blue-500 transition duration-300"
              activeClassName="text-blue-500 font-bold underline"
            >
              Home
            </NavLink>
            
            {/* About Us Link */}
            <NavLink
              to="/AboutUs"
              className="mr-5 text-gray-800 hover:text-blue-500 transition duration-300"
              activeClassName="text-blue-500 font-bold underline"
            >
              About Us
            </NavLink>

            {/* Courses Link */}
            <NavLink
              to="/Projects"
              className="mr-5 text-gray-800 hover:text-blue-500 transition duration-300"
              activeClassName="text-blue-500 font-bold underline"
            >
              Courses
            </NavLink>

            {/* Contact Us Link */}
            <NavLink
              to="/ContactUs"
              className="mr-5 text-gray-800 hover:text-blue-500 transition duration-300"
              activeClassName="text-blue-500 font-bold underline"
            >
              Contact Us
            </NavLink>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <div className="pt-20"> {/* Add padding to content below the navbar */}
        {/* Your main content goes here */}
      </div>
    
    </div>
  );
};


export default Navbar;
