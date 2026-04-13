import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Confetti from 'react-confetti';
import './FinalSlideshowPage.css';

// Import all photos for slideshow
import p1 from '../assets/p1.jpeg';
import p2 from '../assets/p2.jpeg';
import p3 from '../assets/p3.png';
import p4 from '../assets/p4.jpeg';
import p5 from '../assets/p5.jpeg';
import p6 from '../assets/p6.jpeg';
import p7 from '../assets/p7.jpeg';
import p8 from '../assets/p8.jpeg';
import p9 from '../assets/p9.jpeg';
import trd1 from '../assets/trd1.png';
import trd2 from '../assets/trd2.png';
import trd3 from '../assets/trd3.png';
import trd5 from '../assets/trd5.png';
import trd6 from '../assets/trd6.png';
import mine1 from '../assets/mine1.jpeg';
import mine2 from '../assets/mine2.jpeg';
import mine3 from '../assets/mine3.jpeg';
import mine4 from '../assets/mine4.jpeg';
import mine5 from '../assets/mine5.jpeg';
import sis1 from '../assets/sis1.jpeg';
import sis2 from '../assets/sis2.png';
import sis3 from '../assets/sis3.jpeg';
import sis4 from '../assets/sis4.jpeg';
import sis5 from '../assets/sis5.png';

const FinalSlideshowPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showContent, setShowContent] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const [showFinalMessage, setShowFinalMessage] = useState(false);
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
  const navigate = useNavigate();

  // Combine all photos for final slideshow
  const allPhotos = [
    p1, p2, p3, p4, p5, p6, p7, p8, p9,
    trd1, trd2, trd3, trd5, trd6,
    mine1, mine2, mine3, mine4, mine5,
    sis1, sis2, sis3, sis4, sis5
  ];

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

    // Show content
    setShowContent(true);

    // Show final message after some time
    setTimeout(() => {
      setShowFinalMessage(true);
    }, 3000);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Auto-play slideshow
  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % allPhotos.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isPlaying, allPhotos.length]);

  const handlePrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + allPhotos.length) % allPhotos.length);
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % allPhotos.length);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleReplay = () => {
    navigate('/');
  };

  return (
    <div className="final-slideshow-page">
      {/* Confetti Background */}
      <Confetti
        width={windowSize.width}
        height={windowSize.height}
        recycle={true}
        numberOfPieces={100}
        gravity={0.2}
        colors={['#FFD700', '#FF69B4', '#00CED1', '#FF6347', '#9370DB']}
      />

      {/* Gradient Background */}
      <div className="gradient-background"></div>

      {/* Header */}
      <div className={`slideshow-header ${showContent ? 'fade-in' : ''}`}>
        <h1 className="slideshow-title">Beautiful Memories</h1>
        <p className="slideshow-subtitle">A journey through all our special moments</p>
      </div>

      {/* Main Slideshow */}
      <div className={`slideshow-container ${showContent ? 'slide-up' : ''}`}>
        <div className="main-slideshow">
          <div className="slide-wrapper">
            <img
              src={allPhotos[currentSlide]}
              alt={`Memory ${currentSlide + 1}`}
              className="slide-image"
            />
            
            {/* Slide Overlay */}
            <div className="slide-overlay">
              <div className="slide-info">
                <span className="slide-number">
                  {currentSlide + 1} / {allPhotos.length}
                </span>
                <div className="slide-title">
                  Memory #{currentSlide + 1}
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Controls */}
          <button
            onClick={handlePrevious}
            className="nav-button prev-button"
            aria-label="Previous"
          >
            ❮
          </button>
          <button
            onClick={handleNext}
            className="nav-button next-button"
            aria-label="Next"
          >
            ❯
          </button>

          {/* Play/Pause Button */}
          <button
            onClick={togglePlayPause}
            className="play-pause-button"
            aria-label={isPlaying ? "Pause" : "Play"}
          >
            {isPlaying ? '⏸️' : '▶️'}
          </button>
        </div>

        {/* Thumbnail Gallery */}
        <div className="thumbnail-gallery">
          {allPhotos.map((photo, index) => (
            <div
              key={index}
              className={`thumbnail ${index === currentSlide ? 'active' : ''}`}
              onClick={() => setCurrentSlide(index)}
            >
              <img
                src={photo}
                alt={`Thumbnail ${index + 1}`}
                className="thumbnail-image"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Final Message */}
      {showFinalMessage && (
        <div className={`final-message ${showFinalMessage ? 'message-appear' : ''}`}>
          <div className="message-card">
            <h2 className="message-title">No matter what, I'll always be there 💫</h2>
            <p className="message-text">
              Thank you for being the amazing person you are. 
              These memories are just the beginning of many more to come!
            </p>
            <div className="message-hearts">
              <span>💖</span>
              <span>💕</span>
              <span>💗</span>
              <span>💝</span>
              <span>💞</span>
            </div>
          </div>
        </div>
      )}

      {/* Replay Button */}
      <div className="replay-container">
        <button
          onClick={handleReplay}
          className="replay-button"
        >
          <span className="button-text">🔄 Replay Surprise</span>
          <span className="button-sparkle">✨</span>
        </button>
      </div>

      {/* Floating Elements */}
      <div className="floating-elements">
        <div className="floating-element element-1">🌟</div>
        <div className="floating-element element-2">💫</div>
        <div className="floating-element element-3">✨</div>
        <div className="floating-element element-4">🎊</div>
        <div className="floating-element element-5">🎉</div>
      </div>
    </div>
  );
};

export default FinalSlideshowPage;
