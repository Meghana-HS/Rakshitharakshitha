import React, { useState, useRef, useEffect } from 'react';

// Import different video/audio files for variety
import birthdayVideo from '../assets/birthday.mp4';
import ved1Video from '../assets/ved1.mp4';
import ved2Video from '../assets/ved2.mp4';

// Music playlist - different tracks for different sections
const musicPlaylist = {
  intro: {
    // Birthday video audio for intro
    url: birthdayVideo,
    title: 'Birthday Celebration',
    mood: 'Celebration'
  },
  classic: {
    // Use ved1 for traditional/classic section
    url: ved1Video,
    title: 'Traditional Memories',
    mood: 'Nostalgic'
  },
  modern: {
    // Use ved2 for modern section
    url: ved2Video,
    title: 'Modern Life',
    mood: 'Contemporary'
  },
  bestii: {
    // Birthday video for bestii section
    url: birthdayVideo,
    title: 'Special Moments',
    mood: 'Heartfelt'
  },
  family: {
    // Use ved1 for family section
    url: ved1Video,
    title: 'Family Love',
    mood: 'Warm'
  },
  friends: {
    // Use ved2 for friends section
    url: ved2Video,
    title: 'Friendship Memories',
    mood: 'Fun'
  },
  birthday: {
    // Birthday video for the actual birthday section
    url: birthdayVideo,
    title: 'Birthday Celebration',
    mood: 'Celebration'
  }
};

const BackgroundMusic = ({ section = 'intro', isPlaying = true }) => {
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(0.3);
  const [currentTrack, setCurrentTrack] = useState(musicPlaylist[section]);
  const [isInitialized, setIsInitialized] = useState(false);
  const audioRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    // Only update track if it's different (for continuity)
    const newTrack = musicPlaylist[section];
    if (newTrack.url !== currentTrack.url) {
      setCurrentTrack(newTrack);
    }
  }, [section, currentTrack.url]);

  useEffect(() => {
    // Handle video element for video files (birthday.mp4) - primary for MP4
    if (videoRef.current) {
      videoRef.current.volume = volume;
      if (isPlaying && !isMuted) {
        // Only play if not already playing to prevent restart
        if (videoRef.current.paused || videoRef.current.ended) {
          videoRef.current.play().catch(e => console.log('Video play failed:', e));
        }
        setIsInitialized(true);
      } else {
        videoRef.current.pause();
      }
    }
    
    // Handle audio element as fallback
    if (audioRef.current) {
      audioRef.current.volume = volume;
      if (isPlaying && !isMuted) {
        // Only play if video is not available
        if (!isInitialized && (audioRef.current.paused || audioRef.current.ended)) {
          audioRef.current.play().catch(e => console.log('Audio play failed:', e));
        }
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying, isMuted, volume, isInitialized]);

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  const handleVolumeChange = (e) => {
    setVolume(parseFloat(e.target.value));
  };

  return (
    <div className="music-player">
      <audio
        ref={audioRef}
        src={currentTrack.url}
        loop
        preload="auto"
      />
      
      {/* Hidden video element to ensure video files play audio */}
      <video
        ref={videoRef}
        src={currentTrack.url}
        loop
        muted={!isPlaying || isMuted}
        style={{ display: 'none' }}
        preload="auto"
      />
      
      <div className="music-controls">
        <button 
          className="music-toggle-btn"
          onClick={toggleMute}
          title={isMuted ? 'Unmute Music' : 'Mute Music'}
        >
          {isMuted ? '🔇' : '🎵'}
        </button>
        
        {!isMuted && (
          <div className="volume-control">
            <input
              type="range"
              min="0"
              max="1"
              step="0.1"
              value={volume}
              onChange={handleVolumeChange}
              className="volume-slider"
            />
            <span className="volume-label">{Math.round(volume * 100)}%</span>
          </div>
        )}
        
        <div className="track-info">
          <span className="track-mood">{currentTrack.mood}</span>
        </div>
      </div>
    </div>
  );
};

export default BackgroundMusic;
