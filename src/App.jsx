import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import TechCard from './components/TechCard';
import YourStack from './components/YourStack';
import Footer from './components/Footer';

function App() {
  const [technologies, setTechnologies] = useState([]);
  const [stack, setStack] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchTechnologies = async () => {
      try {
        const response = await fetch('/technologies.json');
        const data = await response.json();
        setTechnologies(data);
      } catch (error) {
        console.error('Failed to load technologies', error);
      } finally {
        setTimeout(() => {
          setIsLoading(false);
        }, 800);
      }
    };

    fetchTechnologies();
  }, []);

  const handleAddToStack = (tech) => {
    const isAlreadyAdded = stack.find(item => item.id === tech.id);
    
    if (isAlreadyAdded) {
      return;
    }
    
    setStack([...stack, tech]);
  };

  const handleRemoveFromStack = (id) => {
    setStack(stack.filter(item => item.id !== id));
  };

  const handleRemoveAll = () => {
    setStack([]);
  };

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      <Navbar />
      
      <main>
        <Banner />
        
        <div className="max-w-7xl mx-auto px-4 lg:px-8 py-16" id="technologies">
          <div className="mb-10 text-left">
            <h2 className="text-3xl font-bold mb-2 text-gray-900">
              Explore the <span className="bg-gradient-to-r from-blue-800 via-blue-500 to-sky-400 bg-clip-text text-transparent">Technologies</span>
            </h2>
            <p className="text-gray-500 text-sm">
              Pick one technology per category to build your ideal stack.
            </p>
          </div>
          
          <div className="flex flex-row gap-8 overflow-x-auto pb-4">
            <div className="w-[75%] min-w-[700px]">
              {isLoading ? (
                <div className="flex flex-col justify-center items-center h-64 gap-4">
                  <span className="loading loading-spinner loading-lg text-blue-500"></span>
                  <p className="text-lg font-medium text-gray-600">Loading technologies...</p>
                </div>
              ) : (
                <div className="grid grid-cols-3 gap-6">
                  {technologies.map(tech => (
                    <TechCard 
                      key={tech.id} 
                      tech={tech} 
                      onAdd={handleAddToStack} 
                      isAdded={stack.some(item => item.id === tech.id)}
                    />
                  ))}
                </div>
              )}
            </div>
            
            <div className="w-[25%] min-w-[280px]">
              <YourStack stack={stack} onRemove={handleRemoveFromStack} onRemoveAll={handleRemoveAll} />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
