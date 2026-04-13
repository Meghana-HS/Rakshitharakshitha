import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Confetti from 'react-confetti';

// Import all images for final slideshow
import p1 from '../assets/p1.jpeg';
import p2 from '../assets/p2.jpeg';
import p3 from '../assets/p3.png';
import p4 from '../assets/p4.jpeg';
import p5 from '../assets/p5.jpeg';
import trd1 from '../assets/trd1.png';
import trd2 from '../assets/trd2.png';
import mine1 from '../assets/mine1.jpeg';
import mine2 from '../assets/mine2.jpeg';
import sis1 from '../assets/sis1.jpeg';
import sis2 from '../assets/sis2.png';

const FinalSlideshow = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showButton, setShowButton] = useState(false);
  const [windowSize, setWindowSize] = useState({ width: window.innerWidth, height: window.innerHeight });
  const navigate = useNavigate();

  const allImages = [p1, p2, p3, p4, p5, trd1, trd2, mine1, mine2, sis1, sis2];

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentImageIndex < allImages.length - 1) {
        setCurrentImageIndex(prev => prev + 1);
      } else {
        setShowButton(true);
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, [currentImageIndex, allImages.length]);

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleEndJourney = () => {
    navigate('/end');
  };

  return (
    <div className="screen bg-dark-to-light">
      <Confetti
        width={windowSize.width}
        height={windowSize.height}
        recycle={true}
        numberOfPieces={100}
        gravity={0.05}
      />
      
      <div className="progress-bar">
        <div className="progress-fill" style={{ width: '95%' }}></div>
      </div>
      
      {/* Blurred background */}
      <img 
        src={allImages[currentImageIndex]} 
        alt="Background" 
        className="image-background"
      />
      
      {/* Main image */}
      <img 
        src={allImages[currentImageIndex]} 
        alt="Memory" 
        className="fullscreen-image fade-in slow-zoom"
      />
      
      <div className="content-overlay">
        <h1 className="cinematic-subtitle fade-in-up">
          Our Journey Together
        </h1>
        
        <p className="cinematic-subtitle fade-in-up" style={{ 
          fontSize: 'clamp(0.8rem, 2vw, 1.2rem)', 
          animationDelay: '0.5s',
          opacity: 0.8 
        }}>
          Every moment matters, every memory counts
        </p>
        
        {showButton && (
          <button 
            className="cinematic-btn fade-in-up glow-pulse"
            onClick={handleEndJourney}
          >
            Complete journey
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
        <div className="nav-dot"></div>
        <div className="nav-dot"></div>
        <div className="nav-dot"></div>
        <div className="nav-dot active"></div>
      </div>
      
      {/* Image progress dots */}
      <div className="nav-dots" style={{ bottom: '80px' }}>
        {allImages.map((_, index) => (
          <div 
            key={index}
            className={`nav-dot ${index === currentImageIndex ? 'active' : ''}`}
          />
        ))}
      </div>
    </div>
  );
};

export default FinalSlideshow;
