import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const MemoryIntro = () => {
  const [showLine1, setShowLine1] = useState(false);
  const [showLine2, setShowLine2] = useState(false);
  const [showLine3, setShowLine3] = useState(false);
  const [canProceed, setCanProceed] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => setShowLine1(true), 800);
    setTimeout(() => setShowLine2(true), 2000);
    setTimeout(() => setShowLine3(true), 3200);
    setTimeout(() => setCanProceed(true), 4500);
  }, []);

  const handleContinue = () => {
    navigate('/general');
  };

  return (
    <div className="screen bg-soft-pink">
      <div className="progress-bar">
        <div className="progress-fill" style={{ width: '30%' }}></div>
      </div>
      
      <div className="content-overlay">
        <div className="cinematic-title fade-in">
          🎬
        </div>
        
        <div className="cinematic-subtitle">
          {showLine1 && (
            <div className="fade-in-up">
              From strangers
            </div>
          )}
          {showLine2 && (
            <div className="fade-in-up" style={{ animationDelay: '0.5s' }}>
              →
            </div>
          )}
          {showLine3 && (
            <div className="fade-in-up" style={{ animationDelay: '1s' }}>
              to best friends
            </div>
          )}
        </div>
        
        {canProceed && (
          <button 
            className="cinematic-btn fade-in-up"
            onClick={handleContinue}
          >
            Unlock memories
          </button>
        )}
      </div>
      
      <div className="nav-dots">
        <div className="nav-dot"></div>
        <div className="nav-dot"></div>
        <div className="nav-dot active"></div>
        <div className="nav-dot"></div>
        <div className="nav-dot"></div>
      </div>
    </div>
  );
};

export default MemoryIntro;
