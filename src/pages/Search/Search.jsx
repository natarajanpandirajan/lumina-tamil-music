import { useState, useRef } from 'react';
import { searchAll, categories, getTrackWithMeta } from '../../services/musicData';
import { useDebounce } from '../../hooks/useDebounce';
import { usePlayer } from '../../context/PlayerContext';
import TopBar from '../../components/layout/TopBar/TopBar';
import HorizontalScroll from '../../components/music/HorizontalScroll/HorizontalScroll';
import ArtistCard from '../../components/music/ArtistCard/ArtistCard';
import AlbumCard from '../../components/music/AlbumCard/AlbumCard';
import PlaylistCard from '../../components/music/PlaylistCard/PlaylistCard';
import TrackList from '../../components/music/TrackList/TrackList';
import { SearchIcon, CloseIcon } from '../../components/ui/Icons/Icons';
import './Search.css';

export default function Search() {
  const [query, setQuery] = useState('');
  const inputRef = useRef(null);
  const debouncedQuery = useDebounce(query, 280);
  const { playTrack } = usePlayer();

  const results = searchAll(debouncedQuery);
  const hasResults = debouncedQuery.length > 0;
  const hasAnyResult = results.tracks.length + results.artists.length + results.albums.length + results.playlists.length > 0;

  const enrichedTracks = results.tracks.map(t => getTrackWithMeta(t));

  const clear = () => {
    setQuery('');
    inputRef.current?.focus();
  };

  return (
    <div className="search-page">
      <TopBar />
      <div className="search-content">
        {/* Search bar */}
        <div className="search-bar-wrap anim-fade-down">
          <label htmlFor="search-input" className="sr-only">Search</label>
          <div className="search-bar">
            <span className="search-bar-icon"><SearchIcon size={18} /></span>
            <input
              id="search-input"
              ref={inputRef}
              type="search"
              className="search-input"
              placeholder="Artists, songs, albums, playlists..."
              value={query}
              onChange={e => setQuery(e.target.value)}
              autoComplete="off"
              autoFocus
            />
            {query && (
              <button className="search-clear" onClick={clear} aria-label="Clear search">
                <CloseIcon size={14} />
              </button>
            )}
          </div>
        </div>

        {/* Results */}
        {hasResults ? (
          hasAnyResult ? (
            <div className="search-results">
              {results.tracks.length > 0 && (
                <section className="search-section anim-fade-up">
                  <h2 className="search-section-title">Songs</h2>
                  <TrackList
                    tracks={enrichedTracks}
                    showIndex={false}
                    queue={results.tracks}
                  />
                </section>
              )}
              {results.artists.length > 0 && (
                <section className="search-section anim-fade-up delay-1">
                  <h2 className="search-section-title">Artists</h2>
                  <div className="search-row">
                    {results.artists.map(a => <ArtistCard key={a.id} artist={a} />)}
                  </div>
                </section>
              )}
              {results.albums.length > 0 && (
                <section className="search-section anim-fade-up delay-2">
                  <h2 className="search-section-title">Albums</h2>
                  <div className="search-row">
                    {results.albums.map(a => <AlbumCard key={a.id} album={a} />)}
                  </div>
                </section>
              )}
              {results.playlists.length > 0 && (
                <section className="search-section anim-fade-up delay-3">
                  <h2 className="search-section-title">Playlists</h2>
                  <div className="search-row">
                    {results.playlists.map(p => <PlaylistCard key={p.id} playlist={p} />)}
                  </div>
                </section>
              )}
            </div>
          ) : (
            <div className="search-empty anim-fade-up">
              <p className="search-empty-title">No results for &ldquo;{debouncedQuery}&rdquo;</p>
              <p className="search-empty-hint">Check the spelling, or try a different term.</p>
            </div>
          )
        ) : (
          /* Browse by category */
          <div className="search-browse anim-fade-up">
            <h2 className="search-browse-title">Browse Categories</h2>
            <div className="search-categories">
              {categories.map((cat, i) => (
                <button
                  key={cat.id}
                  className="search-category"
                  style={{ animationDelay: `${i * 35}ms` }}
                  onClick={() => setQuery(cat.name)}
                >
                  <div className="search-cat-bg" style={{ background: cat.gradient }} />
                  <div className="search-cat-overlay" />
                  <span className="search-cat-emoji">{cat.icon}</span>
                  <span className="search-cat-name">{cat.name}</span>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
