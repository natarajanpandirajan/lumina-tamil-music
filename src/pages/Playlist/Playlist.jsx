import { useParams, useNavigate } from 'react-router-dom';
import { usePlayer } from '../../context/PlayerContext';
import {
  getPlaylistById, getTracksByPlaylist, getTrackWithMeta,
  formatPlays
} from '../../services/musicData';
import { formatDuration } from '../../utils/formatTime';
import TopBar from '../../components/layout/TopBar/TopBar';
import TrackList from '../../components/music/TrackList/TrackList';
import { PlayIcon, PauseIcon, HeartIcon, DotsIcon, ShuffleIcon } from '../../components/ui/Icons/Icons';
import './Playlist.css';

export default function Playlist() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { currentTrack, isPlaying, playTrack, togglePlay, toggleShuffle } = usePlayer();

  const playlist = getPlaylistById(id);
  if (!playlist) {
    return (
      <div className="playlist-not-found">
        <h2>Playlist not found</h2>
        <button onClick={() => navigate(-1)}>Go back</button>
      </div>
    );
  }

  const rawTracks = getTracksByPlaylist(id);
  const enrichedTracks = rawTracks.map(t => getTrackWithMeta(t)).filter(Boolean);

  const isCurrentPlaylist = rawTracks.some(t => t.id === currentTrack?.id);
  const showPause = isCurrentPlaylist && isPlaying;

  const totalDuration = rawTracks.reduce((acc, t) => acc + (t?.duration || 0), 0);

  const handlePlay = () => {
    if (isCurrentPlaylist) {
      togglePlay();
    } else if (rawTracks.length > 0) {
      playTrack(rawTracks[0], rawTracks, 0);
    }
  };

  const handleShuffle = () => {
    if (rawTracks.length > 0) {
      const idx = Math.floor(Math.random() * rawTracks.length);
      toggleShuffle();
      playTrack(rawTracks[idx], rawTracks, idx);
    }
  };

  return (
    <div className="playlist-page">
      {/* Banner */}
      <div className="playlist-banner">
        <div className="playlist-banner-bg" style={{ background: playlist.gradient }} />
        <div className="playlist-banner-overlay" />
        <TopBar />
        <div className="playlist-banner-content">
          <div className="playlist-artwork-wrap">
            <div className="playlist-artwork" style={{ background: playlist.gradient }} />
          </div>
          <div className="playlist-info">
            <span className="playlist-type">
              {playlist.isOfficial ? 'Official Playlist' : 'Playlist'}
            </span>
            <h1 className="playlist-title">{playlist.title}</h1>
            <p className="playlist-desc">{playlist.description}</p>
            <div className="playlist-meta">
              <span className="playlist-meta-item">{rawTracks.length} songs</span>
              <span className="playlist-meta-dot">·</span>
              <span className="playlist-meta-item">{formatDuration(totalDuration)}</span>
              {playlist.plays > 0 && (
                <>
                  <span className="playlist-meta-dot">·</span>
                  <span className="playlist-meta-item">{formatPlays(playlist.plays)} plays</span>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="playlist-controls">
        <button
          className="playlist-play-main"
          onClick={handlePlay}
          aria-label={showPause ? 'Pause playlist' : 'Play playlist'}
        >
          {showPause ? <PauseIcon size={24} /> : <PlayIcon size={24} />}
        </button>
        <button
          className="playlist-ctrl-btn"
          onClick={handleShuffle}
          aria-label="Shuffle"
        >
          <ShuffleIcon size={20} />
        </button>
        <button className="playlist-ctrl-btn" aria-label="Like playlist">
          <HeartIcon size={20} />
        </button>
        <button className="playlist-ctrl-btn" aria-label="More options">
          <DotsIcon size={20} />
        </button>
      </div>

      {/* Track list */}
      <div className="playlist-tracks">
        {enrichedTracks.length > 0 ? (
          <TrackList
            tracks={enrichedTracks}
            queue={rawTracks}
            showIndex
            showAlbum
          />
        ) : (
          <p className="playlist-empty">No tracks in this playlist.</p>
        )}
      </div>
    </div>
  );
}
