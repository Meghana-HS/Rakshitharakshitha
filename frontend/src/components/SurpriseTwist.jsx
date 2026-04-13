import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const SurpriseTwist = () => {
  const [showBlank, setShowBlank] = useState(true);
  const [showMessage, setShowMessage] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Blank screen for suspense
    setTimeout(() => {
      setShowBlank(false);
      setShowMessage(true);
    }, 2000);
    
    setTimeout(() => {
      setShowButton(true);
    }, 4000);
  }, []);

  const handleContinue = () => {
    navigate('/final-reveal');
  };

  return (
    <div className="screen bg-lavender">
      <div className="content-overlay">
        {showBlank && (
          <div className="fade-in">
            <div className="emotional-title">🎁</div>
          </div>
        )}
        
        {showMessage && (
          <h1 className={`emotional-subtitle ${showMessage ? 'text-reveal' : ''}`}>
            Wait… one last thing…
          </h1>
        )}
        
        {showButton && (
          <button 
            className="gift-btn fade-in-up glow-pulse"
            onClick={handleContinue}
          >
            Final surprise
          </button>
        )}
      </div>
      
      <div className="progress-indicator">
        <div className="progress-dot"></div>
        <div className="progress-dot"></div>
        <div className="progress-dot"></div>
        <div className="progress-dot"></div>
        <div className="progress-dot active"></div>
      </div>
    </div>
  );
};

export default SurpriseTwist;
