import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// Import images
import trd1 from '../assets/trd1.png';
import trd2 from '../assets/trd2.png';

const TraditionalReveal = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showNextButton, setShowNextButton] = useState(false);
  const navigate = useNavigate();

  const images = [trd1, trd2];
  
  // Unique pattern for Traditional - elegant and graceful
  const steps = [
    { type: 'image', message: '' },
    { type: 'message', message: 'Grace in every tradition 🌸' },
    { type: 'image', message: '' },
    { type: 'exit', message: "Friendship memories await..." }
  ];

  useEffect(() => {
    // Auto-progress for images, but show button for messages and exit
    if (steps[currentStep].type === 'image') {
      const timer = setTimeout(() => {
        if (currentImageIndex < images.length - 1) {
          setCurrentImageIndex(prev => prev + 1);
        } else {
          setCurrentStep(prev => prev + 1);
          if (steps[currentStep + 1]?.type === 'image') {
            setCurrentImageIndex(0);
          }
        }
      }, 3500);
      return () => clearTimeout(timer);
    } else {
      // For messages and exit, show next button after a delay
      const timer = setTimeout(() => {
        setShowNextButton(true);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [currentStep, currentImageIndex, steps, images.length]);

  const handleNext = () => {
    setShowNextButton(false);
    if (currentStep < steps.length - 1) {
      setCurrentStep(prev => prev + 1);
      if (steps[currentStep + 1]?.type === 'image') {
        setCurrentImageIndex(0);
      }
    } else {
      navigate('/friends-intro');
    }
  };

  const currentStepData = steps[currentStep];

  return (
    <div className="screen bg-gold">
      {currentStepData.type === 'image' && (
        <>
          {/* Blurred background */}
          <img 
            src={images[currentImageIndex]} 
            alt="Background" 
            className="image-background"
          />
          
          {/* Main image with slow zoom */}
          <img 
            src={images[currentImageIndex]} 
            alt="Traditional Moment" 
            className="fullscreen-image fade-in slow-zoom"
          />
          
          {/* Image counter */}
          <div className="content-overlay" style={{ bottom: '100px' }}>
            <p style={{ opacity: 0.7, fontSize: '1rem' }}>
              {currentImageIndex + 1} / {images.length}
            </p>
          </div>
        </>
      )}
      
      <div className="content-overlay">
        {currentStepData.type === 'message' && (
          <h1 className="emotional-message text-reveal">
            {currentStepData.message}
          </h1>
        )}
        
        {currentStepData.type === 'exit' && (
          <h1 className="emotional-subtitle fade-in">
            {currentStepData.message}
          </h1>
        )}
        
        {showNextButton && (currentStepData.type === 'message' || currentStepData.type === 'exit') && (
          <button 
            className="gift-btn fade-in-up"
            onClick={handleNext}
          >
            {currentStepData.type === 'exit' ? 'Explore Friends' : 'Continue'}
          </button>
        )}
      </div>
      
      <div className="progress-indicator">
        <div className="progress-dot"></div>
        <div className="progress-dot active"></div>
        <div className="progress-dot"></div>
        <div className="progress-dot"></div>
      </div>
    </div>
  );
};

export default TraditionalReveal;
