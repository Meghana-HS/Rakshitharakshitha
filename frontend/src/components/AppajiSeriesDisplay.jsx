import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import GlobalMusicControls from './GlobalMusicControls';

// Import Appaji photos
import a1 from '../assets/a1.jpeg';
import a2 from '../assets/a2.jpeg';
import a3 from '../assets/a3.jpeg';
import a4 from '../assets/a4.jpeg';
import a5 from '../assets/a5.jpeg';
import r9 from '../assets/r9.jpeg';
import r10 from '../assets/r10.jpeg';
import r11 from '../assets/r11.jpeg';

const AppajiSeriesDisplay = () => {
  const [showContent, setShowContent] = useState(false);
  const [showNextButton, setShowNextButton] = useState(false);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const navigate = useNavigate();

  const images = [a1, a2, a3, a4, a5, r9, r10, r11];
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
    }, 5000);

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
    navigate('/fam-series');
  };

  return (
    <div className="screen" style={{ 
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #fff0e6 0%, #ffe4e1 50%, #fff0e6 100%)'
    }}>
      <div className="content-overlay">
        <h3 style={{ fontSize: '1.2rem', fontWeight: 500, color: '#666', marginBottom: '0.5rem' }}>
          My forever best friend — half wisdom, half fun, full-time heart ❤️😄
        </h3>
        
        {/* Beautiful Single Photo Slideshow */}
        <div className="single-photo-slideshow fade-in-up" style={{ position: 'relative' }}>
          <div className="photo-frame">
            <img
              src={images[currentPhotoIndex]}
              alt={`Appaji ${currentPhotoIndex + 1}`}
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
              Continue to Family...
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
      
      <GlobalMusicControls section="appaji" />
    </div>
  );
};

export default AppajiSeriesDisplay;
