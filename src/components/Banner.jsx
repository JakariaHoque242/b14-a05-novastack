import React from 'react';
import bannerStackImg from '../assets/banner-stack.png';

const Banner = () => {
  return (
    <div className="w-full bg-white pt-16 pb-12 lg:pt-24 lg:pb-20" id="home">
      <div className="max-w-7xl mx-auto flex flex-row items-center justify-between px-4 lg:px-8 gap-4 sm:gap-8 lg:gap-12">
        <div className="text-left flex-1 min-w-0">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight text-[#1a1a2e]">
            Build Your Ideal <br/>
            <span className="bg-gradient-to-r from-blue-800 via-blue-500 to-sky-400 bg-clip-text text-transparent">Development Stack</span>
          </h1>
          <p className="py-3 sm:py-6 text-sm sm:text-base lg:text-lg text-gray-500 max-w-lg">
            Explore frontend, backend, database, and tooling options, compare them side by side, and put together the stack that fits your next project.
          </p>
          <div className="flex flex-col sm:flex-row justify-start gap-2 sm:gap-4">
            <button className="bg-gradient-to-r from-blue-800 via-blue-500 to-sky-400 text-white border-none rounded-lg px-4 sm:px-8 py-2.5 sm:py-3.5 font-semibold text-xs sm:text-sm hover:opacity-90 transition-opacity whitespace-nowrap">Explore Technologies</button>
            <button className="bg-white border border-gray-100 shadow-[0_2px_10px_rgb(0,0,0,0.04)] text-gray-600 rounded-lg px-4 sm:px-8 py-2.5 sm:py-3.5 font-semibold text-xs sm:text-sm hover:bg-gray-50 transition-colors whitespace-nowrap">Learn More</button>
          </div>
        </div>
        <div className="flex-1 flex justify-end w-full max-w-[40%] sm:max-w-none">
          <img 
            src={bannerStackImg} 
            className="w-full max-w-[150px] sm:max-w-sm lg:max-w-lg object-contain transition-all duration-500" 
            style={{ filter: 'hue-rotate(-85deg) saturate(1.2)' }}
            alt="Dev Stack Banner"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
