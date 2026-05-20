import { createContext, useContext, useReducer, useRef, useEffect, useCallback } from 'react';
import { getTrackWithMeta } from '../services/musicData';
import { useLocalStorage } from '../hooks/useLocalStorage';

const PlayerContext = createContext(null);

const initialState = {
  currentTrack: null,
  queue: [],
  queueIndex: -1,
  isPlaying: false,
  isShuffle: false,
  repeatMode: 'none', // 'none' | 'one' | 'all'
  volume: 0.8,
  isMuted: false,
  currentTime: 0,
  duration: 0,
  isLoading: false,
  showQueue: false,
};

function playerReducer(state, action) {
  switch (action.type) {
    case 'SET_TRACK':
      return { ...state, currentTrack: action.payload, isLoading: true, currentTime: 0 };
    case 'SET_QUEUE':
      return { ...state, queue: action.payload.tracks, queueIndex: action.payload.index };
    case 'SET_PLAYING':
      return { ...state, isPlaying: action.payload };
    case 'SET_SHUFFLE':
      return { ...state, isShuffle: action.payload };
    case 'CYCLE_REPEAT':
      const modes = ['none', 'all', 'one'];
      const next = modes[(modes.indexOf(state.repeatMode) + 1) % modes.length];
      return { ...state, repeatMode: next };
    case 'SET_VOLUME':
      return { ...state, volume: action.payload, isMuted: action.payload === 0 };
    case 'TOGGLE_MUTE':
      return { ...state, isMuted: !state.isMuted };
    case 'SET_CURRENT_TIME':
      return { ...state, currentTime: action.payload };
    case 'SET_DURATION':
      return { ...state, duration: action.payload };
    case 'SET_LOADING':
      return { ...state, isLoading: action.payload };
    case 'TOGGLE_QUEUE':
      return { ...state, showQueue: !state.showQueue };
    case 'SET_QUEUE_INDEX':
      return { ...state, queueIndex: action.payload };
    default:
      return state;
  }
}

