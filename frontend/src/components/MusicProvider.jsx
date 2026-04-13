import React, { createContext, useContext, useRef, useState, useEffect } from 'react';

// Import different video/audio files for variety
import birthdayVideo from '../assets/birthday.mp4';
import ved1Video from '../assets/ved1.mp4';
import ved2Video from '../assets/ved2.mp4';

// Music tracks for different sections
const musicTracks = {
  birthday: {
    url: birthdayVideo,
    title: 'Birthday Celebration',
    mood: 'Celebration'
  },
  ved1: {
    url: ved1Video,
    title: 'Traditional Memories',
    mood: 'Nostalgic'
  },
  ved2: {
    url: ved2Video,
    title: 'Modern Life',
    mood: 'Contemporary'
  }
};

// Create context for global music management
const MusicContext = createContext();

export const useGlobalMusic = () => {
  const context = useContext(MusicContext);
  if (!context) {
    throw new Error('useGlobalMusic must be used within MusicProvider');
  }
  return context;
};

export const MusicProvider = ({ children }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(0.3);
  const videoRef = useRef(null);
  const [hasStarted, setHasStarted] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(musicTracks.birthday);

  // Initialize video element once
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.volume = volume;
    }
  }, [volume]);

  const playMusic = () => {
    if (videoRef.current) {
      // Resume from current position if already started
      if (hasStarted && videoRef.current.currentTime > 0) {
        // Don't restart, just resume if paused
        if (videoRef.current.paused) {
          videoRef.current.play().catch(e => console.log('Music resume failed:', e));
        }
      } else {
        // First time playing
        videoRef.current.play().then(() => {
          setIsPlaying(true);
          setHasStarted(true);
        }).catch(e => console.log('Music play failed:', e));
      }
    }
  };

  const pauseMusic = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleVolumeChange = (newVolume) => {
    setVolume(newVolume);
    if (videoRef.current) {
      videoRef.current.volume = newVolume;
    }
  };

  const switchTrack = (trackName) => {
    const newTrack = musicTracks[trackName];
    if (newTrack && videoRef.current) {
      const wasPlaying = !videoRef.current.paused;
      videoRef.current.pause();
      videoRef.current.src = newTrack.url;
      setCurrentTrack(newTrack);
      setHasStarted(false);
      
      if (wasPlaying) {
        videoRef.current.play().then(() => {
          setIsPlaying(true);
          setHasStarted(true);
        }).catch(e => console.log('New track play failed:', e));
      }
    }
  };

  // Handle video ended event to loop
  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      const handleEnded = () => {
        video.currentTime = 0;
        video.play().catch(e => console.log('Loop play failed:', e));
      };
      video.addEventListener('ended', handleEnded);
      return () => video.removeEventListener('ended', handleEnded);
    }
  }, []);

  const value = {
    isPlaying,
    isMuted,
    volume,
    currentTrack,
    playMusic,
    pauseMusic,
    toggleMute,
    handleVolumeChange,
    switchTrack,
    videoRef
  };

  return (
    <MusicContext.Provider value={value}>
      {/* Hidden global video element for continuous music */}
      <video
        ref={videoRef}
        src={currentTrack.url}
        style={{ display: 'none' }}
        preload="auto"
        loop
        playsInline
      />
      {children}
    </MusicContext.Provider>
  );
};

export default MusicProvider;
