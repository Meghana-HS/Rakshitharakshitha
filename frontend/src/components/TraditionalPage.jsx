import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './TraditionalPage.css';

// Import traditional photos
import trd1 from '../assets/trd1.png';
import trd2 from '../assets/trd2.png';
import trd3 from '../assets/trd3.png';
import trd5 from '../assets/trd5.png';
import trd6 from '../assets/trd6.png';
import trd7 from '../assets/trd7.png';
import trd8 from '../assets/trd8.png';
import trd9 from '../assets/trd9.png';
import trd10 from '../assets/trd10.png';

const TraditionalPage = () => {
  const [showContent, setShowContent] = useState(false);
  const [visiblePhotos, setVisiblePhotos] = useState([]);
  const [showNextButton, setShowNextButton] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const navigate = useNavigate();

  const traditionalPhotos = [
    { id: 1, src: trd1, caption: "Traditional Moment #1" },
    { id: 2, src: trd2, caption: "Traditional Moment #2" },
    { id: 3, src: trd3, caption: "Traditional Moment #3" },
    { id: 4, src: trd5, caption: "Traditional Moment #4" },
    { id: 5, src: trd6, caption: "Traditional Moment #5" },
    { id: 6, src: trd7, caption: "Traditional Moment #6" },
    { id: 7, src: trd8, caption: "Traditional Moment #7" },
    { id: 8, src: trd9, caption: "Traditional Moment #8" },
    { id: 9, src: trd10, caption: "Traditional Moment #9" }
  ];

  useEffect(() => {
    setShowContent(true);
    
    // Reveal photos with elegant timing
    const revealPhotos = () => {
      traditionalPhotos.forEach((photo, index) => {
        setTimeout(() => {
          setVisiblePhotos(prev => [...prev, photo.id]);
          
          if (index === traditionalPhotos.length - 1) {
            setTimeout(() => {
              setShowNextButton(true);
            }, 1000);
          }
        }, index * 350);
      });
    };

    revealPhotos();
  }, []);

  const handlePhotoClick = (photo) => {
    setSelectedPhoto(photo);
  };

  const closeModal = () => {
    setSelectedPhoto(null);
  };

  const handleUnlockNext = () => {
    navigate('/friends');
  };

  return (
    <div className="traditional-page">
      {/* Elegant Background */}
      <div className="elegant-background"></div>
      
      {/* Header */}
      <div className={`page-header ${showContent ? 'fade-in' : ''}`}>
        <h1 className="page-title">Traditional Memories</h1>
        <p className="page-subtitle">Celebrating culture and heritage</p>
        <div className="gold-divider"></div>
      </div>

      {/* Photo Grid */}
      <div className="photo-container">
        <div className="traditional-grid">
          {traditionalPhotos.map((photo, index) => (
            <div
              key={photo.id}
              className={`traditional-photo ${visiblePhotos.includes(photo.id) ? 'visible' : ''}`}
              style={{ animationDelay: `${index * 0.35}s` }}
              onClick={() => handlePhotoClick(photo)}
            >
              <div className="photo-frame">
                <img
                  src={photo.src}
                  alt={photo.caption}
                  className="traditional-img"
                />
                <div className="photo-overlay">
                  <div className="overlay-content">
                    <h4>{photo.caption}</h4>
                    <span className="view-icon">👁️</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Button */}
      {showNextButton && (
        <div className="navigation-container">
          <button
            onClick={handleUnlockNext}
            className="elegant-button"
          >
            <span className="button-text">See Friends Moments 👥</span>
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
              <p>Traditional Memory #{selectedPhoto.id}</p>
            </div>
          </div>
        </div>
      )}

      {/* Decorative Elements */}
      <div className="decorative-elements">
        <div className="element pattern-1">🎎</div>
        <div className="element pattern-2">🏮</div>
        <div className="element pattern-3">🌸</div>
        <div className="element pattern-4">🎐</div>
      </div>
    </div>
  );
};

export default TraditionalPage;
