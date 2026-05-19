import { useState } from 'react';
import { usePlayer } from '../../../context/PlayerContext';
import { tracks, getTracksByAlbum, albums } from '../../../services/musicData';
import { PlayIcon, PauseIcon } from '../../ui/Icons/Icons';
import './ArtistCard.css';

export default function ArtistCard({ artist }) {
  const { currentTrack, isPlaying, playTrack, togglePlay } = usePlayer();
  const [hovered, setHovered] = useState(false);

  const artistTracks = tracks.filter(t => t.artistId === artist.id);
  const isCurrentArtist = currentTrack?.artistId === artist.id;

  const handlePlay = (e) => {
    e.stopPropagation();
    if (isCurrentArtist) {
      togglePlay();
    } else if (artistTracks.length > 0) {
      playTrack(artistTracks[0], artistTracks, 0);
    }
  };

  return (
    <div
      className="artist-card"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="artist-card-art">
        <div
          className="artist-card-image"
          style={{ background: artist.gradient }}
        />
        {(hovered || isCurrentArtist) && (
          <button
            className={`artist-play-btn ${isCurrentArtist && isPlaying ? 'active' : ''}`}
            onClick={handlePlay}
            aria-label={isCurrentArtist && isPlaying ? 'Pause' : 'Play'}
          >
            {isCurrentArtist && isPlaying ? <PauseIcon size={20} /> : <PlayIcon size={20} />}
          </button>
        )}
        {artist.verified && <span className="artist-verified" aria-label="Verified">✓</span>}
      </div>
      <div className="artist-card-info">
        <p className="artist-card-name truncate">{artist.name}</p>
        <p className="artist-card-genre truncate">{artist.genre}</p>
      </div>
    </div>
  );
}
