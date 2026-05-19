import { useState } from 'react';
import { usePlayer } from '../../../context/PlayerContext';
import { getArtistById, getTracksByAlbum } from '../../../services/musicData';
import { PlayIcon, PauseIcon } from '../../ui/Icons/Icons';
import './AlbumCard.css';

export default function AlbumCard({ album, size = 'md', onClick }) {
  const { currentTrack, isPlaying, playTrack, togglePlay } = usePlayer();
  const [hovered, setHovered] = useState(false);
  const artist = getArtistById(album.artistId);
  const albumTracks = getTracksByAlbum(album.id);

  const isCurrentAlbum = currentTrack?.albumId === album.id;
  const showPause = isCurrentAlbum && isPlaying;

  const handlePlay = (e) => {
    e.stopPropagation();
    if (isCurrentAlbum) {
      togglePlay();
    } else if (albumTracks.length > 0) {
      playTrack(albumTracks[0], albumTracks, 0);
    }
  };

  return (
    <div
      className={`album-card album-card-${size}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && onClick?.()}
      aria-label={`${album.title} by ${artist?.name}`}
    >
      <div className="album-card-art">
        <div
          className="album-card-image"
          style={{ background: album.gradient }}
        />
        <div className={`album-card-overlay ${hovered || isCurrentAlbum ? 'visible' : ''}`}>
          <button
            className={`album-play-btn ${isCurrentAlbum ? 'album-play-btn-active' : ''}`}
            onClick={handlePlay}
            aria-label={showPause ? 'Pause' : 'Play'}
          >
            {showPause ? <PauseIcon size={22} /> : <PlayIcon size={22} />}
          </button>
        </div>
        {isCurrentAlbum && isPlaying && (
          <div className="album-playing-indicator">
            <span /><span /><span />
          </div>
        )}
      </div>
      <div className="album-card-info">
        <p className="album-card-title truncate">{album.title}</p>
        <p className="album-card-artist truncate">{artist?.name} · {album.year}</p>
      </div>
    </div>
  );
}
