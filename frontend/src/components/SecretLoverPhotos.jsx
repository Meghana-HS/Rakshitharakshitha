import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// Import n1 and n2 photos for lover photos
import n1 from '../assets/n1.jpeg';
import n2 from '../assets/n2.jpeg';

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
  
  // Secret lover photos - using only n1 and n2
  const loverPhotos = [
    n1, // Your secret photo 1
    n2  // Your secret photo 2
  ];

  const romanticMessages = [
    "💕 Our Secret Love Story 💕",
    "🌟 Forever & Always 🌟"
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
