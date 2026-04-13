import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const MessageIntro = () => {
  const [showMessage, setShowMessage] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => setShowMessage(true), 1000);
    setTimeout(() => setShowButton(true), 4000);
  }, []);

  const handleContinue = () => {
    navigate('/category-select');
  };

  return (
    <div className="screen bg-emotional">
      <div className="content-overlay">
        <div className="emotional-title fade-in">
          💌
        </div>
        
        {showMessage && (
          <h1 className="emotional-subtitle text-reveal">
            Inside this… are moments we lived together
          </h1>
        )}
        
        {showButton && (
          <button 
            className="gift-btn fade-in-up"
            onClick={handleContinue}
          >
            Discover memories
          </button>
        )}
      </div>
      
      <div className="progress-indicator">
        <div className="progress-dot"></div>
        <div className="progress-dot"></div>
        <div className="progress-dot active"></div>
        <div className="progress-dot"></div>
      </div>
    </div>
  );
};

export default MessageIntro;
