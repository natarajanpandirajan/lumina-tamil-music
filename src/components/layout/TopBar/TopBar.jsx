import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../context/AuthContext';
import { ChevronLeftIcon, ChevronRightIcon, UserIcon } from '../../ui/Icons/Icons';
import './TopBar.css';

export default function TopBar({ title }) {
  const navigate = useNavigate();
  const { user } = useAuth();

  return (
    <header className="topbar" role="banner">
      <div className="topbar-nav">
        <button className="topbar-btn" onClick={() => navigate(-1)} aria-label="Go back">
          <ChevronLeftIcon size={18} />
        </button>
        <button className="topbar-btn" onClick={() => navigate(1)} aria-label="Go forward">
          <ChevronRightIcon size={18} />
        </button>
      </div>

      {title && <h1 className="topbar-title truncate">{title}</h1>}

      <div className="topbar-actions">
        {user ? (
          <div className="topbar-avatar" aria-label={`Logged in as ${user.name}`}>
            {user.name?.[0]?.toUpperCase() || 'U'}
          </div>
        ) : (
          <button className="topbar-login-btn" onClick={() => navigate('/auth')}>
            Sign In
          </button>
        )}
      </div>
    </header>
  );
}
