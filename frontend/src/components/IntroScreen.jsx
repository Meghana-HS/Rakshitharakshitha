import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const IntroScreen = () => {
  const [showContent, setShowContent] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setShowContent(true);
  }, []);

  const handleStart = () => {
    navigate('/birthday-intro');
  };

  const handleCinematicSlideshow = () => {
    navigate('/cinematic-slideshow');
  };

  const handleRSeries = () => {
    navigate('/r-series');
  };

  const handleModSeries = () => {
    navigate('/mod-series');
  };

  const handleBestiiSeries = () => {
    navigate('/bestii-series');
  };

  const handleFamSeries = () => {
    navigate('/fam-series');
  };

  const handleFSeries = () => {
    navigate('/f-series');
  };

  const handleVedSeries = () => {
    navigate('/ved-series');
  };

  // Simple secret access - click title 3 times
  const [titleClickCount, setTitleClickCount] = useState(0);

  const handleTitleClick = () => {
    const newCount = titleClickCount + 1;
    setTitleClickCount(newCount);
    
    if (newCount >= 3) {
      navigate('/secret-lover-photos');
      setTitleClickCount(0);
    }
    
    // Reset after 2 seconds if not clicked 3 times
    setTimeout(() => {
      if (titleClickCount === newCount) {
        setTitleClickCount(0);
      }
    }, 2000);
  };

  // Secret key combination for lover photos
  const [secretKeySequence, setSecretKeySequence] = useState('');
  const [showSecretButton, setShowSecretButton] = useState(false);

  useEffect(() => {
    const handleKeyPress = (e) => {
      const newSequence = secretKeySequence + e.key;
      setSecretKeySequence(newSequence);
      
      // Secret sequence: "love" (case insensitive)
      if (newSequence.toLowerCase().includes('love')) {
        navigate('/secret-lover-photos');
        setSecretKeySequence('');
      }
      
      // Keep only last 10 characters for next time
      if (newSequence.length > 10) {
        setSecretKeySequence(newSequence.slice(-10));
      }
    };

    window.addEventListener('keypress', handleKeyPress);
    return () => window.removeEventListener('keypress', handleKeyPress);
  }, [secretKeySequence]);

  // Double-click to show secret button
  const handleDoubleClick = () => {
    setShowSecretButton(true);
    setTimeout(() => setShowSecretButton(false), 5000); // Hide after 5 seconds
  };

  return (
    <div className="screen" style={{
      background: `linear-gradient(135deg, rgba(255,240,230,0.85), rgba(255,228,225,0.85)), url('https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=1920&q=80')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }} onDoubleClick={handleDoubleClick}>
      {/* Floating decorative elements */}
      <div className="floating-icons">
        <span className="float-icon" style={{ top: '15%', left: '5%', animationDelay: '0s' }}>📸</span>
        <span className="float-icon" style={{ top: '25%', right: '8%', animationDelay: '0.5s' }}>💕</span>
        <span className="float-icon" style={{ top: '65%', left: '7%', animationDelay: '1s' }}>🌸</span>
        <span className="float-icon" style={{ top: '75%', right: '5%', animationDelay: '1.5s' }}>✨</span>
      </div>

      <div className="progress-indicator">
        <div className="progress-dot"></div>
        <div className="progress-dot active"></div>
        <div className="progress-dot"></div>
        <div className="progress-dot"></div>
        <div className="progress-dot"></div>
        <div className="progress-dot"></div>
      </div>
      
      <div className="content-overlay">
        <div className={`intro-card ${showContent ? 'fade-in' : ''}`} style={{
          background: 'rgba(255,255,255,0.95)',
          padding: '3rem',
          borderRadius: '25px',
          boxShadow: '0 20px 60px rgba(255,105,180,0.3)',
          maxWidth: '650px'
        }}>
          <div style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>📸 ✨</div>
          
          <h1 className="modern-title" style={{ 
            fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
            marginBottom: '1rem'
          }}>
            Our Moments Together
          </h1>
          
          <p className="modern-subtitle" style={{ 
            fontSize: '1.2rem', 
            color: '#666',
            marginBottom: '2rem'
          }}>
            A journey through our beautiful moments together 💫
          </p>
          
          <button 
            className={`modern-btn ${showContent ? 'fade-in-up' : ''}`} 
            onClick={handleStart}
            style={{ animationDelay: '0.5s' }}
          >
            🎂 Begin Celebration
          </button>
          
          <button 
            className="cinematic-slideshow-btn"
            onClick={handleCinematicSlideshow}
            style={{ animationDelay: '0.8s', marginTop: '1rem' }}
          >
            🎬 CINEMATIC JOURNEY
          </button>
          
          {/* Cinematic Sections - Individual Access */}
          <div style={{ marginTop: '1.5rem', borderTop: '2px solid rgba(255,105,180,0.3)', paddingTop: '1rem' }}>
            <p style={{ fontSize: '0.9rem', color: '#666', marginBottom: '0.5rem' }}>View Sections Separately:</p>
            
            <button 
              className="section-btn r-series-btn"
              onClick={handleRSeries}
              style={{ animationDelay: '1.8s', marginTop: '0.5rem', fontSize: '0.85rem', padding: '0.6rem 1.2rem' }}
            >
              📸 R Series (Classic)
            </button>
            
            <button 
              className="section-btn mod-series-btn"
              onClick={handleModSeries}
              style={{ animationDelay: '1.9s', marginTop: '0.5rem', fontSize: '0.85rem', padding: '0.6rem 1.2rem' }}
            >
              🌆 Modern Life
            </button>
            
            <button 
              className="section-btn bestii-series-btn"
              onClick={handleBestiiSeries}
              style={{ animationDelay: '2.0s', marginTop: '0.5rem', fontSize: '0.85rem', padding: '0.6rem 1.2rem' }}
            >
              Bestii
            </button>
            
            <button 
              className="section-btn fam-series-btn"
              onClick={handleFamSeries}
              style={{ animationDelay: '2.1s', marginTop: '0.5rem', fontSize: '0.85rem', padding: '0.6rem 1.2rem' }}
            >
              👨‍👩‍👧‍👦 Family
            </button>
            
            <button 
              className="section-btn f-series-btn"
              onClick={handleFSeries}
              style={{ animationDelay: '2.2s', marginTop: '0.5rem', fontSize: '0.85rem', padding: '0.6rem 1.2rem' }}
            >
              🎉 Friends
            </button>
            
            <button 
              className="section-btn ved-series-btn"
              onClick={handleVedSeries}
              style={{ animationDelay: '2.3s', marginTop: '0.5rem', fontSize: '0.85rem', padding: '0.6rem 1.2rem' }}
            >
              🎂 Birthday Videos
            </button>
          </div>
          
          {/* Secret button that appears on double-click */}
          {showSecretButton && (
            <button 
              className="secret-lover-btn"
              onClick={() => navigate('/secret-lover-photos')}
              style={{ animationDelay: '0s', marginTop: '1rem' }}
            >
              💕 Secret Lover Photos
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default IntroScreen;
