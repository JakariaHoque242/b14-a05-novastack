import React from 'react';

const TechCard = ({ tech, onAdd, isAdded }) => {
  return (
    <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-[0_2px_10px_rgb(0,0,0,0.04)] hover:shadow-lg transition-shadow flex flex-col h-full">
      <div className="flex justify-between items-start mb-4">
        <div className="w-10 h-10 flex items-center justify-center">
          <img src={tech.icon} alt={tech.name} className="w-full h-full object-contain" />
        </div>
        <div className="bg-blue-50 text-blue-500 px-3 py-1 rounded-full text-xs font-medium">
          {tech.badge}
        </div>
      </div>
      
      <h2 className="text-xl font-bold text-gray-900 mb-2">{tech.name}</h2>
      
      <p className="text-sm text-gray-500 mb-6 flex-grow leading-relaxed">
        {tech.description}
      </p>
      
      <div className="flex items-center justify-between mb-5">
        <div className="flex gap-2">
          <span className="bg-gray-50 text-gray-600 px-3 py-1 rounded-md text-xs font-medium border border-gray-100">
            {tech.category}
          </span>
          <span className="bg-gray-50 text-gray-600 px-3 py-1 rounded-md text-xs font-medium border border-gray-100 hidden sm:inline-block">
            {tech.difficulty}
          </span>
        </div>
        <div className="flex items-center gap-1 text-sm font-bold text-gray-700">
          <span className="text-yellow-400 text-base">★</span> {tech.rating}
        </div>
      </div>
      
      <button 
        className={`w-full py-2.5 rounded-lg font-medium text-sm transition-colors ${
          isAdded 
            ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
            : 'bg-[#111827] text-white hover:bg-gray-800'
        }`}
        onClick={() => onAdd(tech)}
        disabled={isAdded}
      >
        {isAdded ? 'Added to Stack' : 'Add to Stack'}
      </button>
    </div>
  );
};

export default TechCard;
