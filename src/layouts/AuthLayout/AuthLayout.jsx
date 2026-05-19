import { Outlet, Link } from 'react-router-dom';
import { MusicNoteIcon } from '../../components/ui/Icons/Icons';
import './AuthLayout.css';

export default function AuthLayout() {
  return (
    <div className="auth-layout">
      <div className="auth-bg">
        <div className="auth-bg-orb auth-bg-orb-1" />
        <div className="auth-bg-orb auth-bg-orb-2" />
        <div className="auth-bg-orb auth-bg-orb-3" />
      </div>
      <header className="auth-header">
        <Link to="/" className="auth-logo">
          <span className="auth-logo-mark">
            <MusicNoteIcon size={18} />
          </span>
          <span className="auth-logo-text">Lumina</span>
        </Link>
      </header>
      <main className="auth-main">
        <Outlet />
      </main>
    </div>
  );
}
