import React from 'react';

const YourStack = ({ stack, onRemove, onRemoveAll }) => {
  return (
    <div className="bg-white shadow-[0_2px_15px_rgb(0,0,0,0.05)] rounded-2xl p-6 border border-gray-100 sticky top-24">
      <div className="mb-6">
        <h2 className="text-xl font-bold text-gray-900">Your Stack</h2>
        <p className="text-sm text-gray-500 mt-1">{stack.length} Technology Selected</p>
      </div>

      {stack.length === 0 ? (
        <div className="text-center py-10 bg-gray-50 rounded-xl border border-dashed border-gray-200">
          <p className="text-gray-500 text-sm">Your stack is empty.</p>
        </div>
      ) : (
        <div className="flex flex-col gap-3">
          {stack.map((tech) => (
            <div key={tech.id} className="flex items-center justify-between p-3 bg-white rounded-xl border border-gray-100 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 flex items-center justify-center p-1.5 bg-gray-50 rounded-lg">
                  <img src={tech.icon} alt={tech.name} className="w-full h-full object-contain" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-gray-900">{tech.name}</h4>
                  <p className="text-xs text-gray-500">{tech.category}</p>
                </div>
              </div>
              <button 
                className="text-gray-400 hover:text-red-500 transition-colors w-8 h-8 flex items-center justify-center rounded-full hover:bg-red-50"
                onClick={() => onRemove(tech.id)}
                title="Remove"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          ))}
          
          <button 
            className="w-full mt-4 py-2.5 rounded-lg font-medium text-sm border border-red-200 text-red-500 hover:bg-red-50 transition-colors"
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
