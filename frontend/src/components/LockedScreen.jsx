import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const LockedScreen = () => {
  const [showContent, setShowContent] = useState(false);
  const [isUnlocked, setIsUnlocked] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setShowContent(true);
  }, []);

  const handleUnlock = () => {
    setIsUnlocked(true);
    setTimeout(() => {
      navigate('/suspense');
    }, 1500);
  };

  return (
    <div className={`screen bg-dark-to-light ${showContent ? 'fade-in' : ''}`}>
      <div className="progress-bar">
        <div className="progress-fill" style={{ width: '10%' }}></div>
      </div>
      
      <div className="content-overlay">
        <div className={`cinematic-title ${isUnlocked ? 'zoom-in' : 'fade-in-up'}`}>
          {isUnlocked ? '🔓' : '🔐'}
        </div>
        
        <h1 className={`cinematic-subtitle ${isUnlocked ? 'fade-in' : 'text-reveal'}`}>
          {isUnlocked ? 'Unlocking...' : 'This is not just a birthday…'}
        </h1>
        
        {!isUnlocked && (
          <button 
            className="cinematic-btn fade-in-up"
            onClick={handleUnlock}
            style={{ animationDelay: '2s' }}
          >
            Tap to unlock
          </button>
        )}
      </div>
      
      <div className="nav-dots">
        <div className="nav-dot active"></div>
        <div className="nav-dot"></div>
        <div className="nav-dot"></div>
        <div className="nav-dot"></div>
        <div className="nav-dot"></div>
      </div>
    </div>
  );
};

export default LockedScreen;
