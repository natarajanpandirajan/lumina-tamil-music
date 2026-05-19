import { useEffect, useState } from 'react';
import { usePlayer } from '../../context/PlayerContext';
import { useAuth } from '../../context/AuthContext';
import { useSongs } from '../../context/SongsContext';
import {
  trendingTracks, featuredPlaylists, topArtists,
  newReleases, recentlyPlayed as recentData,
  tracks, playlists, albums,
  getTrackWithMeta
} from '../../services/musicData';
import TopBar from '../../components/layout/TopBar/TopBar';
import SectionHeader from '../../components/music/SectionHeader/SectionHeader';
import HorizontalScroll from '../../components/music/HorizontalScroll/HorizontalScroll';
import AlbumCard from '../../components/music/AlbumCard/AlbumCard';
import PlaylistCard from '../../components/music/PlaylistCard/PlaylistCard';
import ArtistCard from '../../components/music/ArtistCard/ArtistCard';
import TrackList from '../../components/music/TrackList/TrackList';
import { SkeletonCard } from '../../components/ui/Skeleton/Skeleton';
import { PlayIcon, PauseIcon, SparkleIcon } from '../../components/ui/Icons/Icons';
import './Home.css';

function getGreeting() {
  const h = new Date().getHours();
  if (h < 12) return 'Good morning';
  if (h < 17) return 'Good afternoon';
  return 'Good evening';
}

export default function Home() {
  const { playTrack, currentTrack, isPlaying, togglePlay } = usePlayer();
  const { user } = useAuth();
  const { uploadedSongs } = useSongs();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(t);
  }, []);

  const heroPlaylist = featuredPlaylists[2]; // Heartstrings
  const heroTracks = tracks.filter(t => heroPlaylist.trackIds.includes(t.id));
  const isHeroPlaying = heroTracks.some(t => t.id === currentTrack?.id) && isPlaying;

  const handleHeroPlay = () => {
    if (heroTracks.some(t => t.id === currentTrack?.id)) {
      togglePlay();
    } else {
      playTrack(heroTracks[0], heroTracks, 0);
    }
  };

  return (
    <div className="home-page">
      <TopBar />

      {/* Hero */}
      <section className="home-hero anim-fade-in">
        <div
          className="home-hero-bg"
          style={{ background: heroPlaylist.gradient }}
        />
        <div className="home-hero-overlay" />
        <div className="home-hero-content">
          <span className="home-hero-label">
            <SparkleIcon size={14} />
            Featured Playlist
          </span>
          <h1 className="home-hero-title">{heroPlaylist.title}</h1>
          <p className="home-hero-desc">{heroPlaylist.description}</p>
          <button className="home-hero-play" onClick={handleHeroPlay} aria-label="Play featured playlist">
            {isHeroPlaying ? <PauseIcon size={22} /> : <PlayIcon size={22} />}
            <span>{isHeroPlaying ? 'Playing' : 'Play Now'}</span>
          </button>
        </div>
      </section>

      <div className="home-sections">
        {/* Greeting */}
        <div className="home-greeting anim-fade-up delay-1">
          <h2 className="home-greeting-text">
            {getGreeting()}{user?.name ? `, ${user.name}` : ''}
          </h2>
        </div>

        {/* Trending */}
        <section className="home-section anim-fade-up delay-2">
          <SectionHeader title="Trending Right Now" linkTo="/browse" />
          {loading ? (
            <div className="home-grid-4">
              {[...Array(4)].map((_, i) => <SkeletonCard key={i} />)}
            </div>
          ) : (
            <HorizontalScroll>
              {newReleases.map(album => (
                <AlbumCard key={album.id} album={album} />
              ))}
            </HorizontalScroll>
          )}
        </section>

        {/* Featured Playlists */}
        <section className="home-section anim-fade-up delay-3">
          <SectionHeader title="Made for You" subtitle="Handpicked playlists" linkTo="/browse" />
          {loading ? (
            <div className="home-grid-4">
              {[...Array(4)].map((_, i) => <SkeletonCard key={i} />)}
            </div>
          ) : (
            <HorizontalScroll>
              {featuredPlaylists.filter(p => p.isOfficial).map(pl => (
                <PlaylistCard key={pl.id} playlist={pl} />
              ))}
            </HorizontalScroll>
          )}
        </section>

        {/* Recently Played */}
        <section className="home-section anim-fade-up delay-3">
          <SectionHeader title="Recently Played" linkTo="/library" />
          <TrackList
            tracks={recentData.map(t => getTrackWithMeta(t)).filter(Boolean)}
            showIndex={false}
            queue={recentData}
          />
        </section>

        {/* Tamil Songs (uploaded) */}
        {uploadedSongs.length > 0 && (
          <section className="home-section anim-fade-up delay-4">
            <SectionHeader
              title="Your Tamil Songs 🎵"
              subtitle={`${uploadedSongs.length} song${uploadedSongs.length !== 1 ? 's' : ''} uploaded`}
              linkTo="/library"
              linkLabel="View All"
            />
            <TrackList
              tracks={uploadedSongs.slice(0, 5)}
              queue={uploadedSongs}
              showIndex={false}
            />
          </section>
        )}

        {/* Top Artists */}
        <section className="home-section anim-fade-up delay-4">
          <SectionHeader title="Top Artists" linkTo="/browse" />
          <HorizontalScroll gap={20}>
            {topArtists.map(artist => (
              <ArtistCard key={artist.id} artist={artist} />
            ))}
          </HorizontalScroll>
        </section>

        {/* New Releases - Albums */}
        <section className="home-section anim-fade-up delay-5">
          <SectionHeader title="New Releases" subtitle="Fresh drops this week" />
          <HorizontalScroll>
            {albums.slice(0, 8).map(album => (
              <AlbumCard key={album.id} album={album} size="lg" />
            ))}
          </HorizontalScroll>
        </section>
      </div>
    </div>
  );
}
