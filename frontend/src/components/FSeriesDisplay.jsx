import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import GlobalMusicControls from './GlobalMusicControls';

// Import Friends photos
import f1 from '../assets/f1.jpeg';
import f2 from '../assets/f2.jpeg';
import f3 from '../assets/f3.jpeg';
import f4 from '../assets/f4.jpeg';
import f5 from '../assets/f5.jpeg';
import f6 from '../assets/f6.jpeg';
import f7 from '../assets/f7.jpeg';
import f8 from '../assets/f8.jpeg';
import f9 from '../assets/f9.jpeg';
import f10 from '../assets/f10.jpeg';
import r15 from '../assets/r15.jpeg';

const FSeriesDisplay = () => {
  const [showContent, setShowContent] = useState(false);
  const [showNextButton, setShowNextButton] = useState(false);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const navigate = useNavigate();

  const images = [f1, f2, f3, f4, f5, f6, f7, f8, f9, f10, r15];
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
    }, 2500);

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
    navigate('/ved-series');
  };

  return (
    <div className="screen" style={{ 
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #fff0e6 0%, #ffe4e1 50%, #fff0e6 100%)'
    }}>
      <div className="content-overlay">
        <h3 style={{ fontSize: '1.2rem', fontWeight: 500, color: '#666', marginBottom: '0.5rem' }}>
          Those people who make nonsense feel like the best memories ever 🤪🔥
        </h3>
        
        {/* Beautiful Single Photo Slideshow */}
        <div className="single-photo-slideshow fade-in-up" style={{ position: 'relative' }}>
          <div className="photo-frame">
            <img
              src={images[currentPhotoIndex]}
              alt={`Friends ${currentPhotoIndex + 1}`}
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
              Continue to Birthday Videos...
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
      
      <GlobalMusicControls section="friends" />
    </div>
  );
};

export default FSeriesDisplay;
