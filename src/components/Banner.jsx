import React from 'react';

const Banner = () => {
  return (
    <div className="hero min-h-[500px] bg-base-200" id="home">
      <div className="hero-content flex-col lg:flex-row-reverse w-full max-w-7xl justify-between">
        <img 
          src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80" 
          className="max-w-sm md:max-w-md rounded-lg shadow-2xl w-full" 
          alt="Dev Stack Banner"
        />
        <div className="max-w-xl text-left">
          <h1 className="text-5xl font-bold leading-tight">
            Build Your Ultimate <span className="text-gradient">Dev Stack</span>
          </h1>
          <p className="py-6 text-lg text-gray-600">
            Discover the best technologies to power your next big project. 
            From frontend libraries to powerful databases, we have curated the top tools to build modern applications efficiently.
          </p>
          <div className="flex gap-4">
            <button className="btn bg-gradient-brand text-white border-none rounded-full px-8 hover:opacity-90">Explore Technologies</button>
            <button className="btn btn-outline rounded-full px-8 border-gray-400 hover:bg-gray-100 hover:text-black">Learn More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
