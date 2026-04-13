import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const FinalMessage = () => {
  const [showContent, setShowContent] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setShowContent(true);
    setTimeout(() => setShowButton(true), 3000);
  }, []);

  const handleReplay = () => {
    navigate('/');
  };

  return (
    <div className="screen" style={{ 
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #ffe4e1 0%, #e6e6fa 50%, #ffe4e1 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <div className="content-overlay text-center">
        <div className={`fade-in ${showContent ? '' : ''}`} style={{ animationDelay: '0.5s' }}>
          <h1 style={{
            fontSize: 'clamp(2.5rem, 8vw, 5rem)',
            fontWeight: 700,
            background: 'linear-gradient(45deg, #ff69b4, #9370db)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            marginBottom: '2rem'
          }}>
            💖
          </h1>
          
          <h2 style={{
            fontSize: 'clamp(1.5rem, 5vw, 2.5rem)',
            color: '#333',
            marginBottom: '2rem',
            fontWeight: 600
          }}>
            You made these years unforgettable
          </h2>
          
          <p style={{
            fontSize: 'clamp(1.2rem, 4vw, 2rem)',
            color: '#666',
            marginBottom: '2rem',
            fontWeight: 400
          }}>
            Thank you for being the amazing person you are
          </p>
          
          <h3 style={{
            fontSize: 'clamp(1.8rem, 6vw, 3rem)',
            background: 'linear-gradient(45deg, #ff69b4, #9370db)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontWeight: 700,
            marginBottom: '3rem'
          }}>
            Happy Birthday, my dear friend! 🎂❤️
          </h3>
        </div>
        
        {showButton && (
          <button 
            className="btn btn-lg px-5 py-3 fade-in-up"
            style={{
              animationDelay: '2.5s',
              background: 'linear-gradient(45deg, #87ceeb, #9370db)',
              color: 'white',
              border: 'none',
              borderRadius: '50px',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '1px'
            }}
            onClick={handleReplay}
          >
            Replay Surprise 🔄
          </button>
        )}
      </div>
    </div>
  );
};

export default FinalMessage;
