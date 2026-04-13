import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const BirthdayCelebration = () => {
  const [showContent, setShowContent] = useState(false);
  const [confettiPieces, setConfettiPieces] = useState([]);
  const [showCake, setShowCake] = useState(false);
  const [celebrationMessage, setCelebrationMessage] = useState('');
  const navigate = useNavigate();

  const celebrationMessages = [
    "🎉 HAPPY BIRTHDAY! 🎂",
    "✨ Make a wish! 🌟",
    "🎊 Party time! 💃",
    "🎈 Celebrate big! 🎁",
    "💕 Birthday magic! ✨"
  ];

  const birthdayEmojis = ['🎂', '🎉', '🎊', '🎈', '🎁', '🌟', '💕', '🎵', '🎶'];

  useEffect(() => {
    setShowContent(true);
    
    // Create confetti pieces
    const newConfetti = [...Array(50)].map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      animationDelay: Math.random() * 3,
      animationDuration: 2 + Math.random() * 2,
      color: `hsl(${Math.random() * 360}, 100%, 50%)`
    }));
    setConfettiPieces(newConfetti);

    // Random celebration message
    setCelebrationMessage(celebrationMessages[Math.floor(Math.random() * celebrationMessages.length)]);

    // Show cake after delay
    const cakeTimer = setTimeout(() => setShowCake(true), 1500);

    return () => clearTimeout(cakeTimer);
  }, []);

  const handleCelebrate = () => {
    // Create more confetti
    const newConfetti = [...Array(30)].map((_, i) => ({
      id: Date.now() + i,
      left: Math.random() * 100,
      animationDelay: Math.random() * 1,
      animationDuration: 2 + Math.random() * 2,
      color: `hsl(${Math.random() * 360}, 100%, 50%)`
    }));
    setConfettiPieces(prev => [...prev, ...newConfetti]);

    // Change message
    setCelebrationMessage(celebrationMessages[Math.floor(Math.random() * celebrationMessages.length)]);
  };

  const handleContinue = () => {
    navigate('/general-intro');
  };

  return (
    <div className="screen bg-celebration birthday-celebration-bg">
      {/* Confetti Container */}
      <div className="birthday-confetti">
        {confettiPieces.map(piece => (
          <div
            key={piece.id}
            className="confetti-piece"
            style={{
              left: `${piece.left}%`,
              animationDelay: `${piece.animationDelay}s`,
              animationDuration: `${piece.animationDuration}s`,
              background: piece.color
            }}
          />
        ))}
      </div>

      {/* Floating Birthday Emojis */}
      {birthdayEmojis.map((emoji, index) => (
        <div
          key={index}
          className="birthday-emoji"
          style={{ animationDelay: `${index * 0.7}s` }}
        >
          {emoji}
        </div>
      ))}

      <div className="content-overlay">
        <div className={`birthday-title ${showContent ? 'fade-in-up' : ''}`} style={{ animationDelay: '0.3s' }}>
          🎂 BIRTHDAY CELEBRATION 🎂
        </div>
        
        <div className={`celebration-message ${showContent ? 'fade-in-up' : ''}`} style={{ animationDelay: '0.6s' }}>
          {celebrationMessage}
        </div>

        {/* Birthday Cake */}
        <div 
          className={`birthday-cake ${showCake ? 'show' : ''} ${showContent ? 'fade-in-up' : ''} birthday-cake-glow`}
          style={{ animationDelay: '1s' }}
        >
          <div className="cake-container">
            <div className="cake-layers">
              <div className="cake-layer bottom-layer"></div>
              <div className="cake-layer middle-layer"></div>
              <div className="cake-layer top-layer"></div>
            </div>
            <div className="cake-candles">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="candle">
                  <div className="flame"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Celebration Buttons */}
        <div className="celebration-buttons">
          <button 
            className="birthday-btn"
            onClick={handleCelebrate}
            style={{ animationDelay: '1.5s' }}
          >
            🎉 Celebrate More!
          </button>
          
          <button 
            className="birthday-btn"
            onClick={handleContinue}
            style={{ animationDelay: '1.8s' }}
          >
            🎂 Start Birthday Journey
          </button>
        </div>

        {/* Birthday Wish */}
        <div className={`birthday-wish ${showContent ? 'fade-in-up' : ''}`} style={{ animationDelay: '2s' }}>
          Make a wish and blow out the candles! 🌟
        </div>
      </div>
    </div>
  );
};

export default BirthdayCelebration;
