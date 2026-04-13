import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './IntroMessagePage.css';

const IntroMessagePage = () => {
  const [showContent, setShowContent] = useState(false);
  const [showNextButton, setShowNextButton] = useState(false);
  const navigate = useNavigate();

  const messages = [
    "4 years ago, hostel life started… and I found YOU 😄",
    "From confusion to inseparable… we came a long way ❤️",
    "Late wakeups, food together, endless talks 🚶‍♀️💬",
    "Assignments stress, but we survived everything together 📚",
    "Laughing, sharing secrets, supporting each other 💖",
    "You made tough days easier just by being there 🫶",
    "Hostel became home with you 🏠✨",
    "The best memory of these 4 years is YOU 🥹",
    "Today is your special day - HAPPY BIRTHDAY! 🎂❤️",
    "May all your dreams come true and happiness find you 🌟",
    "You deserve all the love and joy in the world 🎁",
    "Thank you for being the amazing friend you are 🙏",
    "Here's to many more years of friendship and fun 🥳",
    "Happy Birthday to my best friend and favorite person 🎂❤️"
  ];

  useEffect(() => {
    setShowContent(true);
    
    // Show next button after a delay
    setTimeout(() => {
      setShowNextButton(true);
    }, 3000);
  }, []);

  const handleUnlockMemories = () => {
    navigate('/general');
  };

  return (
    <div className="intro-message-page">
      {/* Floating Background */}
      <div className="floating-background">
        <div className="floating-element" style={{ left: '10%', animationDelay: '0s' }}>🎂</div>
        <div className="floating-element" style={{ left: '30%', animationDelay: '1s' }}>�</div>
        <div className="floating-element" style={{ left: '50%', animationDelay: '2s' }}>🎁</div>
        <div className="floating-element" style={{ left: '70%', animationDelay: '3s' }}>�</div>
        <div className="floating-element" style={{ left: '90%', animationDelay: '4s' }}>🎉</div>
        <div className="floating-element" style={{ left: '15%', animationDelay: '2.5s' }}>�</div>
        <div className="floating-element" style={{ left: '85%', animationDelay: '1.5s' }}>🎊</div>
        <div className="floating-element" style={{ left: '45%', animationDelay: '3.5s' }}>🌸</div>
      </div>

      {/* Main Content */}
      <div className={`intro-content ${showContent ? 'fade-in' : ''}`}>
        <div className="message-card">
          <div className="message-header">
            <h2 className="message-title">🎉 Happy Birthday My Dear Friend! 🎂</h2>
            <div className="birthday-subtitle">A special message for your special day</div>
            <div className="message-indicator">
              <span className="indicator-dot active"></span>
              <span className="indicator-dot active"></span>
              <span className="indicator-dot active"></span>
            </div>
          </div>

          <div className="message-body">
            <div className="message-list">
              {messages.map((message, index) => (
                <p key={index} className="message-item">
                  {message}
                </p>
              ))}
            </div>
          </div>

          <div className="message-footer">
            {showNextButton && (
              <button
                onClick={handleUnlockMemories}
                className="unlock-button"
              >
                <span className="button-text">Unlock Beautiful Memories 🔐</span>
                <span className="button-glow"></span>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="progress-container">
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: '100%' }}></div>
        </div>
      </div>
    </div>
  );
};

export default IntroMessagePage;
