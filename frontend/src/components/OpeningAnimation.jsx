import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const OpeningAnimation = () => {
  const [showGift, setShowGift] = useState(true);
  const [showGlow, setShowGlow] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      setShowGlow(true);
    }, 500);
    
    setTimeout(() => {
      setShowGift(false);
    }, 2000);
    
    setTimeout(() => {
      navigate('/message-intro');
    }, 3000);
  }, []);

  return (
    <div className="screen bg-lavender">
      <div className="content-overlay">
        {showGift && (
          <div className={`gift-box ${showGlow ? 'gift-open glow-pulse' : ''}`}>
          </div>
        )}
        
        {showGlow && (
          <div className="fade-in">
            <div className="emotional-title" style={{ fontSize: 'clamp(3rem, 10vw, 8rem)' }}>
              ✨
            </div>
          </div>
        )}
      </div>
      
      <div className="progress-indicator">
        <div className="progress-dot"></div>
        <div className="progress-dot active"></div>
        <div className="progress-dot"></div>
        <div className="progress-dot"></div>
      </div>
    </div>
  );
};

export default OpeningAnimation;
