import { BrowserRouter, Routes, Route, Navigate, Outlet } from 'react-router-dom';
import { PlayerProvider } from './context/PlayerContext';
import { AuthProvider } from './context/AuthContext';
import { SongsProvider } from './context/SongsContext';
import { ToastProvider } from './components/ui/Toast/Toast';
import { useAuth } from './context/AuthContext';

import MainLayout from './layouts/MainLayout/MainLayout';
import AuthLayout from './layouts/AuthLayout/AuthLayout';

import Home from './pages/Home/Home';
import Browse from './pages/Browse/Browse';
import Search from './pages/Search/Search';
import Library from './pages/Library/Library';
import Playlist from './pages/Playlist/Playlist';
import Auth from './pages/Auth/Auth';
import NotFound from './pages/NotFound/NotFound';

function RequireAuth() {
  const { user } = useAuth();
  return user ? <Outlet /> : <Navigate to="/auth/login" replace />;
}

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <SongsProvider>
        <PlayerProvider>
          <ToastProvider>
            <Routes>
              <Route element={<RequireAuth />}>
                <Route element={<MainLayout />}>
                  <Route path="/" element={<Home />} />
                  <Route path="/browse" element={<Browse />} />
                  <Route path="/search" element={<Search />} />
                  <Route path="/library" element={<Library />} />
                  <Route path="/playlist/:id" element={<Playlist />} />
                </Route>
              </Route>
              <Route element={<AuthLayout />}>
                <Route path="/auth" element={<Navigate to="/auth/login" replace />} />
                <Route path="/auth/:mode" element={<Auth />} />
              </Route>
              <Route path="*" element={<NotFound />} />
            </Routes>
          </ToastProvider>
        </PlayerProvider>
        </SongsProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}
