import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// Import ALL r-series photos including birthday cakes
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

// Birthday cake and celebration images (removed - using only r-series)
const birthdayImages = [];

const GeneralDisplay = () => {
  const [showContent, setShowContent] = useState(false);
  const [showNextButton, setShowNextButton] = useState(false);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const navigate = useNavigate();

  // Use only r-series photos
  const images = [r1, r2, r3, r4, r5, r6, r7, r8, r9, r10, r11, r12, r13, r14, r15];
  const totalPhotos = images.length;

  useEffect(() => {
    setShowContent(true);
    
    // Auto-advance through photos
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
    }, 3000); // Change photo every 3 seconds

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
    navigate('/traditional-intro');
  };

  return (
    <div className="screen" style={{ 
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #fff0e6 0%, #ffe4e1 50%, #fff0e6 100%)'
    }}>
      <div className="content-overlay">
        <h3 style={{ fontSize: '1.2rem', fontWeight: 500, color: '#666', marginBottom: '0.5rem' }}>
          🎂 Birthday Celebrations & Memories ✨
        </h3>
        
        {/* Beautiful Single Photo Slideshow */}
        <div className="single-photo-slideshow fade-in-up" style={{ position: 'relative' }}>
          <div className="photo-frame">
            <img
              src={images[currentPhotoIndex]}
              alt={`Birthday Memory ${currentPhotoIndex + 1}`}
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
              More memories ahead…
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
    </div>
  );
};

export default GeneralDisplay;
