import { useRef, useCallback, useState, useEffect } from 'react';

// Web Audio API sound generation - no external files needed
const useAudioContext = () => {
  const [audioContext, setAudioContext] = useState(null);
  const [isInitialized, setIsInitialized] = useState(false);

  const initAudio = useCallback(() => {
    if (!audioContext) {
      const ctx = new (window.AudioContext || window.webkitAudioContext)();
      setAudioContext(ctx);
      setIsInitialized(true);
      return ctx;
    }
    if (audioContext.state === 'suspended') {
      audioContext.resume();
    }
    setIsInitialized(true);
    return audioContext;
  }, [audioContext]);

  return { audioContext, isInitialized, initAudio };
};

// Generate tones using Web Audio API
const playTone = (audioContext, frequency, duration, type = 'sine', volume = 0.3) => {
  if (!audioContext) return;
  
  const oscillator = audioContext.createOscillator();
  const gainNode = audioContext.createGain();
  
  oscillator.connect(gainNode);
  gainNode.connect(audioContext.destination);
  
  oscillator.frequency.value = frequency;
  oscillator.type = type;
  
  gainNode.gain.setValueAtTime(volume, audioContext.currentTime);
  gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + duration);
  
  oscillator.start(audioContext.currentTime);
  oscillator.stop(audioContext.currentTime + duration);
};

// Sound effect patterns
const soundPatterns = {
  celebration: (ctx) => {
    playTone(ctx, 523.25, 0.1, 'sine', 0.3);
    setTimeout(() => playTone(ctx, 659.25, 0.1, 'sine', 0.3), 100);
    setTimeout(() => playTone(ctx, 783.99, 0.1, 'sine', 0.3), 200);
    setTimeout(() => playTone(ctx, 1046.50, 0.3, 'sine', 0.3), 300);
  },
  
  slide: (ctx) => {
    playTone(ctx, 800, 0.15, 'triangle', 0.15);
    setTimeout(() => playTone(ctx, 400, 0.1, 'triangle', 0.1), 50);
  },
  
  success: (ctx) => {
    playTone(ctx, 523.25, 0.15, 'sine', 0.3);
    setTimeout(() => playTone(ctx, 659.25, 0.15, 'sine', 0.3), 150);
    setTimeout(() => playTone(ctx, 783.99, 0.15, 'sine', 0.3), 300);
    setTimeout(() => playTone(ctx, 1046.50, 0.4, 'sine', 0.4), 450);
  },
  
  whoosh: (ctx) => {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);
    
    osc.frequency.setValueAtTime(600, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(100, ctx.currentTime + 0.3);
    
    gain.gain.setValueAtTime(0.2, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.3);
    
    osc.start(ctx.currentTime);
    osc.stop(ctx.currentTime + 0.3);
  },
  
  click: (ctx) => {
    playTone(ctx, 1000, 0.05, 'square', 0.1);
  },
  
  sparkle: (ctx) => {
    playTone(ctx, 1200, 0.1, 'sine', 0.2);
    setTimeout(() => playTone(ctx, 1600, 0.15, 'sine', 0.2), 50);
  }
};

// Hook to play sound effects
export const useSoundEffects = () => {
  const { audioContext, isInitialized, initAudio } = useAudioContext();
  const [canPlay, setCanPlay] = useState(false);

  useEffect(() => {
    const handleFirstClick = () => {
      const ctx = initAudio();
      setCanPlay(true);
      document.removeEventListener('click', handleFirstClick);
    };
    
    document.addEventListener('click', handleFirstClick);
    return () => document.removeEventListener('click', handleFirstClick);
  }, [initAudio]);

  const playSound = useCallback((soundName) => {
    const ctx = audioContext || initAudio();
    if (!ctx) return;
    
    if (ctx.state === 'suspended') {
      ctx.resume();
    }
    
    const pattern = soundPatterns[soundName];
    if (pattern) {
      pattern(ctx);
    }
  }, [audioContext, initAudio]);

  return { playSound, isInitialized, canPlay };
};

// Initialize on component mount
export const preloadSounds = () => {
  // Sounds are generated programmatically, no preloading needed
};

export default { useSoundEffects, preloadSounds };
