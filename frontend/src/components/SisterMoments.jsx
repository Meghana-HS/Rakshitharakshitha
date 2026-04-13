import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// Import images
import sis1 from '../assets/sis1.jpeg';
import sis2 from '../assets/sis2.png';

const SisterMoments = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showButton, setShowButton] = useState(false);
  const navigate = useNavigate();

  const images = [sis1, sis2];

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentImageIndex < images.length - 1) {
        setCurrentImageIndex(prev => prev + 1);
      } else {
        setShowButton(true);
      }
    }, 4000);

    return () => clearTimeout(timer);
  }, [currentImageIndex, images.length]);

  const handleNextMemory = () => {
    navigate('/surprise');
  };

  return (
    <div className="screen bg-soft-pink">
      <div className="progress-bar">
        <div className="progress-fill" style={{ width: '70%' }}></div>
      </div>
      
      {/* Blurred background */}
      <img 
        src={images[currentImageIndex]} 
        alt="Background" 
        className="image-background"
      />
      
      {/* Main image with glow effect */}
      <img 
        src={images[currentImageIndex]} 
        alt="Sister Moments" 
        className="fullscreen-image fade-in glow-pulse"
      />
      
      <div className="content-overlay">
        <h1 className="cinematic-subtitle fade-in-up">
          Sister Love
        </h1>
        
        {showButton && (
          <button 
            className="cinematic-btn fade-in-up glow-pulse"
            onClick={handleNextMemory}
          >
            One more surprise...
          </button>
        )}
      </div>
      
      <div className="nav-dots">
        <div className="nav-dot"></div>
        <div className="nav-dot"></div>
        <div className="nav-dot"></div>
        <div className="nav-dot"></div>
        <div className="nav-dot"></div>
        <div className="nav-dot"></div>
        <div className="nav-dot active"></div>
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

export default SisterMoments;
