import { Link } from 'react-router-dom';
import { MusicNoteIcon, HomeIcon } from '../../components/ui/Icons/Icons';
import './NotFound.css';

export default function NotFound() {
  return (
    <div className="notfound-page">
      <div className="notfound-content anim-fade-up">
        <div className="notfound-icon">
          <MusicNoteIcon size={48} />
        </div>
        <h1 className="notfound-title">404</h1>
        <h2 className="notfound-heading">Page not found</h2>
        <p className="notfound-desc">
          This page doesn't exist or has been moved. Let's get you back on track.
        </p>
        <Link to="/" className="notfound-home-btn">
          <HomeIcon size={18} />
          Back to Home
        </Link>
      </div>
    </div>
  );
}
