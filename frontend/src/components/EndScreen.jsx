import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const EndScreen = () => {
  const [showContent, setShowContent] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setShowContent(true);
    setTimeout(() => setShowButton(true), 2000);
  }, []);

  const handleReplay = () => {
    navigate('/');
  };

  return (
    <div className="screen bg-soft-pink">
      <div className="progress-bar">
        <div className="progress-fill" style={{ width: '100%' }}></div>
      </div>
      
      <div className="content-overlay">
        <div className={`cinematic-title ${showContent ? 'fade-in' : ''}`}>
          💖
        </div>
        
        <h1 className={`cinematic-subtitle ${showContent ? 'text-reveal' : ''}`} style={{ animationDelay: '0.5s' }}>
          You made these 4 years unforgettable
        </h1>
        
        <p className={`cinematic-subtitle ${showContent ? 'fade-in-up' : ''}`} style={{ 
          fontSize: 'clamp(1rem, 3vw, 1.5rem)', 
          animationDelay: '1s',
          opacity: 0.9,
          fontWeight: 300
        }}>
          Thank you for being the amazing person you are
        </p>
        
        <p className={`cinematic-subtitle ${showContent ? 'fade-in-up' : ''}`} style={{ 
          fontSize: 'clamp(1.2rem, 4vw, 2rem)', 
          animationDelay: '1.5s',
          background: 'linear-gradient(45deg, #ff69b4, #9370db)',
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}>
          Happy Birthday, my dear friend! 🎂❤️
        </p>
        
        {showButton && (
          <button 
            className="cinematic-btn fade-in-up glow-pulse"
            onClick={handleReplay}
            style={{ animationDelay: '2s' }}
          >
            Replay Surprise 🔄
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
        <div className="nav-dot"></div>
        <div className="nav-dot active"></div>
      </div>
    </div>
  );
};

export default EndScreen;
