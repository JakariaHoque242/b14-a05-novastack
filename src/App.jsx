import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import TechCard from './components/TechCard';
import YourStack from './components/YourStack';
import Footer from './components/Footer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
        toast.error('Failed to load technologies');
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
      toast.warn(`${tech.name} is already in your stack!`);
      return;
    }
    
    setStack([...stack, tech]);
    toast.success(`${tech.name} added to your stack!`);
  };

  const handleRemoveFromStack = (id) => {
    setStack(stack.filter(item => item.id !== id));
    toast.info(`Technology removed from stack.`);
  };

  const handleRemoveAll = () => {
    setStack([]);
    toast.error('Cleared the entire stack.');
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <Navbar />
      
      <main>
        <Banner />
        
        <div className="max-w-7xl mx-auto px-4 lg:px-8 py-16" id="technologies">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Trending Technologies</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore our curated list of modern development tools. Add them to your stack to plan your next architecture.
            </p>
          </div>
          
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-2/3">
              {isLoading ? (
                <div className="flex justify-center items-center h-64">
                  <span className="loading loading-spinner loading-lg text-primary"></span>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
            
            <div className="lg:w-1/3">
              <YourStack 
                stack={stack} 
                onRemove={handleRemoveFromStack}
                onRemoveAll={handleRemoveAll}
              />
            </div>
          </div>
        </div>
      </main>

      <Footer />
      
      <ToastContainer position="bottom-right" />
    </div>
  );
}

export default App;
