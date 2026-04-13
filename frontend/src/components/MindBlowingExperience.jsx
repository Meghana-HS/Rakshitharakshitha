import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const MindBlowingExperience = () => {
  const [showContent, setShowContent] = useState(false);
  const [explosions, setExplosions] = useState([]);
  const [mindBlown, setMindBlown] = useState(false);
  const [secretCode, setSecretCode] = useState('');
  const [secretRevealed, setSecretRevealed] = useState(false);
  const navigate = useNavigate();
  const containerRef = useRef(null);

  const secretMessages = [
    "🤯 MIND BLOWN! You found the secret!",
    "✨ UNLOCKED: Hidden Birthday Magic!",
    "🎊 CONGRATULATIONS! You're a birthday wizard!",
    "💫 AMAZING! You discovered the easter egg!",
    "🌟 INCREDIBLE! You've unlocked premium content!"
  ];

  useEffect(() => {
    setShowContent(true);
    
    // Create random explosions
    const explosionInterval = setInterval(() => {
      createExplosion();
    }, 3000);

    // Secret code listener
    const handleKeyPress = (e) => {
      setSecretCode(prev => prev + e.key);
      if (secretCode.includes('birthday')) {
        setSecretRevealed(true);
        createMassiveExplosion();
      }
    };

    window.addEventListener('keypress', handleKeyPress);

    return () => {
      clearInterval(explosionInterval);
      window.removeEventListener('keypress', handleKeyPress);
    };
  }, [secretCode]);

  const createExplosion = (x = null, y = null) => {
    const newExplosion = {
      id: Date.now(),
      x: x || Math.random() * window.innerWidth,
      y: y || Math.random() * window.innerHeight,
      particles: [...Array(30)].map((_, i) => ({
        id: i,
        tx: (Math.random() - 0.5) * 500,
        ty: (Math.random() - 0.5) * 500,
        color: `hsl(${Math.random() * 360}, 100%, 50%)`
      }))
    };
    
    setExplosions(prev => [...prev, newExplosion]);
    
    setTimeout(() => {
      setExplosions(prev => prev.filter(e => e.id !== newExplosion.id));
    }, 2000);
  };

  const createMassiveExplosion = () => {
    for (let i = 0; i < 10; i++) {
      setTimeout(() => {
        createExplosion(
          Math.random() * window.innerWidth,
          Math.random() * window.innerHeight
        );
      }, i * 100);
    }
  };

  const handleMindBlowingClick = (e) => {
    createExplosion(e.clientX, e.clientY);
    
    if (!mindBlown) {
      setMindBlown(true);
      setTimeout(() => {
        const categories = ['/general-intro', '/traditional-intro', '/friends-intro', '/sister-intro'];
        const randomCategory = categories[Math.floor(Math.random() * categories.length)];
        navigate(randomCategory);
      }, 2000);
    }
  };

  const handleSecretClick = () => {
    createMassiveExplosion();
    setSecretRevealed(true);
  };

  return (
    <div 
      className="screen bg-celebration magical-glow"
      onClick={handleMindBlowingClick}
      ref={containerRef}
    >
      {/* Explosion Container */}
      <div className="explosion-container">
        {explosions.map(explosion => (
          <div key={explosion.id}>
            {explosion.particles.map(particle => (
              <div
                key={particle.id}
                className="explosion-particle"
                style={{
                  left: explosion.x,
                  top: explosion.y,
                  background: particle.color,
                  '--tx': particle.tx + 'px',
                  '--ty': particle.ty + 'px'
                }}
              />
            ))}
          </div>
        ))}
      </div>

      {/* Floating Elements */}
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="floating-element"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${3 + Math.random() * 4}s`,
            fontSize: `${1 + Math.random() * 2}rem`
          }}
        >
          {['🎉', '✨', '🌟', '💫', '🎊', '💕', '🎂', '🎁', '🎈', '🎯'][Math.floor(Math.random() * 10)]}
        </div>
      ))}

      <div className="content-overlay">
        <div className={`mind-blowing-title ${showContent ? 'fade-in-up' : ''}`} style={{ animationDelay: '0.3s' }}>
          🤯 MIND BLOWING 🤯
        </div>
        
        <div className={`mind-blowing-subtitle ${showContent ? 'fade-in-up' : ''}`} style={{ animationDelay: '0.6s' }}>
          Click anywhere for EXPLOSIONS! 🎆
        </div>

        {mindBlown && (
          <div className="mind-blown-message fade-in-up">
            💥 BOOM! You're amazing! 💥
          </div>
        )}

        {secretRevealed && (
          <div className="secret-reveal fade-in-up">
            {secretMessages[Math.floor(Math.random() * secretMessages.length)]}
          </div>
        )}

        {/* Interactive Buttons */}
        <div className="mind-blowing-buttons">
          <button 
            className="explosion-btn"
            onClick={(e) => {
              e.stopPropagation();
              createMassiveExplosion();
            }}
          >
            💥 MASSIVE EXPLOSION!
          </button>
          
          <button 
            className="secret-btn"
            onClick={(e) => {
              e.stopPropagation();
              handleSecretClick();
            }}
          >
            🔮 SECRET POWER
          </button>
        </div>

        {/* Hidden Hint */}
        <div className="hidden-hint">
          Type "birthday" for secret magic...
        </div>
      </div>
    </div>
  );
};

export default MindBlowingExperience;
