import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// Import images
import sis1 from '../assets/sis1.jpeg';
import sis2 from '../assets/sis2.png';

const SisterReveal = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showNextButton, setShowNextButton] = useState(false);
  const navigate = useNavigate();

  const images = [sis1, sis2];
  
  // Unique pattern for Sister - emotional and heartfelt
  const steps = [
    { type: 'image', message: '' },
    { type: 'message', message: 'Bound by heart, connected forever 💕' },
    { type: 'image', message: '' },
    { type: 'exit', message: "One final surprise..." }
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
      }, 4000);
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
      navigate('/surprise-twist');
    }
  };

  const currentStepData = steps[currentStep];

  return (
    <div className="screen bg-emotional">
      {currentStepData.type === 'image' && (
        <>
          {/* Blurred background */}
          <img 
            src={images[currentImageIndex]} 
            alt="Background" 
            className="image-background"
          />
          
          {/* Main image with glow effect */}
          <img 
            src={images[currentImageIndex]} 
            alt="Sister Moment" 
            className="fullscreen-image fade-in glow-pulse"
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
          <h1 className="emotional-message text-reveal glow-pulse">
            {currentStepData.message}
          </h1>
        )}
        
        {currentStepData.type === 'exit' && (
          <h1 className="emotional-subtitle fade-in glow-pulse">
            {currentStepData.message}
          </h1>
        )}
        
        {showNextButton && (currentStepData.type === 'message' || currentStepData.type === 'exit') && (
          <button 
            className="gift-btn fade-in-up glow-pulse"
            onClick={handleNext}
          >
            {currentStepData.type === 'exit' ? 'Final Surprise' : 'Continue'}
          </button>
        )}
      </div>
      
      <div className="progress-indicator">
        <div className="progress-dot"></div>
        <div className="progress-dot"></div>
        <div className="progress-dot"></div>
        <div className="progress-dot active"></div>
      </div>
    </div>
  );
};

export default SisterReveal;
