import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ClosedGift = () => {
  const [showContent, setShowContent] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setShowContent(true);
  }, []);

  const handleOpenGift = () => {
    navigate('/opening');
  };

  return (
    <div className={`screen bg-soft-pink ${showContent ? 'fade-in' : ''}`}>
      <div className="content-overlay">
        <div className={`gift-box ${showContent ? 'fade-in-up' : ''}`} onClick={handleOpenGift}>
        </div>
        
        <h1 className={`emotional-subtitle ${showContent ? 'text-reveal' : ''}`} style={{ animationDelay: '0.5s' }}>
          I made something for you...
        </h1>
        
        <button 
          className={`gift-btn ${showContent ? 'fade-in-up' : ''}`} 
          onClick={handleOpenGift}
          style={{ animationDelay: '1s' }}
        >
          Open it
        </button>
      </div>
      
      <div className="progress-indicator">
        <div className="progress-dot active"></div>
        <div className="progress-dot"></div>
        <div className="progress-dot"></div>
        <div className="progress-dot"></div>
      </div>
    </div>
  );
};

export default ClosedGift;
