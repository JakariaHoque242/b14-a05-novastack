import React from 'react';

const Navbar = () => {
  return (
    <div className="navbar bg-white sticky top-0 z-50 border-b border-gray-100 px-4 lg:px-8">
      <div className="navbar-start w-1/3 flex items-center">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden -ml-2 text-gray-900">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow-lg bg-white border border-gray-100 rounded-box w-52 text-gray-900 font-medium">
            <li><a href="#home">Home</a></li>
            <li><a href="#technologies">Technologies</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        
        {/* Desktop Logo */}
        <a className="hidden lg:flex items-center gap-1.5 hover:opacity-80 transition-opacity cursor-pointer">
          <div className="bg-gradient-to-br from-blue-800 via-blue-500 to-sky-400 text-white font-bold rounded w-8 h-8 flex items-center justify-center text-sm shadow-sm">
            NS
          </div>
          <span className="text-xl font-bold tracking-tight">
            <span className="text-gray-900">Nova</span>
            <span className="bg-gradient-to-r from-blue-800 via-blue-500 to-sky-400 bg-clip-text text-transparent">Stack</span>
          </span>
        </a>
      </div>
      
      <div className="navbar-center hidden lg:flex w-1/3 justify-center">
        <ul className="menu menu-horizontal px-1 text-gray-900 font-medium">
          <li><a href="#home">Home</a></li>
          <li><a href="#technologies">Technologies</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>

      {/* Mobile Logo */}
      <div className="lg:hidden absolute left-1/2 -translate-x-1/2 flex items-center">
        <a className="flex items-center gap-1.5 hover:opacity-80 transition-opacity cursor-pointer">
          <div className="bg-gradient-to-br from-blue-800 via-blue-500 to-sky-400 text-white font-bold rounded w-7 h-7 flex items-center justify-center text-xs shadow-sm">
            NS
          </div>
          <span className="text-lg font-bold tracking-tight">
            <span className="text-gray-900 hidden sm:inline">Nova</span>
            <span className="bg-gradient-to-r from-blue-800 via-blue-500 to-sky-400 bg-clip-text text-transparent hidden sm:inline">Stack</span>
          </span>
        </a>
      </div>
      
      <div className="navbar-end flex gap-2 w-2/3 lg:w-1/3 justify-end">
        <a className="font-medium text-sm text-gray-900 hover:text-gray-600 px-2 sm:px-4 cursor-pointer hidden sm:block">Sign In</a>
        <a className="bg-gradient-to-r from-blue-800 via-blue-500 to-sky-400 text-white border-none rounded-full px-4 sm:px-6 py-2 sm:py-2.5 text-xs sm:text-sm font-medium shadow-sm hover:opacity-90 cursor-pointer transition-opacity">Sign Up</a>
      </div>
    </div>
  );
};

export default Navbar;
