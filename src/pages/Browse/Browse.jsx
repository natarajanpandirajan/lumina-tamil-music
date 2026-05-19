import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { categories, playlists, albums, artists } from '../../services/musicData';
import TopBar from '../../components/layout/TopBar/TopBar';
import SectionHeader from '../../components/music/SectionHeader/SectionHeader';
import HorizontalScroll from '../../components/music/HorizontalScroll/HorizontalScroll';
import PlaylistCard from '../../components/music/PlaylistCard/PlaylistCard';
import AlbumCard from '../../components/music/AlbumCard/AlbumCard';
import './Browse.css';

export default function Browse() {
  const [activeCategory, setActiveCategory] = useState(null);
  const navigate = useNavigate();

  const filtered = activeCategory
    ? albums.filter(a => a.genre === activeCategory)
    : albums;

  return (
    <div className="browse-page">
      <TopBar title="Browse" />

      <div className="browse-content">
        <div className="anim-fade-up">
          <h1 className="browse-heading">Browse</h1>
          <p className="browse-subheading">Explore music by mood, genre, or vibe</p>
        </div>

        {/* Categories */}
        <section className="browse-section anim-fade-up delay-1">
          <SectionHeader title="Genres & Moods" />
          <div className="categories-grid">
            {categories.map((cat, i) => (
              <button
                key={cat.id}
                className={`category-card ${activeCategory === cat.name ? 'active' : ''}`}
                style={{ animationDelay: `${i * 40}ms` }}
                onClick={() => setActiveCategory(activeCategory === cat.name ? null : cat.name)}
                aria-pressed={activeCategory === cat.name}
              >
                <div className="category-bg" style={{ background: cat.gradient }} />
                <div className="category-overlay" />
                <span className="category-emoji">{cat.icon}</span>
                <span className="category-name">{cat.name}</span>
              </button>
            ))}
          </div>
        </section>

        {/* Albums filtered or all */}
        <section className="browse-section anim-fade-up delay-2">
          <SectionHeader
            title={activeCategory ? `${activeCategory} Albums` : 'All Albums'}
            subtitle={activeCategory ? `${filtered.length} albums` : undefined}
          />
          {filtered.length === 0 ? (
            <p className="browse-empty">No albums found in this genre.</p>
          ) : (
            <div className="browse-albums-grid">
              {filtered.map(album => (
                <AlbumCard key={album.id} album={album} size="lg" />
              ))}
            </div>
          )}
        </section>

        {/* Official playlists */}
        <section className="browse-section anim-fade-up delay-3">
          <SectionHeader title="Official Playlists" />
          <HorizontalScroll>
            {playlists.filter(p => p.isOfficial).map(pl => (
              <PlaylistCard key={pl.id} playlist={pl} size="lg" />
            ))}
          </HorizontalScroll>
        </section>
      </div>
    </div>
  );
}
