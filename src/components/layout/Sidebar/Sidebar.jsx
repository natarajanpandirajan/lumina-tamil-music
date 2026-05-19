import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useAuth } from '../../../context/AuthContext';
import { useSongs } from '../../../context/SongsContext';
import { playlists } from '../../../services/musicData';
import UploadModal from '../../upload/UploadModal/UploadModal';
import {
  HomeIcon, SearchIcon, LibraryIcon, BrowseIcon,
  PlusIcon, HeartIcon, MusicNoteIcon, LogOutIcon,
} from '../../ui/Icons/Icons';
import './Sidebar.css';

const navItems = [
  { to: '/', icon: HomeIcon, label: 'Home', end: true },
  { to: '/browse', icon: BrowseIcon, label: 'Browse' },
  { to: '/search', icon: SearchIcon, label: 'Search' },
  { to: '/library', icon: LibraryIcon, label: 'Your Library' },
];

export default function Sidebar() {
  const { user, logout } = useAuth();
  const { uploadedSongs } = useSongs();
  const [showUpload, setShowUpload] = useState(false);

  return (
    <>
      <aside className="sidebar" aria-label="Main navigation">
        {/* Logo */}
        <div className="sidebar-logo">
          <Link to="/" className="logo-mark" aria-label="Lumina Music Home">
            <MusicNoteIcon size={22} />
          </Link>
          <span className="logo-text">Lumina</span>
        </div>

        {/* Upload button */}
        <button
          className="sidebar-upload-btn"
          onClick={() => setShowUpload(true)}
          aria-label="Upload Tamil song"
        >
          <PlusIcon size={16} />
          <span>Upload Song</span>
        </button>

        {/* Main nav */}
        <nav className="sidebar-nav" role="navigation">
          {navItems.map(({ to, icon: Icon, label, end }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              className={({ isActive }) => `sidebar-link ${isActive ? 'active' : ''}`}
            >
              <Icon size={20} />
              <span>{label}</span>
            </NavLink>
          ))}
        </nav>

        {/* Divider */}
        <div className="sidebar-divider" />

        {/* Playlists */}
        <div className="sidebar-section">
          <div className="sidebar-section-header">
            <span className="sidebar-section-title">Playlists</span>
          </div>
          <div className="sidebar-playlists">
            <NavLink
              to="/library"
              className={({ isActive }) => `sidebar-playlist-link ${isActive ? 'active' : ''}`}
            >
              <span className="sidebar-playlist-icon liked-icon">
                <HeartIcon size={12} filled />
              </span>
              <span className="sidebar-playlist-name truncate">Liked Songs</span>
            </NavLink>
            {uploadedSongs.length > 0 && (
              <NavLink
                to="/library"
                className={({ isActive }) => `sidebar-playlist-link`}
              >
                <span
                  className="sidebar-playlist-icon"
                  style={{ background: 'linear-gradient(135deg, #ff375f 0%, #ff6b8a 100%)', fontSize: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                >
                  🎵
                </span>
                <span className="sidebar-playlist-name truncate">
                  Tamil Songs ({uploadedSongs.length})
                </span>
              </NavLink>
            )}
            {playlists.filter(p => p.isOfficial).map(pl => (
              <NavLink
                key={pl.id}
                to={`/playlist/${pl.id}`}
                className={({ isActive }) => `sidebar-playlist-link ${isActive ? 'active' : ''}`}
              >
                <span
                  className="sidebar-playlist-icon"
                  style={{ background: pl.gradient }}
                />
                <span className="sidebar-playlist-name truncate">{pl.title}</span>
              </NavLink>
            ))}
          </div>
        </div>

        {/* User footer */}
        {user ? (
          <div className="sidebar-footer">
            <div className="sidebar-user">
              <div className="sidebar-avatar">
                {user.name?.[0]?.toUpperCase() || 'U'}
              </div>
              <div className="sidebar-user-info">
                <span className="sidebar-user-name truncate">{user.name}</span>
                <span className="sidebar-user-plan">Free Plan</span>
              </div>
            </div>
            <button className="sidebar-logout" onClick={logout} aria-label="Log out">
              <LogOutIcon size={16} />
            </button>
          </div>
        ) : (
          <div className="sidebar-footer">
            <Link to="/auth/signup" className="sidebar-signin-btn">
              Sign in
            </Link>
          </div>
        )}
      </aside>

      {showUpload && <UploadModal onClose={() => setShowUpload(false)} />}
    </>
  );
}
