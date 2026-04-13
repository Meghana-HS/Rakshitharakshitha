import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// Import images
import trd1 from '../assets/trd1.png';
import trd2 from '../assets/trd2.png';

const TraditionalMoments = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showButton, setShowButton] = useState(false);
  const navigate = useNavigate();

  const images = [trd1, trd2];

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentImageIndex < images.length - 1) {
        setCurrentImageIndex(prev => prev + 1);
      } else {
        setShowButton(true);
      }
    }, 3500);

    return () => clearTimeout(timer);
  }, [currentImageIndex, images.length]);

  const handleNextMemory = () => {
    navigate('/friends');
  };

  return (
    <div className="screen bg-cream">
      <div className="progress-bar">
        <div className="progress-fill" style={{ width: '50%' }}></div>
      </div>
      
      {/* Blurred background */}
      <img 
        src={images[currentImageIndex]} 
        alt="Background" 
        className="image-background"
      />
      
      {/* Main image with slow zoom effect */}
      <img 
        src={images[currentImageIndex]} 
        alt="Traditional Moment" 
        className="fullscreen-image fade-in slow-zoom"
      />
      
      <div className="content-overlay">
        <h1 className="cinematic-subtitle fade-in-up">
          Traditional Moments
        </h1>
        
        {showButton && (
          <button 
            className="cinematic-btn fade-in-up"
            onClick={handleNextMemory}
          >
            Continue journey
          </button>
        )}
      </div>
      
      <div className="nav-dots">
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

export default TraditionalMoments;
