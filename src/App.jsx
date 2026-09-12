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
    // Simulate a brief network delay to show the loading state as requested
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
        }, 500); // Small delay to make the spinner visible
      }
    };

    fetchTechnologies();
  }, []);

  const handleAddToStack = (tech) => {
    const isAlreadyAdded = stack.find(item => item.id === tech.id);
    
    if (isAlreadyAdded) {
      alert(`${tech.name} is already in your stack!`);
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
    <div className="min-h-screen bg-white font-sans">
      <Navbar />
      
      <main>
        <Banner />
        
        <div className="max-w-7xl mx-auto px-4 lg:px-8 py-16" id="technologies">
          <div className="mb-10 text-left">
            <h2 className="text-3xl font-bold mb-2 text-gray-900">
              Explore the <span className="text-[#ec4899]">Technologies</span>
            </h2>
            <p className="text-gray-500 text-sm">
              Pick one technology per category to build your ideal stack.
            </p>
          </div>
          
          <div className="flex flex-row gap-8 overflow-x-auto pb-4">
            <div className="w-[75%] min-w-[700px]">
              {isLoading ? (
                <div className="flex justify-center items-center h-64">
                  <span className="loading loading-spinner loading-lg text-primary"></span>
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
