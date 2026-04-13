import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './SisterPage.css';

// Import sister photos
import sis1 from '../assets/sis1.jpeg';
import sis2 from '../assets/sis2.png';
import sis3 from '../assets/sis3.jpeg';
import sis4 from '../assets/sis4.jpeg';
import sis5 from '../assets/sis5.png';
import sis6 from '../assets/sis6.jpeg';
import sis7 from '../assets/sis7.jpeg';
import sis8 from '../assets/sis8.jpeg';
import sis9 from '../assets/sis9.jpeg';
import sis10 from '../assets/sis10.jpeg';
import sis11 from '../assets/sis11.png';
import sis12 from '../assets/sis12.jpeg';
import sis13 from '../assets/sis13.png';
import sis14 from '../assets/sis14.jpeg';
import sis15 from '../assets/sis15.png';
import sis16 from '../assets/sis16.jpeg';

const SisterPage = () => {
  const [showContent, setShowContent] = useState(false);
  const [visiblePhotos, setVisiblePhotos] = useState([]);
  const [showNextButton, setShowNextButton] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const navigate = useNavigate();

  const sisterPhotos = [
    { id: 1, src: sis1, caption: "Sister Moment #1" },
    { id: 2, src: sis2, caption: "Sister Moment #2" },
    { id: 3, src: sis3, caption: "Sister Moment #3" },
    { id: 4, src: sis4, caption: "Sister Moment #4" },
    { id: 5, src: sis5, caption: "Sister Moment #5" },
    { id: 6, src: sis6, caption: "Sister Moment #6" },
    { id: 7, src: sis7, caption: "Sister Moment #7" },
    { id: 8, src: sis8, caption: "Sister Moment #8" },
    { id: 9, src: sis9, caption: "Sister Moment #9" },
    { id: 10, src: sis10, caption: "Sister Moment #10" },
    { id: 11, src: sis11, caption: "Sister Moment #11" },
    { id: 12, src: sis12, caption: "Sister Moment #12" },
    { id: 13, src: sis13, caption: "Sister Moment #13" },
    { id: 14, src: sis14, caption: "Sister Moment #14" },
    { id: 15, src: sis15, caption: "Sister Moment #15" },
    { id: 16, src: sis16, caption: "Sister Moment #16" }
  ];

  useEffect(() => {
    setShowContent(true);
    
    // Reveal photos with emotional timing
    const revealPhotos = () => {
      sisterPhotos.forEach((photo, index) => {
        setTimeout(() => {
          setVisiblePhotos(prev => [...prev, photo.id]);
          
          if (index === sisterPhotos.length - 1) {
            setTimeout(() => {
              setShowNextButton(true);
            }, 1000);
          }
        }, index * 200);
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
    navigate('/surprise');
  };

  return (
    <div className="sister-page">
      {/* Emotional Background */}
      <div className="emotional-background"></div>
      
      {/* Header */}
      <div className={`page-header ${showContent ? 'emotional-fade' : ''}`}>
        <h1 className="page-title">Sister Love</h1>
        <p className="page-subtitle">The most precious bond of all</p>
        <div className="heart-divider">
          <span>💖</span>
          <span>💕</span>
          <span>💗</span>
          <span>💝</span>
          <span>💞</span>
        </div>
      </div>

      {/* Photo Grid */}
      <div className="photo-container">
        <div className="sister-grid">
          {sisterPhotos.map((photo, index) => (
            <div
              key={photo.id}
              className={`sister-photo ${visiblePhotos.includes(photo.id) ? 'visible' : ''}`}
              style={{ animationDelay: `${index * 0.2}s` }}
              onClick={() => handlePhotoClick(photo)}
            >
              <div className="sister-card">
                <div className="photo-frame">
                  <img
                    src={photo.src}
                    alt={photo.caption}
                    className="sister-img"
                  />
                  <div className="heart-overlay">
                    <span>💕</span>
                  </div>
                </div>
                <div className="card-content">
                  <h4>{photo.caption}</h4>
                  <div className="love-indicator">
                    <span>❤️</span>
                    <span>#{photo.id}</span>
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
            className="emotional-button"
          >
            <span className="button-text">Unlock Final Surprise 🎁</span>
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
              <p>Sister Memory #{selectedPhoto.id}</p>
            </div>
          </div>
        </div>
      )}

      {/* Emotional Decorations */}
      <div className="emotional-decorations">
        <div className="decoration heart-1">💖</div>
        <div className="decoration heart-2">💕</div>
        <div className="decoration heart-3">💗</div>
        <div className="decoration heart-4">💝</div>
        <div className="decoration heart-5">💞</div>
        <div className="decoration heart-6">❤️</div>
      </div>
    </div>
  );
};

export default SisterPage;
