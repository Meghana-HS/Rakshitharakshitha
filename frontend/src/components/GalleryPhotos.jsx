import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// Import n1 and n2 photos for gallery collection
import n1 from '../assets/n1.jpeg';
import n2 from '../assets/n2.jpeg';

const GalleryPhotos = () => {
  const [showContent, setShowContent] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [showError, setShowError] = useState(false);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const [showEffects, setShowEffects] = useState(false);
  const navigate = useNavigate();

  // Access password - you can change this to something meaningful
  const ACCESS_PASSWORD = 'gallery123';
  
  // Gallery photos collection - using only n1 and n2
  const galleryPhotos = [
    n1, // Gallery photo 1
    n2  // Gallery photo 2
  ];

  const photoMessages = [
    "Special Collection",
    "Gallery Photos"
  ];

  useEffect(() => {
    setShowContent(true);
  }, []);

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    if (password === ACCESS_PASSWORD) {
      setIsAuthenticated(true);
      setShowError(false);
      setShowEffects(true);
    } else {
      setShowError(true);
      setTimeout(() => setShowError(false), 3000);
    }
  };

  const handleNextPhoto = () => {
    if (currentPhotoIndex < galleryPhotos.length - 1) {
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
      <div className="screen bg-celebration gallery-bg">
        <div className="content-overlay">
          <div className={`gallery-title ${showContent ? 'fade-in-up' : ''}`} style={{ animationDelay: '0.3s' }}>
            📸 Gallery Collection 📸
          </div>
          
          <div className={`gallery-subtitle ${showContent ? 'fade-in-up' : ''}`} style={{ animationDelay: '0.6s' }}>
            🔒 Access Required 🔒
          </div>

          <form onSubmit={handlePasswordSubmit} className={`password-form ${showContent ? 'fade-in-up' : ''}`} style={{ animationDelay: '0.9s' }}>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter access password..."
              className="password-input"
            />
            <button type="submit" className="gallery-submit-btn">
              🔓 Unlock Gallery
            </button>
          </form>

          {showError && (
            <div className="error-message fade-in-up">
              ❌ Wrong password! Try again...
            </div>
          )}

          <div className="gallery-hint">
            Hint: Access code needed...
          </div>
        </div>
      </div>
    );
  }

  // If authenticated, show gallery photos
  return (
    <div className="screen bg-celebration gallery-display-bg">
      {/* Enhanced floating effects */}
      {showEffects && [...Array(20)].map((_, i) => (
        <div
          key={i}
          className="floating-effect"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${4 + Math.random() * 3}s`,
            fontSize: `${1 + Math.random() * 1.5}rem`
          }}
        >
          {['📸', '🌟', '✨', '🎆', '🎊'][i % 5]}
        </div>
      ))}

      <div className="content-overlay">
        {/* Modern title with animation */}
        <div className="gallery-title-container">
          <h2 className="gallery-title">
            {photoMessages[currentPhotoIndex]}
          </h2>
          <div className="title-underline"></div>
        </div>

        {/* Enhanced gallery photo display */}
        <div className="gallery-photo-container">
          <div className="gallery-photo-frame">
            <div className="photo-wrapper">
              <img
                src={galleryPhotos[currentPhotoIndex]}
                alt={`Gallery Photo ${currentPhotoIndex + 1}`}
                className="gallery-photo"
              />
              <div className="photo-overlay-info">
                <span className="photo-number-badge">
                  {currentPhotoIndex + 1}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced photo navigation */}
        <div className="gallery-photo-controls">
          <button 
            onClick={handlePrevPhoto}
            disabled={currentPhotoIndex === 0}
            className="gallery-nav-btn prev-btn"
          >
            <span className="nav-icon">←</span>
            <span className="nav-text">Previous</span>
          </button>
          
          {/* Photo indicators */}
          <div className="photo-indicators">
            {galleryPhotos.map((_, index) => (
              <div
                key={index}
                className={`indicator ${index === currentPhotoIndex ? 'active' : ''}`}
                onClick={() => setCurrentPhotoIndex(index)}
              />
            ))}
          </div>
          
          <button 
            onClick={handleNextPhoto}
            disabled={currentPhotoIndex === galleryPhotos.length - 1}
            className="gallery-nav-btn next-btn"
          >
            <span className="nav-text">Next</span>
            <span className="nav-icon">→</span>
          </button>
        </div>

        {/* Enhanced controls panel */}
        <div className="gallery-controls-panel">
          <button onClick={handleExit} className="exit-gallery-btn">
            <span className="btn-icon">🔒</span>
            <span className="btn-text">Exit Gallery</span>
          </button>
          
          <div className="photo-info">
            <span className="info-text">Photo {currentPhotoIndex + 1} of {galleryPhotos.length}</span>
          </div>
        </div>

        <div className="gallery-info">
          <span className="info-badge">📸 Gallery Collection</span>
          <span className="access-info">Private Access Required</span>
        </div>
      </div>
    </div>
  );
};

export default GalleryPhotos;
