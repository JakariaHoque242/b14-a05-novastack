import React from 'react';

const TechCard = ({ tech, onAdd, isAdded }) => {
  return (
    <div className="card bg-base-100 shadow-xl border border-base-200 hover:shadow-2xl transition-shadow">
      <div className="card-body">
        <div className="flex justify-between items-start mb-2">
          <div className="w-12 h-12 p-2 bg-gray-50 rounded-lg flex items-center justify-center">
            <img src={tech.icon} alt={tech.name} className="w-full h-full object-contain" />
          </div>
          <div className="badge badge-primary badge-outline text-xs">{tech.badge}</div>
        </div>
        <h2 className="card-title text-xl mt-2">{tech.name}</h2>
        <p className="text-sm text-gray-500 flex-grow min-h-[60px]">{tech.description}</p>
        
        <div className="flex gap-2 my-3 flex-wrap">
          <span className="badge badge-ghost text-xs">{tech.category}</span>
          <span className="badge badge-ghost text-xs">{tech.difficulty}</span>
        </div>
        
        <div className="flex justify-between items-center mt-2">
          <div className="flex items-center gap-1 text-sm font-semibold">
            <span className="text-yellow-500">★</span> {tech.rating}
          </div>
          <button 
            className={`btn btn-sm ${isAdded ? 'btn-disabled bg-gray-200' : 'btn-outline border-primary text-primary hover:bg-primary hover:border-primary'}`}
            onClick={() => onAdd(tech)}
            disabled={isAdded}
          >
            {isAdded ? '✓ Added to Stack' : 'Add to Stack'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default TechCard;
