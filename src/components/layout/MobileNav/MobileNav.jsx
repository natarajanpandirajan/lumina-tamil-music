import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { HomeIcon, SearchIcon, LibraryIcon, BrowseIcon, PlusIcon } from '../../ui/Icons/Icons';
import UploadModal from '../../upload/UploadModal/UploadModal';
import './MobileNav.css';

const navItems = [
  { to: '/', icon: HomeIcon, label: 'Home', end: true },
  { to: '/browse', icon: BrowseIcon, label: 'Browse' },
  { to: '/search', icon: SearchIcon, label: 'Search' },
  { to: '/library', icon: LibraryIcon, label: 'Library' },
];

export default function MobileNav() {
  const [showUpload, setShowUpload] = useState(false);

  return (
    <>
      <nav className="mobile-nav" aria-label="Mobile navigation">
        {navItems.map(({ to, icon: Icon, label, end }) => (
          <NavLink
            key={to}
            to={to}
            end={end}
            className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`}
            aria-label={label}
          >
            <span className="mobile-nav-icon">
              <Icon size={22} />
            </span>
            <span className="mobile-nav-label">{label}</span>
          </NavLink>
        ))}
        <button
          className="mobile-nav-link mobile-upload-btn"
          onClick={() => setShowUpload(true)}
          aria-label="Upload song"
        >
          <span className="mobile-nav-icon mobile-upload-icon">
            <PlusIcon size={22} />
          </span>
          <span className="mobile-nav-label">Upload</span>
        </button>
      </nav>
      {showUpload && <UploadModal onClose={() => setShowUpload(false)} />}
    </>
  );
}
