import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// Import all images
import p1 from './assets/p1.jpeg';
import p2 from './assets/p2.jpeg';
import p3 from './assets/p3.png';
import p4 from './assets/p4.jpeg';
import p5 from './assets/p5.jpeg';
import p6 from './assets/p6.jpeg';
import p7 from './assets/p7.jpeg';
import p8 from './assets/p8.jpeg';
import p9 from './assets/p9.jpeg';

import mine1 from './assets/mine1.jpeg';
import mine2 from './assets/mine2.jpeg';
import mine3 from './assets/mine3.jpeg';
import mine4 from './assets/mine4.jpeg';
import mine5 from './assets/mine5.jpeg';
import mine6 from './assets/mine6.jpeg';
import mine7 from './assets/mine7.jpeg';
import mine8 from './assets/mine8.jpeg';
import mine9 from './assets/mine9.jpeg';
import mine10 from './assets/mine10.jpeg';

// Image arrays
const generalImages = [p1, p2, p3, p4, p5, p6, p7, p8, p9];
const friendsImages = [mine1, mine2, mine3, mine4, mine5, mine6, mine7, mine8, mine9, mine10];

// Birthday messages
const birthdayMessages = [
  "From hostel days to forever memories ❤️",
  "4 years of laughter, tears, and endless moments 🌟",
  "You made every day brighter just by being you ✨",
  "Late night talks and early morning dreams 🌅",
  "Through thick and thin, we stood together 🫶",
  "Happy Birthday to my favorite person 🎂💖",
  "May all your dreams come true this year 🌈",
  "You deserve all the happiness in the world 🎁",
  "Here's to many more years of friendship 🥳",
  "Thank you for being the amazing friend you are 🙏"
];

