import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// Import images
import p1 from '../assets/p1.jpeg';
import p2 from '../assets/p2.jpeg';
import p3 from '../assets/p3.png';
import p4 from '../assets/p4.jpeg';
import p5 from '../assets/p5.jpeg';

const GeneralReveal = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showNextButton, setShowNextButton] = useState(false);
  const navigate = useNavigate();

  const images = [p1, p2, p3, p4, p5];
  
  // Unique pattern for General - show all images with messages between
  const steps = [
    { type: 'image', message: '' },
    { type: 'message', message: 'Where our journey began... 🌟' },
    { type: 'image', message: '' },
    { type: 'message', message: 'Every small moment mattered 💖' },
    { type: 'image', message: '' },
    { type: 'message', message: 'Building memories together 📸' },
    { type: 'image', message: '' },
    { type: 'message', message: 'Laughter and joy ✨' },
    { type: 'image', message: '' },
    { type: 'exit', message: "Traditional memories await..." }
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
      }, 3000);
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
      navigate('/traditional-intro');
    }
  };

  const currentStepData = steps[currentStep];

  return (
    <div className="screen bg-cream">
      {currentStepData.type === 'image' && (
        <>
          {/* Blurred background */}
          <img 
            src={images[currentImageIndex]} 
            alt="Background" 
            className="image-background"
          />
          
          {/* Main image */}
          <img 
            src={images[currentImageIndex]} 
            alt="Memory" 
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
            {currentStepData.type === 'exit' ? 'Explore Traditional' : 'Continue'}
          </button>
        )}
      </div>
      
      <div className="progress-indicator">
        <div className="progress-dot active"></div>
        <div className="progress-dot"></div>
        <div className="progress-dot"></div>
        <div className="progress-dot"></div>
      </div>
    </div>
  );
};

export default GeneralReveal;
