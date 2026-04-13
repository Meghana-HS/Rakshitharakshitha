import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// Import images
import mine1 from '../assets/mine1.jpeg';
import mine2 from '../assets/mine2.jpeg';

const BestFriends = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showButton, setShowButton] = useState(false);
  const navigate = useNavigate();

  const images = [mine1, mine2];

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentImageIndex < images.length - 1) {
        setCurrentImageIndex(prev => prev + 1);
      } else {
        setShowButton(true);
      }
    }, 2500);

    return () => clearTimeout(timer);
  }, [currentImageIndex, images.length]);

  const handleNextMemory = () => {
    navigate('/sister');
  };

  return (
    <div className="screen bg-sky">
      <div className="progress-bar">
        <div className="progress-fill" style={{ width: '60%' }}></div>
      </div>
      
      {/* Blurred background */}
      <img 
        src={images[currentImageIndex]} 
        alt="Background" 
        className="image-background"
      />
      
      {/* Main image with bounce effect */}
      <img 
        src={images[currentImageIndex]} 
        alt="Best Friends" 
        className="fullscreen-image fade-in bounce-gentle"
      />
      
      <div className="content-overlay">
        <h1 className="cinematic-subtitle fade-in-up">
          Best Friends Forever
        </h1>
        
        {showButton && (
          <button 
            className="cinematic-btn fade-in-up bounce-gentle"
            onClick={handleNextMemory}
          >
            Almost there...
          </button>
        )}
      </div>
      
      <div className="nav-dots">
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

export default BestFriends;
