import { useEffect, useRef, useMemo } from 'react';
import { usePlayer } from '../../../context/PlayerContext';
import { CloseIcon } from '../../ui/Icons/Icons';
import './LyricsPanel.css';

// Parse LRC timestamped lyrics: [mm:ss.xx] Line text
function parseLRC(text) {
  const lines = [];
  const regex = /\[(\d{2}):(\d{2})\.(\d{2,3})\](.*)/g;
  let match;
  while ((match = regex.exec(text)) !== null) {
    const [, min, sec, cs, lineText] = match;
    const time = parseInt(min) * 60 + parseInt(sec) + parseInt(cs) / (cs.length >= 3 ? 1000 : 100);
    lines.push({ time, text: lineText.trim() });
  }
  return lines.sort((a, b) => a.time - b.time);
}

function isLRC(text) {
  return /\[\d{2}:\d{2}\.\d{2,3}\]/.test(text);
}

export default function LyricsPanel({ onClose }) {
  const { currentTrack, currentTime } = usePlayer();
  const bodyRef = useRef(null);
  const activeRef = useRef(null);

  const lyrics = currentTrack?.lyrics;
  const hasLyrics = lyrics && lyrics.trim().length > 0;
  const synced = hasLyrics && isLRC(lyrics);
  const lrcLines = useMemo(() => synced ? parseLRC(lyrics) : [], [lyrics, synced]);

  // Find current active line index
  const activeIndex = useMemo(() => {
    if (!synced || lrcLines.length === 0) return -1;
    let idx = -1;
    for (let i = 0; i < lrcLines.length; i++) {
      if (lrcLines[i].time <= currentTime) idx = i;
      else break;
    }
    return idx;
  }, [lrcLines, currentTime, synced]);

  // Auto-scroll active line into view
  useEffect(() => {
    if (activeRef.current && bodyRef.current) {
      const container = bodyRef.current;
      const el = activeRef.current;
      const top = el.offsetTop - container.clientHeight / 2 + el.clientHeight / 2;
      container.scrollTo({ top: Math.max(0, top), behavior: 'smooth' });
    }
  }, [activeIndex]);

  useEffect(() => {
    const handleKey = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [onClose]);

  return (
    <div className="lyrics-backdrop" onClick={onClose} role="dialog" aria-modal="true" aria-label="Lyrics">
      <div className="lyrics-panel" onClick={e => e.stopPropagation()}>
        <div className="lyrics-header">
          <div className="lyrics-track-info">
            {currentTrack?.coverUrl ? (
              <img src={currentTrack.coverUrl} alt="" className="lyrics-artwork" />
            ) : (
              <div
                className="lyrics-artwork lyrics-artwork-gradient"
                style={{ background: currentTrack?.album?.gradient || '#1a1a1a' }}
              />
            )}
            <div>
              <p className="lyrics-title">{currentTrack?.title}</p>
              <p className="lyrics-artist">{currentTrack?.artist?.name}</p>
            </div>
          </div>
          <div className="lyrics-header-right">
            {synced && <span className="lyrics-sync-badge">Live</span>}
            <button className="lyrics-close" onClick={onClose} aria-label="Close lyrics">
              <CloseIcon size={20} />
            </button>
          </div>
        </div>

        <div className="lyrics-body" ref={bodyRef}>
          {hasLyrics ? (
            synced ? (
              <div className="lyrics-synced">
                {lrcLines.map((line, i) => (
                  <p
                    key={i}
                    ref={i === activeIndex ? activeRef : null}
                    className={`lyrics-line ${i === activeIndex ? 'active' : ''} ${i < activeIndex ? 'past' : ''}`}
                  >
                    {line.text || <span className="lyrics-break">· · ·</span>}
                  </p>
                ))}
              </div>
            ) : (
              <pre className="lyrics-text">{lyrics}</pre>
            )
          ) : (
            <div className="lyrics-empty">
              <span className="lyrics-empty-icon">🎵</span>
              <p>No lyrics available for this song</p>
              <p className="lyrics-empty-sub">Upload a song with lyrics to see them here</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
