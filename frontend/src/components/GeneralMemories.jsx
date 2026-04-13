import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// Import images
import p1 from '../assets/p1.jpeg';
import p2 from '../assets/p2.jpeg';
import p3 from '../assets/p3.png';
import p4 from '../assets/p4.jpeg';
import p5 from '../assets/p5.jpeg';

const GeneralMemories = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showButton, setShowButton] = useState(false);
  const navigate = useNavigate();

  const images = [p1, p2, p3, p4, p5];

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentImageIndex < images.length - 1) {
        setCurrentImageIndex(prev => prev + 1);
      } else {
        setShowButton(true);
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, [currentImageIndex, images.length]);

  const handleNextMemory = () => {
    navigate('/traditional');
  };

  return (
    <div className="screen bg-dark-to-light">
      <div className="progress-bar">
        <div className="progress-fill" style={{ width: '40%' }}></div>
      </div>
      
      {/* Blurred background */}
      <img 
        src={images[currentImageIndex]} 
        alt="Background" 
        className="image-background"
      />
      
      {/* Main image */}
      <img 
        src={images[currentImageIndex]} 
        alt="Memory" 
        className="fullscreen-image fade-in"
      />
      
      <div className="content-overlay">
        <h1 className="cinematic-subtitle fade-in-up">
          General Memories
        </h1>
        
        {showButton && (
          <button 
            className="cinematic-btn fade-in-up"
            onClick={handleNextMemory}
          >
            Unlock next memory
          </button>
        )}
      </div>
      
      <div className="nav-dots">
        <div className="nav-dot"></div>
        <div className="nav-dot"></div>
        <div className="nav-dot"></div>
        <div className="nav-dot active"></div>
        <div className="nav-dot"></div>
      </div>
      
      {/* Image progress dots */}
      <div className="nav-dots" style={{ bottom: '80px' }}>
        {images.map((_, index) => (
          <div 
            key={index}
            className={`nav-dot ${index === currentImageIndex ? 'active' : ''}`}
          />
        ))}
      </div>
    </div>
  );
};

export default GeneralMemories;
