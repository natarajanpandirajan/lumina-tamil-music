import { useState } from 'react';
import { Link } from 'react-router-dom';
import { usePlayer } from '../../../context/PlayerContext';
import { getTracksByPlaylist } from '../../../services/musicData';
import { PlayIcon, PauseIcon } from '../../ui/Icons/Icons';
import './PlaylistCard.css';

export default function PlaylistCard({ playlist, size = 'md' }) {
  const { currentTrack, isPlaying, playTrack, togglePlay } = usePlayer();
  const [hovered, setHovered] = useState(false);
  const tracks = getTracksByPlaylist(playlist.id);

  const isCurrentPlaylist = tracks.some(t => t.id === currentTrack?.id);
  const showPause = isCurrentPlaylist && isPlaying;

  const handlePlay = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (isCurrentPlaylist) {
      togglePlay();
    } else if (tracks.length > 0) {
      playTrack(tracks[0], tracks, 0);
    }
  };

  return (
    <Link
      to={`/playlist/${playlist.id}`}
      className={`playlist-card playlist-card-${size}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      aria-label={playlist.title}
    >
      <div className="playlist-card-art">
        <div
          className="playlist-card-image"
          style={{ background: playlist.gradient }}
        />
        <div className={`playlist-card-overlay ${hovered || isCurrentPlaylist ? 'visible' : ''}`}>
          <button
            className={`playlist-play-btn ${isCurrentPlaylist ? 'active' : ''}`}
            onClick={handlePlay}
            aria-label={showPause ? 'Pause' : 'Play'}
          >
            {showPause ? <PauseIcon size={20} /> : <PlayIcon size={20} />}
          </button>
        </div>
        {playlist.isOfficial && (
          <span className="playlist-badge">Official</span>
        )}
      </div>
      <div className="playlist-card-info">
        <p className="playlist-card-title truncate">{playlist.title}</p>
        <p className="playlist-card-desc truncate">{playlist.description}</p>
      </div>
    </Link>
  );
}
