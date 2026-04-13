import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import GlobalMusicControls from './GlobalMusicControls';

// Import Birthday Videos
import ved1 from '../assets/ved1.mp4';
import ved2 from '../assets/ved2.mp4';

const VedSeriesDisplay = () => {
  const [showContent, setShowContent] = useState(false);
  const [showNextButton, setShowNextButton] = useState(false);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const navigate = useNavigate();
  const videoRef = useRef(null);

  const videos = [ved1, ved2];
  const totalVideos = videos.length;

  useEffect(() => {
    setShowContent(true);
  }, []);

  const handleVideoEnd = () => {
    if (currentVideoIndex < totalVideos - 1) {
      setCurrentVideoIndex(currentVideoIndex + 1);
    } else {
      setShowNextButton(true);
    }
  };

  const handlePrevVideo = () => {
    if (currentVideoIndex > 0) {
      setCurrentVideoIndex(currentVideoIndex - 1);
      setShowNextButton(false);
    }
  };

  const handleNextVideo = () => {
    if (currentVideoIndex < totalVideos - 1) {
      setCurrentVideoIndex(currentVideoIndex + 1);
    } else {
      setShowNextButton(true);
    }
  };

  const handleManualNext = () => {
    navigate('/');
  };

  return (
    <div className="screen" style={{ 
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #fff0e6 0%, #ffe4e1 50%, #fff0e6 100%)'
    }}>
      <div className="content-overlay">
        <h3 style={{ fontSize: '1.2rem', fontWeight: 500, color: '#666', marginBottom: '0.5rem' }}>
          One more year older, but thanks to them… forever young at heart 🎂🥳
        </h3>
        
        {/* Beautiful Single Photo Slideshow */}
        <div className="single-photo-slideshow fade-in-up" style={{ position: 'relative' }}>
          <div className="photo-frame">
            <video
              ref={videoRef}
              src={videos[currentVideoIndex]}
              autoPlay
              muted
              className="single-photo"
              onEnded={handleVideoEnd}
              style={{
                maxWidth: '100%',
                maxHeight: '100%',
                width: 'auto',
                height: 'auto',
                objectFit: 'contain'
              }}
            />
            <div className="photo-overlay">
              <div className="photo-number">
                {currentVideoIndex + 1} / {totalVideos}
              </div>
            </div>
          </div>
          
          {/* Navigation Controls */}
          <div className="photo-navigation">
            <button 
              onClick={handlePrevVideo}
              disabled={currentVideoIndex === 0}
              className="photo-nav-btn prev-btn"
            >
              ← Previous
            </button>
            
            <div className="photo-dots">
              {videos.map((_, index) => (
                <span
                  key={index}
                  className={`photo-dot ${index === currentVideoIndex ? 'active' : ''}`}
                  onClick={() => setCurrentVideoIndex(index)}
                />
              ))}
            </div>
            
            <button 
              onClick={handleNextVideo}
              disabled={currentVideoIndex === totalVideos - 1}
              className="photo-nav-btn next-btn"
            >
              Next →
            </button>
          </div>
        </div>
        
        {showNextButton && (
          <div className={`text-center mt-3 fade-in-up`}>
            <h3 className="mb-2" style={{ color: '#666' }}>
              Journey Complete!
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
              🎉 Return Home 🎂
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
      
      <GlobalMusicControls section="birthday" />
    </div>
  );
};

export default VedSeriesDisplay;
