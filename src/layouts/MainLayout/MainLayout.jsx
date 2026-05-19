import { Outlet } from 'react-router-dom';
import Sidebar from '../../components/layout/Sidebar/Sidebar';
import MobileNav from '../../components/layout/MobileNav/MobileNav';
import Player from '../../components/player/Player/Player';
import './MainLayout.css';

export default function MainLayout() {
  return (
    <div className="main-layout">
      <Sidebar />
      <main className="main-content" id="main-content">
        <Outlet />
      </main>
      <MobileNav />
      <Player />
    </div>
  );
}
