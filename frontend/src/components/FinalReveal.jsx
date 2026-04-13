import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Confetti from 'react-confetti';

const FinalReveal = () => {
  const [showContent, setShowContent] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [windowSize, setWindowSize] = useState({ width: window.innerWidth, height: window.innerHeight });
  const navigate = useNavigate();

  useEffect(() => {
    setShowContent(true);
    setTimeout(() => setShowButton(true), 3000);
    
    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleContinue = () => {
    navigate('/final-message');
  };

  return (
    <div className="screen bg-emotional">
      <Confetti
        width={windowSize.width}
        height={windowSize.height}
        recycle={true}
        numberOfPieces={200}
        gravity={0.1}
      />
      
      <div className="content-overlay">
        <div className={`emotional-title ${showContent ? 'zoom-in glow-pulse' : ''}`}>
          HAPPY BIRTHDAY 🎉
        </div>
        
        <h1 className={`emotional-subtitle ${showContent ? 'fade-in-up' : ''}`} style={{ animationDelay: '1s' }}>
          🎂🎊🎈
        </h1>
        
        {showButton && (
          <button 
            className="gift-btn fade-in-up glow-pulse"
            onClick={handleContinue}
            style={{ animationDelay: '2s' }}
          >
            Final message
          </button>
        )}
      </div>
      
      <div className="progress-indicator">
        <div className="progress-dot"></div>
        <div className="progress-dot"></div>
        <div className="progress-dot"></div>
        <div className="progress-dot"></div>
        <div className="progress-dot"></div>
        <div className="progress-dot active"></div>
      </div>
    </div>
  );
};

export default FinalReveal;