export function PlayerProvider({ children }) {
  const [state, dispatch] = useReducer(playerReducer, initialState);
  const [likedTracks, setLikedTracks] = useLocalStorage('likedTracks', []);
  const [recentlyPlayed, setRecentlyPlayed] = useLocalStorage('recentlyPlayed', []);
  const audioRef = useRef(new Audio());
  const skipNextRef = useRef(null);

  // Sync audio element properties
  useEffect(() => {
    const audio = audioRef.current;

    const onTimeUpdate = () => dispatch({ type: 'SET_CURRENT_TIME', payload: audio.currentTime });
    const onDurationChange = () => dispatch({ type: 'SET_DURATION', payload: audio.duration || 0 });
    const onLoadedData = () => dispatch({ type: 'SET_LOADING', payload: false });
    const onEnded = () => {
      if (state.repeatMode === 'one') {
        audio.currentTime = 0;
        audio.play().catch(() => {});
      } else {
        skipNextRef.current?.();
      }
    };
    const onError = () => dispatch({ type: 'SET_LOADING', payload: false });

    audio.addEventListener('timeupdate', onTimeUpdate);
    audio.addEventListener('durationchange', onDurationChange);
    audio.addEventListener('loadeddata', onLoadedData);
    audio.addEventListener('ended', onEnded);
    audio.addEventListener('error', onError);

    return () => {
      audio.removeEventListener('timeupdate', onTimeUpdate);
      audio.removeEventListener('durationchange', onDurationChange);
      audio.removeEventListener('loadeddata', onLoadedData);
      audio.removeEventListener('ended', onEnded);
      audio.removeEventListener('error', onError);
    };
  }, [state.repeatMode]);

  // Volume + mute
  useEffect(() => {
    audioRef.current.volume = state.isMuted ? 0 : state.volume;
  }, [state.volume, state.isMuted]);

  // Play/pause
  useEffect(() => {
    const audio = audioRef.current;
    if (state.isPlaying) {
      audio.play().catch(() => dispatch({ type: 'SET_PLAYING', payload: false }));
    } else {
      audio.pause();
    }
  }, [state.isPlaying]);

  // Load new track
  useEffect(() => {
    if (!state.currentTrack?.audioUrl) return;
    const audio = audioRef.current;
    audio.src = state.currentTrack.audioUrl;
    audio.load();
    if (state.isPlaying) {
      audio.play().catch(() => {});
    }
  }, [state.currentTrack?.id]);

  const playTrack = useCallback((track, queue = null, queueIdx = 0) => {
    const enriched = getTrackWithMeta(track);
    dispatch({ type: 'SET_TRACK', payload: enriched });
    if (queue) {
      dispatch({ type: 'SET_QUEUE', payload: { tracks: queue, index: queueIdx } });
    }
    dispatch({ type: 'SET_PLAYING', payload: true });

    // Track recently played
    setRecentlyPlayed(prev => {
      const filtered = prev.filter(id => id !== track.id);
      return [track.id, ...filtered].slice(0, 20);
    });
  }, []);

  const togglePlay = useCallback(() => {
    if (!state.currentTrack) return;
    dispatch({ type: 'SET_PLAYING', payload: !state.isPlaying });
  }, [state.currentTrack, state.isPlaying]);

  const skipNext = useCallback(() => {
    const { queue, queueIndex, isShuffle, repeatMode } = state;
    if (!queue.length) return;

    let nextIndex;
    if (isShuffle) {
      nextIndex = Math.floor(Math.random() * queue.length);
    } else {
      nextIndex = queueIndex + 1;
      if (nextIndex >= queue.length) {
        if (repeatMode === 'all') {
          nextIndex = 0;
        } else {
          dispatch({ type: 'SET_PLAYING', payload: false });
          return;
        }
      }
    }

    const nextTrack = getTrackWithMeta(queue[nextIndex]);
    dispatch({ type: 'SET_TRACK', payload: nextTrack });
    dispatch({ type: 'SET_QUEUE_INDEX', payload: nextIndex });
  }, [state]);

  // Keep ref current so the audio 'ended' handler always calls the latest skipNext
  skipNextRef.current = skipNext;

  const skipPrev = useCallback(() => {
    const audio = audioRef.current;
    // If more than 3s in, restart current track
    if (audio.currentTime > 3) {
      audio.currentTime = 0;
      return;
    }

    const { queue, queueIndex } = state;
    const prevIndex = Math.max(0, queueIndex - 1);
    if (prevIndex !== queueIndex) {
      const prevTrack = getTrackWithMeta(queue[prevIndex]);
      dispatch({ type: 'SET_TRACK', payload: prevTrack });
      dispatch({ type: 'SET_QUEUE_INDEX', payload: prevIndex });
    }
  }, [state]);

  const seek = useCallback((time) => {
    audioRef.current.currentTime = time;
    dispatch({ type: 'SET_CURRENT_TIME', payload: time });
  }, []);

  const toggleLike = useCallback((trackId) => {
    setLikedTracks(prev =>
      prev.includes(trackId) ? prev.filter(id => id !== trackId) : [trackId, ...prev]
    );
  }, []);

  const isLiked = useCallback((trackId) => likedTracks.includes(trackId), [likedTracks]);

  const value = {
    ...state,
    likedTracks,
    recentlyPlayed,
    playTrack,
    togglePlay,
    skipNext,
    skipPrev,
    seek,
    toggleLike,
    isLiked,
    setVolume: (v) => dispatch({ type: 'SET_VOLUME', payload: v }),
    toggleMute: () => dispatch({ type: 'TOGGLE_MUTE' }),
    toggleShuffle: () => dispatch({ type: 'SET_SHUFFLE', payload: !state.isShuffle }),
    cycleRepeat: () => dispatch({ type: 'CYCLE_REPEAT' }),
    toggleQueue: () => dispatch({ type: 'TOGGLE_QUEUE' }),
  };

  return <PlayerContext.Provider value={value}>{children}</PlayerContext.Provider>;
}

export function usePlayer() {
  const ctx = useContext(PlayerContext);
  if (!ctx) throw new Error('usePlayer must be used within PlayerProvider');
  return ctx;
}
