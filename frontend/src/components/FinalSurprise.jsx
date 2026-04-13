import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Confetti from 'react-confetti';

const FinalSurprise = () => {
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
    <div className="screen" style={{ 
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #ff69b4 0%, #9370db 50%, #87ceeb 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <Confetti
        width={windowSize.width}
        height={windowSize.height}
        recycle={true}
        numberOfPieces={200}
        gravity={0.1}
      />
      
      <div className="content-overlay text-center">
        <div className={`fade-in ${showContent ? '' : ''}`} style={{ animationDelay: '0.5s' }}>
          <h1 style={{
            fontSize: 'clamp(3rem, 10vw, 8rem)',
            fontWeight: 800,
            color: 'white',
            textShadow: '0 0 30px rgba(255, 255, 255, 0.5)',
            marginBottom: '2rem'
          }}>
            HAPPY BIRTHDAY 🎂🎉
          </h1>
          
          <h2 style={{
            fontSize: 'clamp(2rem, 6vw, 4rem)',
            color: 'white',
            animationDelay: '1s'
          }}>
            🎊🎈🎁
          </h2>
        </div>
        
        {showButton && (
          <button 
            className="btn btn-lg px-5 py-3 fade-in-up"
            style={{
              animationDelay: '2s',
              background: 'rgba(255, 255, 255, 0.9)',
              color: '#ff69b4',
              border: 'none',
              borderRadius: '50px',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '1px'
            }}
            onClick={handleContinue}
          >
            Final Message
          </button>
        )}
      </div>
    </div>
  );
};

export default FinalSurprise;
