import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const SuspenseScreen = () => {
  const [showMessage, setShowMessage] = useState(false);
  const [canProceed, setCanProceed] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => setShowMessage(true), 1000);
    setTimeout(() => setCanProceed(true), 4000);
  }, []);

  const handleContinue = () => {
    navigate('/memory-intro');
  };

  return (
    <div className="screen bg-lavender">
      <div className="progress-bar">
        <div className="progress-fill" style={{ width: '20%' }}></div>
      </div>
      
      <div className="content-overlay">
        <div className={`cinematic-title ${showMessage ? 'fade-in' : ''}`}>
          💫
        </div>
        
        <h1 className={`cinematic-subtitle ${showMessage ? 'text-reveal' : ''}`}>
          It's a story of 4 years…
        </h1>
        
        {canProceed && (
          <button 
            className="cinematic-btn fade-in-up"
            onClick={handleContinue}
          >
            Continue the story
          </button>
        )}
      </div>
      
      <div className="nav-dots">
        <div className="nav-dot"></div>
        <div className="nav-dot active"></div>
        <div className="nav-dot"></div>
        <div className="nav-dot"></div>
        <div className="nav-dot"></div>
      </div>
    </div>
  );
};

export default SuspenseScreen;