const App = () => {
  const [currentScreen, setCurrentScreen] = useState('welcome');
  const [showContent, setShowContent] = useState(false);
  const [visibleImages, setVisibleImages] = useState([]);
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (currentScreen === 'message') {
      const messageTimer = setInterval(() => {
        setCurrentMessageIndex(prev => {
          if (prev < birthdayMessages.length - 1) {
            return prev + 1;
          } else {
            clearInterval(messageTimer);
            setTimeout(() => setCurrentScreen('final'), 2000);
            return prev;
          }
        });
      }, 2000);
      return () => clearInterval(messageTimer);
    }
  }, [currentScreen]);

  const handleScreenChange = (screen) => {
    setCurrentScreen(screen);
    setShowContent(false);
    setVisibleImages([]);
    setCurrentSlideIndex(0);
    
    setTimeout(() => {
      setShowContent(true);
      if (screen.includes('display')) {
        revealImages();
      }
    }, 100);
  };

  const revealImages = () => {
    const images = currentScreen === 'general-display' ? generalImages : friendsImages;
    images.forEach((_, index) => {
      setTimeout(() => {
        setVisibleImages(prev => [...prev, index]);
      }, index * 200);
    });
  };

  const nextSlide = () => {
    const images = currentScreen === 'general-display' ? generalImages : friendsImages;
    if (currentSlideIndex < images.length - 1) {
      setCurrentSlideIndex(currentSlideIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlideIndex > 0) {
      setCurrentSlideIndex(currentSlideIndex - 1);
    }
  };

  const getCategoryTheme = () => {
    switch (currentScreen) {
      case 'general-intro':
      case 'general-display':
        return { bg: '#ffe4e1', accent: '#ff69b4' };
      case 'traditional-intro':
      case 'traditional-display':
        return { bg: '#fff0e6', accent: '#ffa500' };
      case 'friends-intro':
      case 'friends-display':
        return { bg: '#e0f7fa', accent: '#00bcd4' };
      case 'sister-intro':
      case 'sister-display':
        return { bg: '#e6e6fa', accent: '#9370db' };
      default:
        return { bg: '#ffe4e1', accent: '#ff69b4' };
    }
  };

  const theme = getCategoryTheme();

  // Welcome Screen
  if (currentScreen === 'welcome') {
    return (
      <div className="screen welcome-screen" style={{ background: `linear-gradient(135deg, ${theme.bg}, #fff)` }}>
        <div className="container h-100 d-flex align-items-center justify-content-center">
          <div className={`welcome-card ${showContent ? 'fade-in' : ''}`}>
            <div className="welcome-icon">🎁</div>
            <h1 className="welcome-title">A Special Surprise Awaits 💫</h1>
            <p className="welcome-subtitle">Tap gently to begin your birthday journey</p>
            <button 
              className="magic-btn"
              onClick={() => {
                setShowContent(true);
                setTimeout(() => setCurrentScreen('message'), 500);
              }}
            >
              Begin the Magic ✨
            </button>
          </div>
        </div>
        <div className="floating-hearts">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="floating-heart" style={{ 
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}>💖</div>
          ))}
        </div>
      </div>
    );
  }

  // Message Screen
  if (currentScreen === 'message') {
    return (
      <div className="screen message-screen" style={{ background: `linear-gradient(135deg, ${theme.bg}, #fff)` }}>
        <div className="container h-100 d-flex align-items-center justify-content-center">
          <div className={`message-card ${showContent ? 'fade-in' : ''}`}>
            <div className="message-header">
              <h2 className="message-title">Our Journey Together 🌟</h2>
            </div>
            <div className="message-body">
              <p className="message-text">
                {birthdayMessages[currentMessageIndex]}
              </p>
            </div>
            <div className="message-progress">
              <div className="progress-dots">
                {birthdayMessages.map((_, index) => (
                  <span 
                    key={index} 
                    className={`dot ${index <= currentMessageIndex ? 'active' : ''}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="floating-elements">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="floating-element" style={{ 
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`
            }}>🌸</div>
          ))}
        </div>
      </div>
    );
  }

  // Category Intro Screens
  if (currentScreen.includes('-intro')) {
    const categoryTitle = currentScreen.split('-')[0];
    const titles = {
      general: { title: "General Memories ✨", subtitle: "Beautiful moments that make life special" },
      traditional: { title: "Traditional Moments 🎎", subtitle: "Cultural celebrations and precious times" },
      friends: { title: "Best Friends Forever 👭", subtitle: "Laughter, adventures, and unforgettable memories" },
      sister: { title: "Sister Love 💕", subtitle: "Bond that grows stronger every day" }
    };
    
    return (
      <div className="screen category-intro" style={{ background: `linear-gradient(135deg, ${theme.bg}, #fff)` }}>
        <div className="container h-100 d-flex align-items-center justify-content-center">
          <div className={`intro-card ${showContent ? 'slide-up' : ''}`}>
            <div className="intro-icon">📸</div>
            <h1 className="intro-title">{titles[categoryTitle].title}</h1>
            <p className="intro-subtitle">{titles[categoryTitle].subtitle}</p>
            <button 
              className="reveal-btn"
              onClick={() => handleScreenChange(`${categoryTitle}-display`)}
            >
              Open Memories 💖
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Category Display Screens
  if (currentScreen.includes('-display')) {
    const category = currentScreen.split('-')[0];
    const images = category === 'general' ? generalImages : friendsImages;
    const titles = {
      general: "General Memories",
      traditional: "Traditional Moments", 
      friends: "Best Friends Forever",
      sister: "Sister Love"
    };

    return (
      <div className="screen display-screen" style={{ background: `linear-gradient(135deg, ${theme.bg}, #fff)` }}>
        <div className="container py-4">
          <div className="text-center mb-4">
            <h1 className="display-title">{titles[category]}</h1>
            <p className="display-subtitle">Enjoy these beautiful memories</p>
          </div>

          {isMobile ? (
            // Mobile: Slideshow
            <div className="mobile-slideshow">
              <div className="slide-container">
                {images.map((img, index) => (
                  <div 
                    key={index}
                    className={`slide ${index === currentSlideIndex ? 'active' : ''}`}
                  >
                    <div className="image-card">
                      <img src={img} alt={`Memory ${index + 1}`} className="card-img" />
                    </div>
                  </div>
                ))}
              </div>
              <div className="slideshow-controls">
                <button onClick={prevSlide} disabled={currentSlideIndex === 0} className="slide-btn">
                  ←
                </button>
                <span className="slide-counter">{currentSlideIndex + 1} / {images.length}</span>
                <button onClick={nextSlide} disabled={currentSlideIndex === images.length - 1} className="slide-btn">
                  →
                </button>
              </div>
            </div>
          ) : (
            // Desktop: Grid
            <div className="row g-4">
              {images.map((img, index) => (
                <div key={index} className="col-12 col-sm-6 col-md-3">
                  <div 
                    className={`image-card ${visibleImages.includes(index) ? 'visible' : ''}`}
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    <img src={img} alt={`Memory ${index + 1}`} className="card-img" />
                    <div className="card-overlay">
                      <span>Memory #{index + 1}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          <div className="text-center mt-4">
            {category === 'general' && (
              <button onClick={() => handleScreenChange('traditional-intro')} className="next-btn">
                Traditional Moments →
              </button>
            )}
            {category === 'traditional' && (
              <button onClick={() => handleScreenChange('friends-intro')} className="next-btn">
                Best Friends →
              </button>
            )}
            {category === 'friends' && (
              <button onClick={() => handleScreenChange('sister-intro')} className="next-btn">
                Sister Love →
              </button>
            )}
            {category === 'sister' && (
              <button onClick={() => setCurrentScreen('final')} className="next-btn">
                Final Surprise 🎉
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }

  // Final Screen
  if (currentScreen === 'final') {
    return (
      <div className="screen final-screen" style={{ background: `linear-gradient(135deg, #ff69b4, #9370db, #87ceeb)` }}>
        <div className="container h-100 d-flex align-items-center justify-content-center">
          <div className={`final-card ${showContent ? 'zoom-fade' : ''}`}>
            <div className="final-icon">🎂</div>
            <h1 className="final-title">HAPPY BIRTHDAY</h1>
            <h2 className="final-subtitle">🎉🎊🎈</h2>
            <p className="final-message">Wishing you the most wonderful birthday filled with love, laughter, and all your heart desires!</p>
            <div className="confetti">
              {[...Array(20)].map((_, i) => (
                <div key={i} className="confetti-piece" style={{ 
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`,
                  backgroundColor: ['#ff69b4', '#9370db', '#87ceeb', '#ffd700', '#ff6b6b'][Math.floor(Math.random() * 5)]
                }} />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return null;
};

export default App;
