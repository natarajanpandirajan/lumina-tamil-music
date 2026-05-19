import { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { fetchSongs } from '../services/songService';
import { isSupabaseConfigured } from '../services/supabase';

const SongsContext = createContext(null);

export function SongsProvider({ children }) {
  const [uploadedSongs, setUploadedSongs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [loadError, setLoadError] = useState(null);

  const loadSongs = useCallback(async () => {
    if (!isSupabaseConfigured) return;
    setIsLoading(true);
    setLoadError(null);
    try {
      const songs = await fetchSongs();
      setUploadedSongs(songs);
    } catch (err) {
      setLoadError(err.message);
      console.error('Failed to load songs from Supabase:', err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    loadSongs();
  }, [loadSongs]);

  const addSong = useCallback((song) => {
    setUploadedSongs(prev => [song, ...prev]);
  }, []);

  return (
    <SongsContext.Provider
      value={{
        uploadedSongs,
        isLoading,
        loadError,
        isSupabaseConfigured,
        loadSongs,
        addSong,
      }}
    >
      {children}
    </SongsContext.Provider>
  );
}

export function useSongs() {
  const ctx = useContext(SongsContext);
  if (!ctx) throw new Error('useSongs must be used within SongsProvider');
  return ctx;
}
