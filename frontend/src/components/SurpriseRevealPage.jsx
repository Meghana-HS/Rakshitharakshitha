import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Confetti from 'react-confetti';
import './SurpriseRevealPage.css';

const SurpriseRevealPage = () => {
  const [showContent, setShowContent] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
  const [showBigMessage, setShowBigMessage] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [showFinalButton, setShowFinalButton] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Set window size
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight
    });

    // Handle window resize
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener('resize', handleResize);

    // Start the surprise sequence
    setShowContent(true);
    
    // Start confetti after a short delay
    setTimeout(() => {
      setShowConfetti(true);
    }, 500);

    // Show big message
    setTimeout(() => {
      setShowBigMessage(true);
    }, 1000);

    // Show popup message
    setTimeout(() => {
      setShowPopup(true);
    }, 3000);

    // Show final button
    setTimeout(() => {
      setShowFinalButton(true);
    }, 5000);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleFinalSlideshow = () => {
    navigate('/final');
  };

  return (
    <div className="surprise-reveal-page">
      {/* Confetti Background */}
      {showConfetti && (
        <Confetti
          width={windowSize.width}
          height={windowSize.height}
          recycle={true}
          numberOfPieces={200}
          gravity={0.15}
          colors={['#FFD700', '#FF69B4', '#00CED1', '#FF6347', '#9370DB', '#32CD32']}
        />
      )}

      {/* Animated Background */}
      <div className="celebration-background">
        <div className="sparkle sparkle-1">✨</div>
        <div className="sparkle sparkle-2">🌟</div>
        <div className="sparkle sparkle-3">💫</div>
        <div className="sparkle sparkle-4">⭐</div>
        <div className="sparkle sparkle-5">🎊</div>
        <div className="sparkle sparkle-6">🎉</div>
      </div>

      {/* Main Content */}
      <div className={`surprise-content ${showContent ? 'celebration-fade' : ''}`}>
        {/* Big Birthday Message */}
        <div className={`big-birthday-message ${showBigMessage ? 'zoom-in' : ''}`}>
          <h1 className="happy-birthday">
            <span className="letter h">H</span>
            <span className="letter a">A</span>
            <span className="letter p">P</span>
            <span className="letter p2">P</span>
            <span className="letter y">Y</span>
          </h1>
          <h1 className="birthday-text">
            <span className="letter b">B</span>
            <span className="letter i">I</span>
            <span className="letter r">R</span>
            <span className="letter t">T</span>
            <span className="letter h2">H</span>
            <span className="letter d">D</span>
            <span className="letter a2">A</span>
            <span className="letter y2">Y</span>
          </h1>
          <div className="birthday-emoji">
            <span className="emoji cake">🎂</span>
            <span className="emoji party">🎉</span>
            <span className="emoji gift">🎁</span>
          </div>
        </div>

        {/* Emotional Message */}
        <div className={`emotional-message ${showBigMessage ? 'fade-in-up' : ''}`}>
          <h2 className="celebration-title">You are amazing! 🌟</h2>
          <p className="celebration-subtitle">
            Today we celebrate the wonderful person you are
          </p>
          <div className="message-quote">
            <p>"You make the world brighter just by being in it"</p>
          </div>
        </div>

        {/* Popup Message */}
        {showPopup && (
          <div className={`surprise-popup ${showPopup ? 'popup-bounce' : ''}`}>
            <div className="popup-content">
              <div className="popup-hearts">
                <span>💖</span>
                <span>💕</span>
                <span>💗</span>
              </div>
              <h3>You are the best part of my life ❤️</h3>
              <p>Thank you for being you!</p>
              <div className="popup-sparkle">✨</div>
            </div>
          </div>
        )}

        {/* Final Button */}
        {showFinalButton && (
          <div className="final-navigation">
            <button
              onClick={handleFinalSlideshow}
              className="final-button"
            >
              <span className="button-text">View Final Slideshow 📸</span>
              <span className="button-glow"></span>
            </button>
          </div>
        )}
      </div>

      {/* Floating Hearts */}
      <div className="floating-hearts">
        <div className="floating-heart heart-1">💕</div>
        <div className="floating-heart heart-2">💖</div>
        <div className="floating-heart heart-3">💗</div>
        <div className="floating-heart heart-4">💝</div>
        <div className="floating-heart heart-5">💞</div>
      </div>

      {/* Decorative Elements */}
      <div className="decorative-elements">
        <div className="element balloon-1">🎈</div>
        <div className="element balloon-2">🎈</div>
        <div className="element balloon-3">🎈</div>
        <div className="element ribbon-1">🎀</div>
        <div className="element ribbon-2">🎀</div>
      </div>
    </div>
  );
};

export default SurpriseRevealPage;
