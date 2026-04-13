import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// Import r-series photos
import r1 from '../assets/r1.jpeg';
import r2 from '../assets/r2.jpeg';
import r3 from '../assets/r3.jpeg';
import r4 from '../assets/r4.jpeg';
import r5 from '../assets/r5.jpeg';
import r6 from '../assets/r6.jpeg';
import r7 from '../assets/r7.jpeg';
import r8 from '../assets/r8.jpeg';
import r9 from '../assets/r9.jpeg';
import r10 from '../assets/r10.jpeg';
import r11 from '../assets/r11.jpeg';
import r12 from '../assets/r12.jpeg';
import r13 from '../assets/r13.jpeg';
import r14 from '../assets/r14.jpeg';
import r15 from '../assets/r15.jpeg';

const FriendsDisplay = () => {
  const [showContent, setShowContent] = useState(false);
  const [showNextButton, setShowNextButton] = useState(false);
  const [currentSetIndex, setCurrentSetIndex] = useState(0);
  const navigate = useNavigate();

  const images = [r1, r2, r3, r4, r5, r6, r7, r8, r9, r10, r11, r12, r13, r14, r15];
  const totalSets = Math.ceil(images.length / 3);

  useEffect(() => {
    setShowContent(true);
    
    const slideTimer = setInterval(() => {
      setCurrentSetIndex(prev => {
        if (prev < totalSets - 1) {
          return prev + 1;
        } else {
          clearInterval(slideTimer);
          setTimeout(() => setShowNextButton(true), 1000);
          return prev;
        }
      });
    }, 4000);

    return () => {
      clearInterval(slideTimer);
    };
  }, [totalSets]);

  const getCurrentSetImages = () => {
    const start = currentSetIndex * 3;
    return images.slice(start, start + 3);
  };

  const nextSet = () => {
    if (currentSetIndex < totalSets - 1) {
      setCurrentSetIndex(currentSetIndex + 1);
    }
  };

  const prevSet = () => {
    if (currentSetIndex > 0) {
      setCurrentSetIndex(currentSetIndex - 1);
    }
  };

  const handleNext = () => {
    navigate('/sister-intro');
  };

  return (
    <div className="screen" style={{ 
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #e0f7fa 0%, #f0fdff 50%, #e6e6fa 100%)'
    }}>
      <div className="content-overlay">
        <h3 style={{ fontSize: '1.2rem', fontWeight: 500, color: '#666', marginBottom: '0.5rem' }}>
          Crazy Friends 😄
        </h3>
        
        {/* Desktop 3-Image Sliding Grid */}
        <div className="desktop-image-grid fade-in-up" style={{ position: 'relative' }}>
          {getCurrentSetImages().map((img, index) => (
            <img
              key={`${currentSetIndex}-${index}`}
              src={img}
              alt={`Friend Memory ${currentSetIndex * 3 + index + 1}`}
              className="grid-image"
            />
          ))}
        </div>
        
        {/* Desktop Navigation Controls */}
        <div className="slideshow-controls" style={{ marginTop: '1rem' }}>
          <button 
            onClick={prevSet}
            disabled={currentSetIndex === 0}
            className="slide-nav-btn prev-btn"
          >
            Previous
          </button>
          
          <span style={{ color: '#666', fontSize: '0.9rem' }}>
            Set {currentSetIndex + 1} of {totalSets}
          </span>
          
          <button 
            onClick={nextSet}
            disabled={currentSetIndex === totalSets - 1}
            className="slide-nav-btn next-btn"
          >
            Next
          </button>
        </div>
        
        {/* Mobile Slideshow */}
        <div className={`mobile-slideshow ${showContent ? 'fade-in-up' : ''}`} style={{ animationDelay: '0.6s' }}>
          <div className="slide-container">
            {images.map((img, index) => (
              <div 
                key={index} 
                className={`mobile-slide ${index >= currentSetIndex * 3 && index < (currentSetIndex + 1) * 3 ? 'active' : ''}`}
              >
                <img
                  src={img}
                  alt={`Friend Memory ${index + 1}`}
                  className="img-fluid"
                />
              </div>
            ))}
          </div>
          
          {/* Mobile Slide Indicators */}
          <div className="slide-dots">
            {Array.from({ length: totalSets }).map((_, index) => (
              <span
                key={index}
                onClick={() => setCurrentSetIndex(index)}
                className={`slide-dot ${index === currentSetIndex ? 'active' : ''}`}
              />
            ))}
          </div>
        </div>
        
        {showNextButton && (
          <div className={`text-center mt-3 fade-in-up`}>
            <h3 className="mb-2" style={{ color: '#666' }}>
              More memories ahead…
            </h3>
            <button 
              className="btn btn-lg px-5 py-3"
              style={{
                background: 'linear-gradient(45deg, #4fc3f7, #29b6f6)',
                color: 'white',
                border: 'none',
                borderRadius: '50px',
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '1px'
              }}
              onClick={handleNext}
            >
              Continue Journey
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default FriendsDisplay;
