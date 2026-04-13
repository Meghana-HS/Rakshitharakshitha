import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// Import r-series photos for lover photos
import r1 from '../assets/r1.jpeg';
import r2 from '../assets/r2.jpeg';
import r3 from '../assets/r3.jpeg';
import r4 from '../assets/r4.jpeg';
import r5 from '../assets/r5.jpeg';
import r6 from '../assets/r6.jpeg';
import r7 from '../assets/r7.jpeg';
import r8 from '../assets/r8.jpeg';
import r9 from '../assets/r9.jpeg';
import r10 from '../assets/r10.jpeg';
import r11 from '../assets/r11.jpeg';
import r12 from '../assets/r12.jpeg';
import r13 from '../assets/r13.jpeg';
import r14 from '../assets/r14.jpeg';
import r15 from '../assets/r15.jpeg';

const SecretLoverPhotos = () => {
  const [showContent, setShowContent] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [showError, setShowError] = useState(false);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const [showRomanticEffects, setShowRomanticEffects] = useState(false);
  const navigate = useNavigate();

  // Secret password - you can change this to something meaningful
  const SECRET_PASSWORD = 'love123';
  
  // Secret lover photos - using your r-series photos
  const loverPhotos = [
    r1, // Your r-series photo 1
    r2, // Your r-series photo 2
    r3, // Your r-series photo 3
    r4, // Your r-series photo 4
    r5, // Your r-series photo 5
    r6, // Your r-series photo 6
    r7, // Your r-series photo 7
    r8, // Your r-series photo 8
    r9, // Your r-series photo 9
    r10, // Your r-series photo 10
    r11, // Your r-series photo 11
    r12, // Your r-series photo 12
    r13, // Your r-series photo 13
    r14, // Your r-series photo 14
    r15  // Your r-series photo 15
  ];

  const romanticMessages = [
    "💕 Our Secret Love Story 💕",
    "🌟 Forever & Always 🌟",
    "💑 Two Hearts, One Soul 💑",
    "💝 My Love, My Life 💝",
    "💖 Secret Moments Together 💖"
  ];

  useEffect(() => {
    setShowContent(true);
  }, []);

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    if (password === SECRET_PASSWORD) {
      setIsAuthenticated(true);
      setShowError(false);
      setShowRomanticEffects(true);
    } else {
      setShowError(true);
      setTimeout(() => setShowError(false), 3000);
    }
  };

  const handleNextPhoto = () => {
    if (currentPhotoIndex < loverPhotos.length - 1) {
      setCurrentPhotoIndex(currentPhotoIndex + 1);
    }
  };

  const handlePrevPhoto = () => {
    if (currentPhotoIndex > 0) {
      setCurrentPhotoIndex(currentPhotoIndex - 1);
    }
  };

  const handleExit = () => {
    setIsAuthenticated(false);
    setPassword('');
    setCurrentPhotoIndex(0);
    navigate('/');
  };

  // If not authenticated, show password screen
  if (!isAuthenticated) {
    return (
      <div className="screen bg-celebration secret-lover-bg">
        <div className="content-overlay">
          <div className={`secret-title ${showContent ? 'fade-in-up' : ''}`} style={{ animationDelay: '0.3s' }}>
            💕 Secret Love Photos 💕
          </div>
          
          <div className={`secret-subtitle ${showContent ? 'fade-in-up' : ''}`} style={{ animationDelay: '0.6s' }}>
            🔒 Private & Hidden 🔒
          </div>

          <form onSubmit={handlePasswordSubmit} className={`password-form ${showContent ? 'fade-in-up' : ''}`} style={{ animationDelay: '0.9s' }}>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter secret password..."
              className="password-input"
            />
            <button type="submit" className="secret-submit-btn">
              🔓 Unlock Love
            </button>
          </form>

          {showError && (
            <div className="error-message fade-in-up">
              ❌ Wrong password! Try again...
            </div>
          )}

          <div className="secret-hint">
            Hint: Something romantic... 💕
          </div>
        </div>
      </div>
    );
  }

  // If authenticated, show secret photos
  return (
    <div className="screen bg-celebration romantic-bg">
      {/* Romantic floating effects */}
      {showRomanticEffects && [...Array(15)].map((_, i) => (
        <div
          key={i}
          className="romantic-heart"
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${3 + Math.random() * 4}s`
          }}
        >
          💕
        </div>
      ))}

      <div className="content-overlay">
        <div className="romantic-title">
          {romanticMessages[currentPhotoIndex]}
        </div>

        {/* Secret photo display */}
        <div className="secret-photo-container">
          <div className="secret-photo-frame">
            <img
              src={loverPhotos[currentPhotoIndex]}
              alt={`Secret Love ${currentPhotoIndex + 1}`}
              className="secret-photo"
            />
          </div>
        </div>

        {/* Photo navigation */}
        <div className="secret-photo-controls">
          <button 
            onClick={handlePrevPhoto}
            disabled={currentPhotoIndex === 0}
            className="romantic-nav-btn"
          >
            💕 Previous
          </button>
          
          <span className="photo-counter">
            {currentPhotoIndex + 1} / {loverPhotos.length}
          </span>
          
          <button 
            onClick={handleNextPhoto}
            disabled={currentPhotoIndex === loverPhotos.length - 1}
            className="romantic-nav-btn"
          >
            Next 💕
          </button>
        </div>

        {/* Exit button */}
        <button onClick={handleExit} className="exit-secret-btn">
          🔒 Hide Photos
        </button>

        <div className="secret-warning">
          ⚠️ These photos are private and hidden from everyone
        </div>
      </div>
    </div>
  );
};

export default SecretLoverPhotos;
