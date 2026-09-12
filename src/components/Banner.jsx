import React from 'react';
import bannerStackImg from '../assets/banner-stack.png';

const Banner = () => {
  return (
    <div className="hero min-h-[500px] bg-white pt-10" id="home">
      <div className="hero-content flex-col lg:flex-row w-full max-w-7xl justify-between px-4 lg:px-8 gap-12">
        <div className="max-w-xl text-left">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight tracking-tight text-[#1a1a2e]">
            Build Your Ideal <br/>
            <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">Development Stack</span>
          </h1>
          <p className="py-6 text-lg text-gray-500 max-w-lg">
            Explore frontend, backend, database, and tooling options, compare them side by side, and put together the stack that fits your next project.
          </p>
          <div className="flex gap-4">
            <button className="bg-gradient-to-r from-orange-500 to-pink-500 text-white border-none rounded-lg px-8 py-3.5 font-semibold text-sm hover:opacity-90 transition-opacity">Explore Technologies</button>
            <button className="bg-white border border-gray-100 shadow-[0_2px_10px_rgb(0,0,0,0.04)] text-gray-600 rounded-lg px-8 py-3.5 font-semibold text-sm hover:bg-gray-50 transition-colors">Learn More</button>
          </div>
        </div>
        <img 
          src={bannerStackImg} 
          className="max-w-sm md:max-w-lg w-full object-contain" 
          alt="Dev Stack Banner"
        />
      </div>
    </div>
  );
};

export default Banner;
