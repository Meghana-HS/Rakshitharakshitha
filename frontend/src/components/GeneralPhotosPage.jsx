import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './GeneralPhotosPage.css';

// Import general photos
import p1 from '../assets/p1.jpeg';
import p2 from '../assets/p2.jpeg';
import p3 from '../assets/p3.png';
import p4 from '../assets/p4.jpeg';
import p5 from '../assets/p5.jpeg';
import p6 from '../assets/p6.jpeg';
import p7 from '../assets/p7.jpeg';
import p8 from '../assets/p8.jpeg';
import p9 from '../assets/p9.jpeg';

const GeneralPhotosPage = () => {
  const [showContent, setShowContent] = useState(false);
  const [visiblePhotos, setVisiblePhotos] = useState([]);
  const [showNextButton, setShowNextButton] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isSlideshow, setIsSlideshow] = useState(false);
  const navigate = useNavigate();

  const generalPhotos = [
    { id: 1, src: p1, caption: "Beautiful Moment #1" },
    { id: 2, src: p2, caption: "Beautiful Moment #2" },
    { id: 3, src: p3, caption: "Beautiful Moment #3" },
    { id: 4, src: p4, caption: "Beautiful Moment #4" },
    { id: 5, src: p5, caption: "Beautiful Moment #5" },
    { id: 6, src: p6, caption: "Beautiful Moment #6" },
    { id: 7, src: p7, caption: "Beautiful Moment #7" },
    { id: 8, src: p8, caption: "Beautiful Moment #8" },
    { id: 9, src: p9, caption: "Beautiful Moment #9" }
  ];

  useEffect(() => {
    setShowContent(true);
    
    // Start slideshow after content loads
    setTimeout(() => {
      setIsSlideshow(true);
      advanceSlideshow();
    }, 1000);
  }, []);

  const advanceSlideshow = () => {
    generalPhotos.forEach((photo, index) => {
      setTimeout(() => {
        setCurrentSlideIndex(index);
        setVisiblePhotos(prev => [...prev, photo.id]);
        
        // Show next button after all photos are revealed
        if (index === generalPhotos.length - 1) {
          setTimeout(() => {
            setShowNextButton(true);
            setIsSlideshow(false);
          }, 2000);
        }
      }, index * 2000); // Show each photo for 2 seconds
    });
  };

  const goToSlide = (index) => {
    setCurrentSlideIndex(index);
    if (!visiblePhotos.includes(generalPhotos[index].id)) {
      setVisiblePhotos(prev => [...prev, generalPhotos[index].id]);
    }
  };

  const nextSlide = () => {
    if (currentSlideIndex < generalPhotos.length - 1) {
      goToSlide(currentSlideIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlideIndex > 0) {
      goToSlide(currentSlideIndex - 1);
    }
  };

  const handlePhotoClick = (photo) => {
    setSelectedPhoto(photo);
  };

  const closeModal = () => {
    setSelectedPhoto(null);
  };

  const handleUnlockNext = () => {
    navigate('/traditional');
  };

  return (
    <div className="general-photos-page">
      {/* Background Pattern */}
      <div className="background-pattern"></div>
      
      {/* Header */}
      <div className={`page-header ${showContent ? 'fade-in' : ''}`}>
        <h1 className="page-title">General Memories</h1>
        <p className="page-subtitle">Beautiful moments that make life special</p>
      </div>

      {/* Photo Grid */}
      <div className="photo-container">
        {/* Slideshow Controls */}
        {isSlideshow && (
          <div className="slideshow-controls">
            <div className="slideshow-info">
              <h3>Enjoying the memories? 📸</h3>
              <p>Photo {currentSlideIndex + 1} of {generalPhotos.length}</p>
            </div>
            <div className="slideshow-buttons">
              <button onClick={prevSlide} disabled={currentSlideIndex === 0} className="slide-btn prev-btn">
                ← Previous
              </button>
              <button onClick={nextSlide} disabled={currentSlideIndex === generalPhotos.length - 1} className="slide-btn next-btn">
                Next →
              </button>
            </div>
          </div>
        )}

        {/* Slide Indicators */}
        <div className="slide-indicators">
          {generalPhotos.map((photo, index) => (
            <button
              key={photo.id}
              onClick={() => goToSlide(index)}
              className={`slide-dot ${index === currentSlideIndex ? 'active' : ''} ${visiblePhotos.includes(photo.id) ? 'revealed' : ''}`}
              disabled={!visiblePhotos.includes(photo.id)}
            >
              {index + 1}
            </button>
          ))}
        </div>

        <div className="photo-grid">
          {generalPhotos.map((photo, index) => (
            <div
              key={photo.id}
              className={`polaroid-container ${visiblePhotos.includes(photo.id) ? 'visible' : ''} ${index === currentSlideIndex && isSlideshow ? 'current-slide' : ''}`}
              style={{ animationDelay: `${index * 0.3}s` }}
              onClick={() => handlePhotoClick(photo)}
            >
              <div className="polaroid">
                <div className="photo-frame">
                  <img
                    src={photo.src}
                    alt={photo.caption}
                    className="polaroid-photo"
                  />
                </div>
                <div className="polaroid-caption">
                  <p>{photo.caption}</p>
                  <div className="photo-number">#{photo.id}</div>
                </div>
              </div>
              {index === currentSlideIndex && isSlideshow && (
                <div className="slide-highlight">✨</div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Button */}
      {showNextButton && (
        <div className="navigation-container">
          <button
            onClick={handleUnlockNext}
            className="next-section-button"
          >
            <span className="button-text">See Traditional Moments 🎎</span>
            <span className="button-arrow">→</span>
          </button>
        </div>
      )}

      {/* Photo Modal */}
      {selectedPhoto && (
        <div className="photo-modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={closeModal}>×</button>
            <img
              src={selectedPhoto.src}
              alt={selectedPhoto.caption}
              className="modal-photo"
            />
            <div className="modal-caption">
              <h3>{selectedPhoto.caption}</h3>
              <p>Memory #{selectedPhoto.id}</p>
            </div>
          </div>
        </div>
      )}

      {/* Floating Decorations */}
      <div className="floating-decorations">
        <div className="decoration star-1">⭐</div>
        <div className="decoration star-2">✨</div>
        <div className="decoration star-3">💫</div>
        <div className="decoration heart-1">💕</div>
        <div className="decoration heart-2">💖</div>
      </div>
    </div>
  );
};

export default GeneralPhotosPage;
