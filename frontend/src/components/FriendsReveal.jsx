import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// Import images
import mine1 from '../assets/mine1.jpeg';
import mine2 from '../assets/mine2.jpeg';

const FriendsReveal = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showNextButton, setShowNextButton] = useState(false);
  const navigate = useNavigate();

  const images = [mine1, mine2];
  
  // Unique pattern for Friends - energetic and fun
  const steps = [
    { type: 'image', message: '' },
    { type: 'message', message: 'Partners in crime! 😄' },
    { type: 'image', message: '' },
    { type: 'exit', message: "Sister love awaits..." }
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
      }, 2500);
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
      navigate('/sister-intro');
    }
  };

  const currentStepData = steps[currentStep];

  return (
    <div className="screen bg-sky">
      {currentStepData.type === 'image' && (
        <>
          {/* Blurred background */}
          <img 
            src={images[currentImageIndex]} 
            alt="Background" 
            className="image-background"
          />
          
          {/* Main image with bounce effect */}
          <img 
            src={images[currentImageIndex]} 
            alt="Friends Moment" 
            className="fullscreen-image fade-in bounce-gentle"
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
          <h1 className="emotional-message text-reveal bounce-gentle">
            {currentStepData.message}
          </h1>
        )}
        
        {currentStepData.type === 'exit' && (
          <h1 className="emotional-subtitle fade-in bounce-gentle">
            {currentStepData.message}
          </h1>
        )}
        
        {showNextButton && (currentStepData.type === 'message' || currentStepData.type === 'exit') && (
          <button 
            className="gift-btn fade-in-up bounce-gentle"
            onClick={handleNext}
          >
            {currentStepData.type === 'exit' ? 'Explore Sister' : 'Continue'}
          </button>
        )}
      </div>
      
      <div className="progress-indicator">
        <div className="progress-dot"></div>
        <div className="progress-dot"></div>
        <div className="progress-dot active"></div>
        <div className="progress-dot"></div>
      </div>
    </div>
  );
};

export default FriendsReveal;
