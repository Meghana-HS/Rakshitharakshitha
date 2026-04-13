import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// Import fam-series photos
import fam1 from '../assets/fam1.jpeg';
import fam2 from '../assets/fam2.jpeg';
import fam3 from '../assets/fam3.jpeg';
import fam4 from '../assets/fam4.jpeg';
import fam5 from '../assets/fam5.jpeg';
import fam6 from '../assets/fam6.jpeg';
import fam7 from '../assets/fam7.jpeg';
import fam8 from '../assets/fam8.jpeg';
import fam9 from '../assets/fam9.jpeg';
import fam10 from '../assets/fam10.jpeg';
import fam11 from '../assets/fam11.jpeg';
import fam12 from '../assets/fam12.jpeg';
import fam13 from '../assets/fam13.jpeg';

const SisterDisplay = () => {
  const [showContent, setShowContent] = useState(false);
  const [showNextButton, setShowNextButton] = useState(false);
  const [currentSetIndex, setCurrentSetIndex] = useState(0);
  const navigate = useNavigate();

  const images = [fam1, fam2, fam3, fam4, fam5, fam6, fam7, fam8, fam9, fam10, fam11, fam12, fam13];
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
    navigate('/final-surprise');
  };

  return (
    <div className="screen" style={{ 
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #ffe4e1 0%, #e6e6fa 50%, #ffe4e1 100%)'
    }}>
      <div className="content-overlay">
        <h3 style={{ fontSize: '1.2rem', fontWeight: 500, color: '#666', marginBottom: '0.5rem' }}>
          My Sister ❤️
        </h3>
        
        {/* Desktop 3-Image Sliding Grid */}
        <div className="desktop-image-grid fade-in-up" style={{ position: 'relative' }}>
          {getCurrentSetImages().map((img, index) => (
            <img
              key={`${currentSetIndex}-${index}`}
              src={img}
              alt={`Sister Memory ${currentSetIndex * 3 + index + 1}`}
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
                  alt={`Sister Memory ${index + 1}`}
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
              One final surprise… 💖
            </h3>
            <button 
              className="btn btn-lg px-5 py-3"
              style={{
                background: 'linear-gradient(45deg, #ff69b4, #9370db)',
                color: 'white',
                border: 'none',
                borderRadius: '50px',
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '1px'
              }}
              onClick={handleNext}
            >
              Final Surprise
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default SisterDisplay;
