import React from 'react';
import { useGlobalMusic } from './MusicProvider';

const GlobalMusicControls = ({ section = 'intro' }) => {
  const { 
    isPlaying, 
    isMuted, 
    volume, 
    playMusic, 
    pauseMusic, 
    toggleMute, 
    handleVolumeChange 
  } = useGlobalMusic();

  return (
    <div className="music-player">
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
              onChange={(e) => handleVolumeChange(parseFloat(e.target.value))}
              className="volume-slider"
            />
            <span className="volume-label">{Math.round(volume * 100)}%</span>
          </div>
        )}
        
        <div className="track-info">
          <span className="track-mood">Birthday Video Music</span>
        </div>
      </div>
    </div>
  );
};

export default GlobalMusicControls;
