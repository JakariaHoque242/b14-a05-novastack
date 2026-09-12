import React from 'react';

const YourStack = ({ stack, onRemove, onRemoveAll }) => {
  return (
    <div className="bg-base-100 shadow-xl rounded-2xl p-6 border border-base-200 sticky top-24">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold">Your Stack</h2>
        <span className="badge badge-secondary">{stack.length} Technology Selected</span>
      </div>

      {stack.length === 0 ? (
        <div className="text-center py-10 bg-base-200 rounded-xl border border-dashed border-gray-300">
          <p className="text-gray-500 font-medium">Your stack is empty.</p>
          <p className="text-sm text-gray-400 mt-2">Add technologies from the grid to build your stack.</p>
        </div>
      ) : (
        <div className="flex flex-col gap-3">
          {stack.map((tech) => (
            <div key={tech.id} className="flex items-center justify-between p-3 bg-base-200 rounded-lg border border-gray-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white p-1.5 rounded-md shadow-sm">
                  <img src={tech.icon} alt={tech.name} className="w-full h-full object-contain" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm">{tech.name}</h4>
                  <p className="text-xs text-gray-500">{tech.category}</p>
                </div>
              </div>
              <button 
                className="btn btn-ghost btn-xs text-red-500 hover:bg-red-50 hover:text-red-600 rounded-full w-8 h-8 p-0"
                onClick={() => onRemove(tech.id)}
                title="Remove"
              >
                ✕
              </button>
            </div>
          ))}
          
          <button 
            className="btn btn-outline btn-error w-full mt-4"
            onClick={onRemoveAll}
          >
            Remove All
          </button>
        </div>
      )}
    </div>
  );
};

export default YourStack;
