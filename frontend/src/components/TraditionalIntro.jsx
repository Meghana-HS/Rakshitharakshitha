import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const TraditionalIntro = () => {
  const [showContent, setShowContent] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setShowContent(true);
  }, []);

  const handleContinue = () => {
    navigate('/traditional-display');
  };

  return (
    <div className="screen" style={{
      background: `linear-gradient(135deg, rgba(255,248,220,0.9), rgba(255,239,213,0.9)), url('https://images.unsplash.com/photo-1519741497674-611481863552?w=1920&q=80')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }}>
      {/* Floating decorative elements */}
      <div className="floating-icons">
        <span className="float-icon" style={{ top: '15%', left: '5%', animationDelay: '0s' }}>🌟</span>
        <span className="float-icon" style={{ top: '25%', right: '8%', animationDelay: '0.5s' }}>✨</span>
        <span className="float-icon" style={{ top: '65%', left: '7%', animationDelay: '1s' }}>�</span>
        <span className="float-icon" style={{ top: '75%', right: '5%', animationDelay: '1.5s' }}>�</span>
      </div>

      <div className="progress-indicator">
        <div className="progress-dot"></div>
        <div className="progress-dot"></div>
        <div className="progress-dot"></div>
        <div className="progress-dot active"></div>
        <div className="progress-dot"></div>
        <div className="progress-dot"></div>
      </div>
      
      <div className="content-overlay">
        <div className={`intro-card ${showContent ? 'fade-in' : ''}`} style={{
          background: 'rgba(255,255,255,0.95)',
          padding: '3rem',
          borderRadius: '25px',
          boxShadow: '0 20px 60px rgba(218,165,32,0.3)',
          maxWidth: '650px'
        }}>
          <div style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>🌸 ✨</div>
          
          <h1 className="modern-title" style={{ 
            fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
            marginBottom: '1rem',
            background: 'linear-gradient(45deg, #daa520, #b8860b)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            Traditional Days
          </h1>
          
          <p className="modern-message" style={{ 
            fontSize: '1.1rem', 
            color: '#666',
            marginBottom: '2rem',
            lineHeight: '1.8'
          }}>
            Elegant moments in timeless traditions 🌟<br/>
            Beauty that never fades, memories that last forever 💫
          </p>
          
          <button 
            className={`modern-btn ${showContent ? 'fade-in-up' : ''}`} 
            onClick={handleContinue}
            style={{ 
              animationDelay: '0.5s',
              background: 'linear-gradient(45deg, #daa520, #b8860b)'
            }}
          >
            Explore Traditions 🌟
          </button>
        </div>
      </div>
    </div>
  );
};

export default TraditionalIntro;
