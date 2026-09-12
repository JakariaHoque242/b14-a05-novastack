import React from 'react';
import logoImg from '../assets/logo-text.png';

const Navbar = () => {
  return (
    <div className="navbar bg-white sticky top-0 z-50 border-b border-gray-100 px-4 lg:px-8">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li><a href="#home">Home</a></li>
            <li><a href="#technologies">Technologies</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <a className="btn btn-ghost hover:bg-transparent">
          <img src={logoImg} alt="Dev Stack Logo" className="h-8" />
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li><a href="#home">Home</a></li>
          <li><a href="#technologies">Technologies</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
      <div className="navbar-end flex gap-2">
        <a className="font-medium text-sm text-gray-600 hover:text-gray-900 px-4 cursor-pointer">Sign In</a>
        <a className="bg-gradient-to-r from-pink-500 to-purple-500 text-white border-none rounded-full px-6 py-2.5 text-sm font-medium shadow-sm hover:opacity-90 cursor-pointer transition-opacity">Sign Up</a>
      </div>
    </div>
  );
};

export default Navbar;
