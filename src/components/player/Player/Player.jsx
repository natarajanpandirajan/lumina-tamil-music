import { useRef, useState } from 'react';
import { usePlayer } from '../../../context/PlayerContext';
import { useToast } from '../../ui/Toast/Toast';
import { formatDuration } from '../../../utils/formatTime';
import {
  PlayIcon, PauseIcon, SkipNextIcon, SkipPrevIcon,
  ShuffleIcon, RepeatIcon, HeartIcon, VolumeIcon,
  QueueIcon, DotsIcon, MusicNoteIcon
} from '../../ui/Icons/Icons';
import './Player.css';

export default function Player() {
  const {
    currentTrack, isPlaying, isShuffle, repeatMode,
    volume, isMuted, currentTime, duration, isLoading,
    togglePlay, skipNext, skipPrev, seek,
    toggleShuffle, cycleRepeat,
    setVolume, toggleMute,
    toggleLike, isLiked, toggleQueue,
  } = usePlayer();
  const { addToast } = useToast();
  const progressRef = useRef(null);
  const volumeRef = useRef(null);

  const progress = duration > 0 ? (currentTime / duration) * 100 : 0;

  const handleProgressClick = (e) => {
    const rect = progressRef.current.getBoundingClientRect();
    const ratio = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
    seek(ratio * duration);
  };

  const handleProgressKeyDown = (e) => {
    if (e.key === 'ArrowRight') seek(Math.min(duration, currentTime + 5));
    if (e.key === 'ArrowLeft') seek(Math.max(0, currentTime - 5));
  };

  const handleVolumeClick = (e) => {
    const rect = volumeRef.current.getBoundingClientRect();
    const ratio = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
    setVolume(ratio);
  };

  const handleLike = () => {
    if (!currentTrack) return;
    const liked = isLiked(currentTrack.id);
    toggleLike(currentTrack.id);
    addToast(liked ? 'Removed from Liked Songs' : 'Added to Liked Songs', liked ? 'default' : 'liked');
  };

  const volumeLevel = isMuted || volume === 0 ? 'mute' : volume < 0.5 ? 'low' : 'high';

  if (!currentTrack) return <PlayerEmpty />;

  return (
    <footer className="player" role="complementary" aria-label="Now playing">
      {/* Track info */}
      <div className="player-track">
        <div
          className="player-artwork"
          style={{ background: currentTrack.coverUrl ? 'transparent' : (currentTrack.album?.gradient || '#1a1a1a') }}
        >
          {currentTrack.coverUrl && (
            <img
              src={currentTrack.coverUrl}
              alt={currentTrack.title}
              className="player-artwork-cover"
            />
          )}
          {isPlaying && !currentTrack.coverUrl && <div className="player-artwork-spin" />}
        </div>
        <div className="player-meta">
          <p className="player-title truncate">{currentTrack.title}</p>
          <p className="player-artist truncate">{currentTrack.artist?.name}</p>
        </div>
        <button
          className={`player-like ${isLiked(currentTrack.id) ? 'liked' : ''}`}
          onClick={handleLike}
          aria-label={isLiked(currentTrack.id) ? 'Unlike' : 'Like'}
        >
          <HeartIcon size={16} filled={isLiked(currentTrack.id)} />
        </button>
      </div>

      {/* Center: Controls + Progress */}
      <div className="player-center">
        <div className="player-controls">
          <button
            className={`player-ctrl ${isShuffle ? 'active' : ''}`}
            onClick={toggleShuffle}
            aria-label="Shuffle"
          >
            <ShuffleIcon size={16} />
          </button>
          <button className="player-ctrl player-ctrl-skip" onClick={skipPrev} aria-label="Previous">
            <SkipPrevIcon size={20} />
          </button>
          <button
            className={`player-play-btn ${isLoading ? 'loading' : ''}`}
            onClick={togglePlay}
            aria-label={isPlaying ? 'Pause' : 'Play'}
          >
            {isLoading ? (
              <span className="player-spinner" />
            ) : isPlaying ? (
              <PauseIcon size={22} />
            ) : (
              <PlayIcon size={22} />
            )}
          </button>
          <button className="player-ctrl player-ctrl-skip" onClick={skipNext} aria-label="Next">
            <SkipNextIcon size={20} />
          </button>
          <button
            className={`player-ctrl ${repeatMode !== 'none' ? 'active' : ''}`}
            onClick={cycleRepeat}
            aria-label={`Repeat: ${repeatMode}`}
          >
            <RepeatIcon size={16} />
            {repeatMode === 'one' && <span className="repeat-one">1</span>}
          </button>
        </div>

        {/* Progress bar */}
        <div className="player-progress-row">
          <span className="player-time">{formatDuration(currentTime)}</span>
          <div
            className="player-progress"
            ref={progressRef}
            onClick={handleProgressClick}
            onKeyDown={handleProgressKeyDown}
            role="slider"
            aria-label="Playback position"
            aria-valuemin={0}
            aria-valuemax={Math.round(duration)}
            aria-valuenow={Math.round(currentTime)}
            tabIndex={0}
          >
            <div className="player-progress-bg" />
            <div className="player-progress-fill" style={{ width: `${progress}%` }} />
            <div className="player-progress-thumb" style={{ left: `${progress}%` }} />
          </div>
          <span className="player-time">{formatDuration(duration)}</span>
        </div>
      </div>

      {/* Right: Volume + Queue */}
      <div className="player-right">
        <button className="player-ctrl" onClick={toggleQueue} aria-label="Queue">
          <QueueIcon size={16} />
        </button>
        <div className="player-volume">
          <button
            className="player-ctrl"
            onClick={toggleMute}
            aria-label={isMuted ? 'Unmute' : 'Mute'}
          >
            <VolumeIcon size={16} level={volumeLevel} />
          </button>
          <div
            className="player-volume-track"
            ref={volumeRef}
            onClick={handleVolumeClick}
            role="slider"
            aria-label="Volume"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={Math.round((isMuted ? 0 : volume) * 100)}
          >
            <div className="player-volume-bg" />
            <div
              className="player-volume-fill"
              style={{ width: `${isMuted ? 0 : volume * 100}%` }}
            />
            <div
              className="player-volume-thumb"
              style={{ left: `${isMuted ? 0 : volume * 100}%` }}
            />
          </div>
        </div>
      </div>
    </footer>
  );
}

function PlayerEmpty() {
  return (
    <footer className="player player-empty">
      <div className="player-empty-content">
        <MusicNoteIcon size={18} />
        <span>Select a track to start listening</span>
      </div>
    </footer>
  );
}
