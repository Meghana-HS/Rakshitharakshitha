import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './BestFriendsPage.css';

// Import friends photos
import mine1 from '../assets/mine1.jpeg';
import mine2 from '../assets/mine2.jpeg';
import mine3 from '../assets/mine3.jpeg';
import mine4 from '../assets/mine4.jpeg';
import mine5 from '../assets/mine5.jpeg';
import mine6 from '../assets/mine6.jpeg';
import mine7 from '../assets/mine7.jpeg';
import mine8 from '../assets/mine8.jpeg';
import mine9 from '../assets/mine9.jpeg';
import mine10 from '../assets/mine10.jpeg';

const BestFriendsPage = () => {
  const [showContent, setShowContent] = useState(false);
  const [visiblePhotos, setVisiblePhotos] = useState([]);
  const [showNextButton, setShowNextButton] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isSlideshow, setIsSlideshow] = useState(false);
  const navigate = useNavigate();

  const friendsPhotos = [
    { id: 1, src: mine1, caption: "Bestie Moment #1" },
    { id: 2, src: mine2, caption: "Bestie Moment #2" },
    { id: 3, src: mine3, caption: "Bestie Moment #3" },
    { id: 4, src: mine4, caption: "Bestie Moment #4" },
    { id: 5, src: mine5, caption: "Bestie Moment #5" },
    { id: 6, src: mine6, caption: "Bestie Moment #6" },
    { id: 7, src: mine7, caption: "Bestie Moment #7" },
    { id: 8, src: mine8, caption: "Bestie Moment #8" },
    { id: 9, src: mine9, caption: "Bestie Moment #9" },
    { id: 10, src: mine10, caption: "Bestie Moment #10" }
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
    friendsPhotos.forEach((photo, index) => {
      setTimeout(() => {
        setCurrentSlideIndex(index);
        setVisiblePhotos(prev => [...prev, photo.id]);
        
        // Show next button after all photos are revealed
        if (index === friendsPhotos.length - 1) {
          setTimeout(() => {
            setShowNextButton(true);
            setIsSlideshow(false);
          }, 2000);
        }
      }, index * 2500); // Show each photo for 2.5 seconds
    });
  };

  const goToSlide = (index) => {
    setCurrentSlideIndex(index);
    if (!visiblePhotos.includes(friendsPhotos[index].id)) {
      setVisiblePhotos(prev => [...prev, friendsPhotos[index].id]);
    }
  };

  const nextSlide = () => {
    if (currentSlideIndex < friendsPhotos.length - 1) {
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
    navigate('/sister');
  };

  return (
    <div className="best-friends-page">
      {/* Fun Background */}
      <div className="fun-background"></div>
      
      {/* Header */}
      <div className={`page-header ${showContent ? 'bounce-in' : ''}`}>
        <h1 className="page-title">Best Friends Forever</h1>
        <p className="page-subtitle">Laughter, adventures, and unforgettable memories</p>
        <div className="emoji-divider">
          <span>👭</span>
          <span>💕</span>
          <span>🎉</span>
          <span>🌟</span>
          <span>👯</span>
        </div>
      </div>

      {/* Photo Grid */}
      <div className="photo-container">
        {/* Fun Slideshow Controls */}
        {isSlideshow && (
          <div className="fun-slideshow-controls">
            <div className="slideshow-info">
              <h3>Friendship Memories Tour! 🎉</h3>
              <p>Bestie Moment {currentSlideIndex + 1} of {friendsPhotos.length}</p>
            </div>
            <div className="slideshow-buttons">
              <button onClick={prevSlide} disabled={currentSlideIndex === 0} className="fun-slide-btn prev-btn">
                👈 Previous
              </button>
              <button onClick={nextSlide} disabled={currentSlideIndex === friendsPhotos.length - 1} className="fun-slide-btn next-btn">
                Next 👉
              </button>
            </div>
          </div>
        )}

        {/* Fun Slide Indicators */}
        <div className="fun-slide-indicators">
          {friendsPhotos.map((photo, index) => (
            <button
              key={photo.id}
              onClick={() => goToSlide(index)}
              className={`fun-slide-dot ${index === currentSlideIndex ? 'active' : ''} ${visiblePhotos.includes(photo.id) ? 'revealed' : ''}`}
              disabled={!visiblePhotos.includes(photo.id)}
            >
              {index + 1}
            </button>
          ))}
        </div>

        <div className="friends-grid">
          {friendsPhotos.map((photo, index) => (
            <div
              key={photo.id}
              className={`friend-photo ${visiblePhotos.includes(photo.id) ? 'visible' : ''} ${index === currentSlideIndex && isSlideshow ? 'current-slide' : ''}`}
              style={{ animationDelay: `${index * 0.25}s` }}
              onClick={() => handlePhotoClick(photo)}
            >
              <div className="photo-card">
                <div className="photo-wrapper">
                  <img
                    src={photo.src}
                    alt={photo.caption}
                    className="friend-img"
                  />
                  <div className="photo-badge">
                    <span>#{photo.id}</span>
                  </div>
                </div>
                <div className="photo-info">
                  <h4>{photo.caption}</h4>
                  <div className="fun-emoji">😊</div>
                </div>
              </div>
              {index === currentSlideIndex && isSlideshow && (
                <div className="fun-slide-highlight">🌟</div>
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
            className="fun-button"
          >
            <span className="button-text">See Sister Moments 👧</span>
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
              <p>Friendship Memory #{selectedPhoto.id}</p>
            </div>
          </div>
        </div>
      )}

      {/* Fun Decorations */}
      <div className="fun-decorations">
        <div className="decoration emoji-1">🎈</div>
        <div className="decoration emoji-2">🌈</div>
        <div className="decoration emoji-3">🦄</div>
        <div className="decoration emoji-4">🍭</div>
        <div className="decoration emoji-5">🎊</div>
        <div className="decoration emoji-6">🌺</div>
      </div>
    </div>
  );
};

export default BestFriendsPage;
