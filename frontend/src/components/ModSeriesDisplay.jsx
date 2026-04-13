import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import GlobalMusicControls from './GlobalMusicControls';

// Import Modern Life photos
import mod1 from '../assets/mod1.jpeg';
import mod2 from '../assets/mod2.jpeg';
import mod3 from '../assets/mod3.jpeg';
import mod4 from '../assets/mod4.jpeg';
import mod5 from '../assets/mod5.jpeg';
import mod6 from '../assets/mod6.jpeg';
import mod7 from '../assets/mod7.jpeg';
import mod8 from '../assets/mod8.jpeg';
import mod9 from '../assets/mod9.jpeg';
import r6 from '../assets/r6.jpeg';
import r7 from '../assets/r7.jpeg';
import r8 from '../assets/r8.jpeg';

const ModSeriesDisplay = () => {
  const [showContent, setShowContent] = useState(false);
  const [showNextButton, setShowNextButton] = useState(false);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const navigate = useNavigate();

  const images = [mod1, mod2, mod3, mod4, mod5, mod6, mod7, mod8, mod9, r6, r7, r8];
  const totalPhotos = images.length;

  useEffect(() => {
    setShowContent(true);
    
    const photoTimer = setInterval(() => {
      setCurrentPhotoIndex(prev => {
        if (prev < totalPhotos - 1) {
          return prev + 1;
        } else {
          setShowNextButton(true);
          clearInterval(photoTimer);
          return prev;
        }
      });
    }, 3000);

    return () => clearInterval(photoTimer);
  }, [totalPhotos]);

  const handleNextPhoto = () => {
    if (currentPhotoIndex < totalPhotos - 1) {
      setCurrentPhotoIndex(currentPhotoIndex + 1);
    } else {
      setShowNextButton(true);
    }
  };

  const handlePrevPhoto = () => {
    if (currentPhotoIndex > 0) {
      setCurrentPhotoIndex(currentPhotoIndex - 1);
      setShowNextButton(false);
    }
  };

  const handleManualNext = () => {
    navigate('/bestii-series');
  };

  return (
    <div className="screen" style={{ 
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #fff0e6 0%, #ffe4e1 50%, #fff0e6 100%)'
    }}>
      <div className="content-overlay">
        <h3 style={{ fontSize: '1.2rem', fontWeight: 500, color: '#666', marginBottom: '0.5rem' }}>
          Now we pose better, dress smarter… but still act the same crazy inside 🤳😂
        </h3>
        
        {/* Beautiful Single Photo Slideshow */}
        <div className="single-photo-slideshow fade-in-up" style={{ position: 'relative' }}>
          <div className="photo-frame">
            <img
              src={images[currentPhotoIndex]}
              alt={`Modern Life ${currentPhotoIndex + 1}`}
              className="single-photo"
            />
            <div className="photo-overlay">
              <div className="photo-number">
                {currentPhotoIndex + 1} / {totalPhotos}
              </div>
            </div>
          </div>
          
          {/* Navigation Controls */}
          <div className="photo-navigation">
            <button 
              onClick={handlePrevPhoto}
              disabled={currentPhotoIndex === 0}
              className="photo-nav-btn prev-btn"
            >
              ← Previous
            </button>
            
            <div className="photo-dots">
              {images.map((_, index) => (
                <span
                  key={index}
                  className={`photo-dot ${index === currentPhotoIndex ? 'active' : ''}`}
                  onClick={() => setCurrentPhotoIndex(index)}
                />
              ))}
            </div>
            
            <button 
              onClick={handleNextPhoto}
              disabled={currentPhotoIndex === totalPhotos - 1}
              className="photo-nav-btn next-btn"
            >
              Next →
            </button>
          </div>
        </div>
        
        {showNextButton && (
          <div className={`text-center mt-3 fade-in-up`}>
            <h3 className="mb-2" style={{ color: '#666' }}>
              Continue to Bestii...
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
              onClick={handleManualNext}
            >
              Continue Journey
            </button>
            
            <button 
              className="btn btn-lg px-5 py-3 mt-3"
              style={{
                background: 'linear-gradient(45deg, #1a1a1a, #333333)',
                color: 'white',
                border: 'none',
                borderRadius: '50px',
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '1px',
                marginTop: '1rem'
              }}
              onClick={() => navigate('/cinematic-slideshow')}
            >
              🎬 Cinematic Slideshow
            </button>
          </div>
        )}
      </div>
      
      <GlobalMusicControls section="modern" />
    </div>
  );
};

export default ModSeriesDisplay;
