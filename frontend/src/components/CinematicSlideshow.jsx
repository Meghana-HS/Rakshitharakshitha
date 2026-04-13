import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

// Import all photos
import r1 from '../assets/r1.jpeg';
import r2 from '../assets/r2.jpeg';
import r3 from '../assets/r3.jpeg';
import r4 from '../assets/r4.jpeg';
import r5 from '../assets/r5.jpeg';
import r6 from '../assets/r6.jpeg';
import r7 from '../assets/r7.jpeg';
import r8 from '../assets/r8.jpeg';
import r9 from '../assets/r9.jpeg';
import r10 from '../assets/r10.jpeg';
import r11 from '../assets/r11.jpeg';
import r12 from '../assets/r12.jpeg';
import r13 from '../assets/r13.jpeg';
import r14 from '../assets/r14.jpeg';
import r15 from '../assets/r15.jpeg';

import mod1 from '../assets/mod1.jpeg';
import mod2 from '../assets/mod2.jpeg';
import mod3 from '../assets/mod3.jpeg';
import mod4 from '../assets/mod4.jpeg';
import mod5 from '../assets/mod5.jpeg';
import mod6 from '../assets/mod6.jpeg';
import mod7 from '../assets/mod7.jpeg';
import mod8 from '../assets/mod8.jpeg';
import mod9 from '../assets/mod9.jpeg';

import a1 from '../assets/a1.jpeg';
import a2 from '../assets/a2.jpeg';
import a3 from '../assets/a3.jpeg';
import a4 from '../assets/a4.jpeg';
import a5 from '../assets/a5.jpeg';

import fam1 from '../assets/fam1.jpeg';
import fam2 from '../assets/fam2.jpeg';
import fam3 from '../assets/fam3.jpeg';
import fam4 from '../assets/fam4.jpeg';
import fam5 from '../assets/fam5.jpeg';
import fam6 from '../assets/fam6.jpeg';
import fam7 from '../assets/fam7.jpeg';
import fam8 from '../assets/fam8.jpeg';
import fam9 from '../assets/fam9.jpeg';
import fam10 from '../assets/fam10.jpeg';
import fam11 from '../assets/fam11.jpeg';
import fam12 from '../assets/fam12.jpeg';
import fam13 from '../assets/fam13.jpeg';
import fam14 from '../assets/fam14.jpeg';
import fam15 from '../assets/fam15.jpeg';

import f1 from '../assets/f1.jpeg';
import f2 from '../assets/f2.jpeg';
import f3 from '../assets/f3.jpeg';
import f4 from '../assets/f4.jpeg';
import f5 from '../assets/f5.jpeg';
import f6 from '../assets/f6.jpeg';
import f7 from '../assets/f7.jpeg';
import f8 from '../assets/f8.jpeg';
import f9 from '../assets/f9.jpeg';
import f10 from '../assets/f10.jpeg';

import ved1 from '../assets/ved1.mp4';
import ved2 from '../assets/ved2.mp4';

const CinematicSlideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showTitle, setShowTitle] = useState(true);
  const navigate = useNavigate();
  const videoRef = useRef(null);

  // All media in order
  const allMedia = [
    { type: 'image', src: r1, title: 'Classic Memories', subtitle: 'Back when life was simple' },
    { type: 'image', src: r2, title: 'Classic Memories', subtitle: 'Back when life was simple' },
    { type: 'image', src: r3, title: 'Classic Memories', subtitle: 'Back when life was simple' },
    { type: 'image', src: r4, title: 'Classic Memories', subtitle: 'Back when life was simple' },
    { type: 'image', src: r5, title: 'Classic Memories', subtitle: 'Back when life was simple' },
    { type: 'image', src: mod1, title: 'Modern Life', subtitle: 'Now we pose better' },
    { type: 'image', src: mod2, title: 'Modern Life', subtitle: 'Now we pose better' },
    { type: 'image', src: mod3, title: 'Modern Life', subtitle: 'Now we pose better' },
    { type: 'image', src: mod4, title: 'Modern Life', subtitle: 'Now we pose better' },
    { type: 'image', src: mod5, title: 'Modern Life', subtitle: 'Now we pose better' },
    { type: 'image', src: a1, title: 'Best Friend Forever', subtitle: 'My forever best friend' },
    { type: 'image', src: a2, title: 'Best Friend Forever', subtitle: 'My forever best friend' },
    { type: 'image', src: a3, title: 'Best Friend Forever', subtitle: 'My forever best friend' },
    { type: 'image', src: a4, title: 'Best Friend Forever', subtitle: 'My forever best friend' },
    { type: 'image', src: a5, title: 'Best Friend Forever', subtitle: 'My forever best friend' },
    { type: 'image', src: fam1, title: 'Family', subtitle: 'Where love is unlimited' },
    { type: 'image', src: fam2, title: 'Family', subtitle: 'Where love is unlimited' },
    { type: 'image', src: fam3, title: 'Family', subtitle: 'Where love is unlimited' },
    { type: 'image', src: fam4, title: 'Family', subtitle: 'Where love is unlimited' },
    { type: 'image', src: fam5, title: 'Family', subtitle: 'Where love is unlimited' },
    { type: 'image', src: f1, title: 'Friends', subtitle: 'Make nonsense feel like memories' },
    { type: 'image', src: f2, title: 'Friends', subtitle: 'Make nonsense feel like memories' },
    { type: 'image', src: f3, title: 'Friends', subtitle: 'Make nonsense feel like memories' },
    { type: 'image', src: f4, title: 'Friends', subtitle: 'Make nonsense feel like memories' },
    { type: 'image', src: f5, title: 'Friends', subtitle: 'Make nonsense feel like memories' },
    { type: 'video', src: ved1, title: 'Birthday Videos', subtitle: 'Forever young at heart' },
    { type: 'video', src: ved2, title: 'Birthday Videos', subtitle: 'Forever young at heart' }
  ];

  const currentMedia = allMedia[currentIndex];
  const totalMedia = allMedia.length;

  useEffect(() => {
    if (!isPlaying) return;

    // Hide title after 3 seconds
    const titleTimer = setTimeout(() => {
      setShowTitle(false);
    }, 3000);

    // Auto-advance every 4 seconds
    const mediaTimer = setInterval(() => {
      setCurrentIndex(prev => {
        if (prev < totalMedia - 1) {
          return prev + 1;
        } else {
          setIsPlaying(false);
          return prev;
        }
      });
    }, 4000);

    return () => {
      clearTimeout(titleTimer);
      clearInterval(mediaTimer);
    };
  }, [isPlaying, currentIndex, totalMedia]);

  const handlePlay = () => {
    setIsPlaying(true);
    setShowTitle(true);
  };

  const handlePause = () => {
    setIsPlaying(false);
  };

  const handleNext = () => {
    if (currentIndex < totalMedia - 1) {
      setCurrentIndex(currentIndex + 1);
      setShowTitle(true);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setShowTitle(true);
    }
  };

  return (
    <div style={{
      width: '100vw',
      height: '100vh',
      background: 'black',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Media Display */}
      <div style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        {currentMedia.type === 'video' ? (
          <video
            ref={videoRef}
            src={currentMedia.src}
            autoPlay
            muted
            style={{
              maxWidth: '100%',
              maxHeight: '100%',
              objectFit: 'contain'
            }}
            onEnded={handleNext}
          />
        ) : (
          <img
            src={currentMedia.src}
            alt={currentMedia.title}
            style={{
              maxWidth: '100%',
              maxHeight: '100%',
              objectFit: 'contain'
            }}
          />
        )}
      </div>

      {/* Title Overlay */}
      {showTitle && (
        <div style={{
          position: 'absolute',
          top: '20px',
          left: '50%',
          transform: 'translateX(-50%)',
          background: 'rgba(0, 0, 0, 0.8)',
          color: 'white',
          padding: '20px 30px',
          borderRadius: '10px',
          textAlign: 'center',
          zIndex: 10
        }}>
          <h2 style={{ margin: '0 0 10px 0', fontSize: '2rem' }}>
            {currentMedia.title}
          </h2>
          <p style={{ margin: '0', fontSize: '1.2rem' }}>
            {currentMedia.subtitle}
          </p>
        </div>
      )}

      {/* Controls */}
      <div style={{
        position: 'absolute',
        bottom: '20px',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        gap: '10px',
        zIndex: 10
      }}>
        {!isPlaying ? (
          <button
            onClick={handlePlay}
            style={{
              background: '#007bff',
              color: 'white',
              border: 'none',
              padding: '10px 20px',
              borderRadius: '5px',
              cursor: 'pointer'
            }}
          >
            ▶ Play
          </button>
        ) : (
          <button
            onClick={handlePause}
            style={{
              background: '#dc3545',
              color: 'white',
              border: 'none',
              padding: '10px 20px',
              borderRadius: '5px',
              cursor: 'pointer'
            }}
          >
            ⏸ Pause
          </button>
        )}

        <button
          onClick={handlePrevious}
          disabled={currentIndex === 0}
          style={{
            background: currentIndex === 0 ? '#ccc' : '#6c757d',
            color: 'white',
            border: 'none',
            padding: '10px 20px',
            borderRadius: '5px',
            cursor: currentIndex === 0 ? 'not-allowed' : 'pointer'
          }}
        >
          ⏮ Previous
        </button>

        <button
          onClick={handleNext}
          disabled={currentIndex === totalMedia - 1}
          style={{
            background: currentIndex === totalMedia - 1 ? '#ccc' : '#6c757d',
            color: 'white',
            border: 'none',
            padding: '10px 20px',
            borderRadius: '5px',
            cursor: currentIndex === totalMedia - 1 ? 'not-allowed' : 'pointer'
          }}
        >
          ⏭ Next
        </button>

        <button
          onClick={() => navigate('/')}
          style={{
            background: '#28a745',
            color: 'white',
            border: 'none',
            padding: '10px 20px',
            borderRadius: '5px',
            cursor: 'pointer'
          }}
        >
          ✕ Exit
        </button>
      </div>

      {/* Progress */}
      <div style={{
        position: 'absolute',
        bottom: '80px',
        left: '20px',
        right: '20px',
        height: '4px',
        background: 'rgba(255, 255, 255, 0.3)',
        borderRadius: '2px',
        zIndex: 10
      }}>
        <div style={{
          width: `${((currentIndex + 1) / totalMedia) * 100}%`,
          height: '100%',
          background: '#007bff',
          borderRadius: '2px',
          transition: 'width 0.3s ease'
        }} />
      </div>

      {/* Counter */}
      <div style={{
        position: 'absolute',
        top: '20px',
        right: '20px',
        background: 'rgba(0, 0, 0, 0.8)',
        color: 'white',
        padding: '10px 15px',
        borderRadius: '5px',
        zIndex: 10
      }}>
        {currentIndex + 1} / {totalMedia}
      </div>
    </div>
  );
};

export default CinematicSlideshow;
