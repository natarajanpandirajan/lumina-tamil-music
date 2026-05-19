import { useState } from 'react';
import { usePlayer } from '../../../context/PlayerContext';
import { useToast } from '../../ui/Toast/Toast';
import { getArtistById, getAlbumById, formatPlays } from '../../../services/musicData';
import { formatDuration } from '../../../utils/formatTime';
import { PlayIcon, PauseIcon, HeartIcon, DotsIcon, Equalizer } from '../../ui/Icons/Icons';
import './TrackList.css';

export default function TrackList({ tracks, showIndex = true, showAlbum = false, queue }) {
  const { currentTrack, isPlaying, playTrack, togglePlay, toggleLike, isLiked } = usePlayer();
  const { addToast } = useToast();

  const handlePlay = (track, index) => {
    const q = queue || tracks;
    if (currentTrack?.id === track.id) {
      togglePlay();
    } else {
      playTrack(track, q, index);
    }
  };

  const handleLike = (e, track) => {
    e.stopPropagation();
    const liked = isLiked(track.id);
    toggleLike(track.id);
    addToast(
      liked ? 'Removed from Liked Songs' : 'Added to Liked Songs',
      liked ? 'default' : 'liked'
    );
  };

  return (
    <div className="track-list" role="list">
      {tracks.map((track, index) => (
        <TrackRow
          key={track.id}
          track={track}
          index={index}
          showIndex={showIndex}
          showAlbum={showAlbum}
          isActive={currentTrack?.id === track.id}
          isPlaying={isPlaying && currentTrack?.id === track.id}
          isLiked={isLiked(track.id)}
          onPlay={() => handlePlay(track, index)}
          onLike={(e) => handleLike(e, track)}
        />
      ))}
    </div>
  );
}

function TrackRow({ track, index, showIndex, showAlbum, isActive, isPlaying, isLiked, onPlay, onLike }) {
  const [hovered, setHovered] = useState(false);
  const artist = getArtistById(track.artistId);
  const album = getAlbumById(track.albumId);

  return (
    <div
      className={`track-row ${isActive ? 'track-row-active' : ''}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onDoubleClick={onPlay}
      role="listitem"
    >
      {/* Index / Play indicator */}
      <div className="track-row-index" onClick={onPlay}>
        {hovered ? (
          <button className="track-row-play-btn" aria-label={isPlaying ? 'Pause' : 'Play'}>
            {isPlaying ? <PauseIcon size={14} /> : <PlayIcon size={14} />}
          </button>
        ) : isActive ? (
          <Equalizer playing={isPlaying} />
        ) : showIndex ? (
          <span className="track-row-num">{index + 1}</span>
        ) : null}
      </div>

      {/* Album art + info */}
      <div className="track-row-art-wrap">
        {track.coverUrl ? (
          <img
            src={track.coverUrl}
            alt={track.title}
            className="track-row-art track-row-art-img"
            onClick={onPlay}
          />
        ) : (
          <div
            className="track-row-art"
            style={{ background: album?.gradient || '#1a1a1a' }}
            onClick={onPlay}
          />
        )}
      </div>
      <div className="track-row-info" onClick={onPlay}>
        <span className={`track-row-title truncate ${isActive ? 'accent' : ''}`}>{track.title}</span>
        <span className="track-row-artist truncate">{artist?.name}</span>
      </div>

      {showAlbum && (
        <div className="track-row-album truncate">{album?.title}</div>
      )}

      {/* Actions */}
      <div className="track-row-actions">
        <button
          className={`track-row-like ${isLiked ? 'liked' : ''} ${hovered || isLiked ? 'visible' : ''}`}
          onClick={onLike}
          aria-label={isLiked ? 'Unlike' : 'Like'}
        >
          <HeartIcon size={15} filled={isLiked} />
        </button>
        <span className="track-row-duration">{formatDuration(track.duration)}</span>
        <button className={`track-row-more ${hovered ? 'visible' : ''}`} aria-label="More options">
          <DotsIcon size={16} />
        </button>
      </div>
    </div>
  );
}
