import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './WelcomePage.css';

const WelcomePage = () => {
  const [showContent, setShowContent] = useState(false);
  const [floatingHearts, setFloatingHearts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setShowContent(true);
    
    // Generate floating hearts
    const hearts = [];
    for (let i = 0; i < 8; i++) {
      hearts.push({
        id: i,
        left: Math.random() * 100,
        animationDelay: Math.random() * 5,
        animationDuration: 3 + Math.random() * 4
      });
    }
    setFloatingHearts(hearts);
  }, []);

  const handleStartJourney = () => {
    navigate('/general');
  };

  return (
    <div className="welcome-page">
      {/* Floating Background Elements */}
      <div className="floating-background">
        {floatingHearts.map(heart => (
          <div
            key={heart.id}
            className="floating-heart"
            style={{
              left: `${heart.left}%`,
              animationDelay: `${heart.animationDelay}s`,
              animationDuration: `${heart.animationDuration}s`
            }}
          >
            💖
          </div>
        ))}
        <div className="floating-shape shape-1">✨</div>
        <div className="floating-shape shape-2">🌟</div>
        <div className="floating-shape shape-3">💫</div>
        <div className="floating-shape shape-4">🎈</div>
      </div>

      {/* Main Content */}
      <div className={`welcome-content ${showContent ? 'fade-in' : ''}`}>
        <div className="welcome-card">
          <div className="welcome-icon">
            <span className="pulse">🎁</span>
          </div>
          
          <h1 className="welcome-title">
            Tap gently… something is waiting 💫
          </h1>
          
          <p className="welcome-subtitle">
            A magical birthday journey filled with surprises and memories
          </p>
          
          <button 
            onClick={handleStartJourney}
            className="magic-button"
          >
            <span className="button-text">Begin the Magic</span>
            <span className="button-sparkle">✨</span>
          </button>
          
          <div className="hint-text">
            <small>✨ Click to unlock your surprise ✨</small>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="decorative-circles">
        <div className="circle circle-1"></div>
        <div className="circle circle-2"></div>
        <div className="circle circle-3"></div>
      </div>
    </div>
  );
};

export default WelcomePage;
