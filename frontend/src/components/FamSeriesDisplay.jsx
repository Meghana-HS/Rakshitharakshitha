import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import GlobalMusicControls from './GlobalMusicControls';

// Import Family photos
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
import fam14 from '../assets/fam14.jpeg';
import fam15 from '../assets/fam15.jpeg';
import r12 from '../assets/r12.jpeg';
import r13 from '../assets/r13.jpeg';
import r14 from '../assets/r14.jpeg';

const FamSeriesDisplay = () => {
  const [showContent, setShowContent] = useState(false);
  const [showNextButton, setShowNextButton] = useState(false);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const navigate = useNavigate();

  const images = [fam1, fam2, fam3, fam4, fam5, fam6, fam7, fam8, fam9, fam10, fam11, fam12, fam13, fam14, fam15, r12, r13, r14];
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
    }, 3500);

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
    navigate('/f-series');
  };

  return (
    <div className="screen" style={{ 
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #fff0e6 0%, #ffe4e1 50%, #fff0e6 100%)'
    }}>
      <div className="content-overlay">
        <h3 style={{ fontSize: '1.2rem', fontWeight: 500, color: '#666', marginBottom: '0.5rem' }}>
          Where love is unlimited and advice is… also unlimited 😅❤️
        </h3>
        
        {/* Beautiful Single Photo Slideshow */}
        <div className="single-photo-slideshow fade-in-up" style={{ position: 'relative' }}>
          <div className="photo-frame">
            <img
              src={images[currentPhotoIndex]}
              alt={`Family ${currentPhotoIndex + 1}`}
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
              Continue to Friends...
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
      
      <GlobalMusicControls section="family" />
    </div>
  );
};

export default FamSeriesDisplay;
