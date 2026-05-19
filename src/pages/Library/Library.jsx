import { useState } from 'react';
import { usePlayer } from '../../context/PlayerContext';
import { useSongs } from '../../context/SongsContext';
import { playlists, albums, getTrackById, getTrackWithMeta } from '../../services/musicData';
import TopBar from '../../components/layout/TopBar/TopBar';
import SectionHeader from '../../components/music/SectionHeader/SectionHeader';
import HorizontalScroll from '../../components/music/HorizontalScroll/HorizontalScroll';
import PlaylistCard from '../../components/music/PlaylistCard/PlaylistCard';
import AlbumCard from '../../components/music/AlbumCard/AlbumCard';
import TrackList from '../../components/music/TrackList/TrackList';
import { HeartIcon, MusicNoteIcon } from '../../components/ui/Icons/Icons';
import './Library.css';

const tabs = ['Overview', 'Tamil Songs', 'Liked Songs', 'Playlists', 'Albums'];

export default function Library() {
  const [activeTab, setActiveTab] = useState('Overview');
  const { likedTracks, recentlyPlayed } = usePlayer();
  const { uploadedSongs, isLoading: songsLoading } = useSongs();

  const likedTrackObjects = likedTracks
    .map(id => getTrackById(id))
    .filter(Boolean)
    .map(t => getTrackWithMeta(t));

  const recentTrackObjects = recentlyPlayed
    .map(id => getTrackById(id))
    .filter(Boolean)
    .map(t => getTrackWithMeta(t))
    .slice(0, 10);

  return (
    <div className="library-page">
      <TopBar title="Your Library" />

      <div className="library-content">
        <div className="library-header anim-fade-up">
          <h1 className="library-heading">Your Library</h1>
          <p className="library-subheading">
            {likedTracks.length} liked · {recentlyPlayed.length} recently played
            {uploadedSongs.length > 0 && ` · ${uploadedSongs.length} Tamil songs uploaded`}
          </p>
        </div>

        {/* Tabs */}
        <div className="library-tabs" role="tablist">
          {tabs.map(tab => (
            <button
              key={tab}
              role="tab"
              aria-selected={activeTab === tab}
              className={`library-tab ${activeTab === tab ? 'active' : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Tab content */}
        <div className="library-tab-content" role="tabpanel">
          {activeTab === 'Overview' && (
            <OverviewTab
              likedTracks={likedTrackObjects}
              recentTracks={recentTrackObjects}
            />
          )}
          {activeTab === 'Tamil Songs' && (
            <TamilSongsTab songs={uploadedSongs} isLoading={songsLoading} />
          )}
          {activeTab === 'Liked Songs' && (
            <LikedTab likedTracks={likedTrackObjects} />
          )}
          {activeTab === 'Playlists' && <PlaylistsTab />}
          {activeTab === 'Albums' && <AlbumsTab />}
        </div>
      </div>
    </div>
  );
}

function OverviewTab({ likedTracks, recentTracks }) {
  return (
    <div className="library-overview">
      {recentTracks.length > 0 && (
        <section className="library-section anim-fade-up">
          <SectionHeader title="Recently Played" />
          <TrackList tracks={recentTracks} showIndex={false} />
        </section>
      )}
      {likedTracks.length > 0 && (
        <section className="library-section anim-fade-up delay-1">
          <SectionHeader title="Liked Songs" />
          <TrackList tracks={likedTracks.slice(0, 5)} showIndex={false} />
        </section>
      )}
      <section className="library-section anim-fade-up delay-2">
        <SectionHeader title="Your Playlists" />
        <HorizontalScroll>
          {playlists.filter(p => p.isOfficial).map(pl => (
            <PlaylistCard key={pl.id} playlist={pl} />
          ))}
        </HorizontalScroll>
      </section>
    </div>
  );
}

function LikedTab({ likedTracks }) {
  if (likedTracks.length === 0) {
    return (
      <div className="library-empty anim-fade-up">
        <div className="library-empty-icon">
          <HeartIcon size={40} />
        </div>
        <h3>No liked songs yet</h3>
        <p>Tap the heart icon on any track to save it here.</p>
      </div>
    );
  }

  return (
    <div className="anim-fade-up">
      <p className="library-count">{likedTracks.length} songs</p>
      <TrackList tracks={likedTracks} queue={likedTracks} />
    </div>
  );
}

function TamilSongsTab({ songs, isLoading }) {
  const { playTrack } = usePlayer();

  if (isLoading) {
    return (
      <div className="library-empty anim-fade-up">
        <div className="library-empty-icon" style={{ opacity: 1 }}>
          <MusicNoteIcon size={32} />
        </div>
        <h3>Loading your Tamil songs...</h3>
        <p>Connecting to cloud storage</p>
      </div>
    );
  }

  if (songs.length === 0) {
    return (
      <div className="library-empty anim-fade-up">
        <div className="library-empty-icon">
          <span style={{ fontSize: '3rem' }}>🎵</span>
        </div>
        <h3>No Tamil songs uploaded yet</h3>
        <p>Click <strong>Upload Song</strong> in the sidebar to add your first Tamil song.</p>
        <p style={{ fontSize: 'var(--text-xs)', color: 'var(--text-tertiary)', marginTop: 'var(--space-2)' }}>
          Songs are stored in Supabase cloud — free forever.
        </p>
      </div>
    );
  }

  return (
    <div className="anim-fade-up">
      <p className="library-count">{songs.length} Tamil song{songs.length !== 1 ? 's' : ''}</p>
      <TrackList
        tracks={songs}
        queue={songs}
        showIndex
      />
    </div>
  );
}

function PlaylistsTab() {
  return (
    <div className="library-grid anim-fade-up">
      {playlists.map(pl => (
        <PlaylistCard key={pl.id} playlist={pl} size="lg" />
      ))}
    </div>
  );
}

function AlbumsTab() {
  return (
    <div className="library-grid anim-fade-up">
      {albums.map(album => (
        <AlbumCard key={album.id} album={album} size="lg" />
      ))}
    </div>
  );
}
