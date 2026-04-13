import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import GlobalMusicControls from './GlobalMusicControls';
import { useGlobalMusic } from './MusicProvider';

const BirthdayIntro = () => {
  const [showContent, setShowContent] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const navigate = useNavigate();
  const { playMusic, isPlaying } = useGlobalMusic();

  useEffect(() => {
    // Start animations
    setShowContent(true);
    
    // Start music on load (only if not already playing)
    setTimeout(() => {
      if (!isPlaying) {
        playMusic();
      }
    }, 1000);
    
    // Show button after 3 seconds
    const buttonTimer = setTimeout(() => {
      setShowButton(true);
    }, 3000);

    return () => clearTimeout(buttonTimer);
  }, [isPlaying, playMusic]);

  const handleStartSlideshow = () => {
    setTimeout(() => {
      navigate('/r-series');
    }, 500);
  };

  return (
    <div className="birthday-intro-screen">
      {/* Floating Background Elements */}
      <div className="floating-elements">
        <span className="float-item" style={{ top: '5%', left: '5%', animationDelay: '0s' }}>🎂</span>
        <span className="float-item" style={{ top: '10%', right: '8%', animationDelay: '0.5s' }}>🎈</span>
        <span className="float-item" style={{ top: '20%', left: '10%', animationDelay: '1s' }}>🎉</span>
        <span className="float-item" style={{ top: '15%', right: '15%', animationDelay: '1.5s' }}>✨</span>
        <span className="float-item" style={{ top: '8%', left: '20%', animationDelay: '2s' }}>🎁</span>
        <span className="float-item" style={{ top: '25%', right: '10%', animationDelay: '2.5s' }}>🎊</span>
        <span className="float-item" style={{ top: '12%', left: '35%', animationDelay: '3s' }}>🎈</span>
        <span className="float-item" style={{ top: '18%', right: '25%', animationDelay: '3.5s' }}>🎂</span>
        <span className="float-item" style={{ top: '22%', left: '45%', animationDelay: '4s' }}>✨</span>
        <span className="float-item" style={{ top: '6%', right: '35%', animationDelay: '4.5s' }}>🎉</span>
      </div>

      {/* Confetti Effect */}
      <div className="confetti-container">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="confetti"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
              backgroundColor: ['#ff69b4', '#ffd700', '#87ceeb', '#ff1493', '#ffb347'][Math.floor(Math.random() * 5)]
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="intro-content">
        {/* Sparkles around title */}
        <div className="sparkles">
          <span className="sparkle" style={{ top: '-20px', left: '-30px', animationDelay: '0s' }}>✨</span>
          <span className="sparkle" style={{ top: '-10px', right: '-40px', animationDelay: '0.3s' }}>⭐</span>
          <span className="sparkle" style={{ bottom: '-15px', left: '-20px', animationDelay: '0.6s' }}>✨</span>
          <span className="sparkle" style={{ bottom: '-25px', right: '-30px', animationDelay: '0.9s' }}>⭐</span>
        </div>

        {/* Main Title with Animation */}
        <h1 className={`birthday-title ${showContent ? 'animate-pop' : ''}`}>
          <span className="title-line">Happy Birthday</span>
          <span className="title-name">Rakshii</span>
          <span className="title-icons">🎂✨</span>
        </h1>

        {/* Subtitle */}
        <p className={`birthday-subtitle ${showContent ? 'animate-fade' : ''}`} style={{ animationDelay: '0.8s' }}>
          A celebration of our beautiful friendship
        </p>

        {/* Decorative Elements */}
        <div className={`decorations ${showContent ? 'animate-fade' : ''}`} style={{ animationDelay: '1.2s' }}>
          <span className="deco-item">🎈</span>
          <span className="deco-item">🎂</span>
          <span className="deco-item">🎁</span>
          <span className="deco-item">🎉</span>
          <span className="deco-item">✨</span>
        </div>

        {/* Start Button */}
        {showButton && (
          <button 
            className="start-slideshow-btn animate-bounce-in"
            onClick={handleStartSlideshow}
          >
            <span className="btn-text">Start the Journey</span>
            <span className="btn-icon">🎬</span>
          </button>
        )}
      </div>

      {/* Bottom Gradient */}
      <div className="bottom-gradient" />
      
      {/* Global Music Controls */}
      <GlobalMusicControls section="intro" />
    </div>
  );
};

export default BirthdayIntro;
