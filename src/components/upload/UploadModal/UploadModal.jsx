import { useState, useRef, useCallback } from 'react';
import { uploadSong } from '../../../services/songService';
import { isSupabaseConfigured } from '../../../services/supabase';
import { useSongs } from '../../../context/SongsContext';
import { useToast } from '../../ui/Toast/Toast';
import { CloseIcon, MusicNoteIcon, CheckIcon, PlusIcon } from '../../ui/Icons/Icons';
import './UploadModal.css';

const TAMIL_GENRES = [
  'Melody (மெலடி)',
  'Kuthu / Party (குத்து)',
  'Classical (கர்நாடக)',
  'Folk (நாட்டுப்புறம்)',
  'Devotional (பக்தி)',
  'BGM / OST (திரைப்பட BGM)',
  'Remix (ரீமிக்ஸ்)',
  'Hip-Hop / Rap (தமிழ் ராப்)',
  'Duet (இரட்டை)',
  'Sad (துக்கம்)',
  'Gaana (காணா)',
  'Other',
];

const ACCEPTED_AUDIO = '.mp3,.m4a,.aac,.wav,.ogg,.flac';
const ACCEPTED_IMAGE = '.jpg,.jpeg,.png,.webp,.avif';
const MAX_AUDIO_MB = 80;
const MAX_IMAGE_MB = 5;

export default function UploadModal({ onClose }) {
  const { addSong } = useSongs();
  const { addToast } = useToast();

  const [form, setForm] = useState({
    title: '',
    artist: '',
    album: '',
    genre: 'Melody (மெலடி)',
  });
  const [audioFile, setAudioFile] = useState(null);
  const [coverFile, setCoverFile] = useState(null);
  const [coverPreview, setCoverPreview] = useState(null);
  const [audioDragging, setAudioDragging] = useState(false);
  const [coverDragging, setCoverDragging] = useState(false);
  const [progress, setProgress] = useState(null); // null | { step, percent }
  const [uploadDone, setUploadDone] = useState(false);
  const [uploadError, setUploadError] = useState('');

  const audioInputRef = useRef(null);
  const coverInputRef = useRef(null);

  const handleFormChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
    setUploadError('');
  };

  const validateAudio = (file) => {
    if (!file) return null;
    if (file.size > MAX_AUDIO_MB * 1024 * 1024)
      return `Audio file must be under ${MAX_AUDIO_MB}MB`;
    if (!file.type.startsWith('audio/'))
      return 'Please select an audio file (MP3, M4A, WAV, etc.)';
    return null;
  };

  const validateImage = (file) => {
    if (!file) return null;
    if (file.size > MAX_IMAGE_MB * 1024 * 1024)
      return `Image must be under ${MAX_IMAGE_MB}MB`;
    if (!file.type.startsWith('image/'))
      return 'Please select an image (JPG, PNG, WebP)';
    return null;
  };

  const handleAudioFile = (file) => {
    const err = validateAudio(file);
    if (err) { setUploadError(err); return; }
    setAudioFile(file);
    setUploadError('');
    // Auto-fill title from filename
    if (!form.title) {
      const name = file.name.replace(/\.[^.]+$/, '').replace(/[-_]/g, ' ');
      setForm(prev => ({ ...prev, title: name }));
    }
  };

  const handleCoverFile = (file) => {
    const err = validateImage(file);
    if (err) { setUploadError(err); return; }
    setCoverFile(file);
    setUploadError('');
    const url = URL.createObjectURL(file);
    setCoverPreview(url);
  };

  const handleAudioDrop = useCallback((e) => {
    e.preventDefault();
    setAudioDragging(false);
    const file = e.dataTransfer.files[0];
    if (file) handleAudioFile(file);
  }, [form.title]);

  const handleCoverDrop = useCallback((e) => {
    e.preventDefault();
    setCoverDragging(false);
    const file = e.dataTransfer.files[0];
    if (file) handleCoverFile(file);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setUploadError('');

    if (!isSupabaseConfigured) {
      setUploadError('Supabase is not configured yet. Follow the setup guide below to add your keys.');
      return;
    }
    if (!audioFile) { setUploadError('Please select an audio file.'); return; }
    if (!form.title.trim()) { setUploadError('Please enter a song title.'); return; }
    if (!form.artist.trim()) { setUploadError('Please enter an artist name.'); return; }

    setProgress({ step: 'audio', percent: 5 });

    try {
      const song = await uploadSong({
        title: form.title.trim(),
        artist: form.artist.trim(),
        album: form.album.trim() || form.title.trim(),
        genre: form.genre,
        audioFile,
        coverFile,
        onProgress: setProgress,
      });

      addSong(song);
      setUploadDone(true);
      addToast('Song uploaded successfully!', 'success');
    } catch (err) {
      setProgress(null);
      setUploadError(err.message || 'Upload failed. Please try again.');
    }
  };

  const formatBytes = (bytes) => {
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(0)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
  };

  if (uploadDone) {
    return (
      <div className="upload-modal-backdrop" onClick={onClose}>
        <div className="upload-modal upload-success-card" onClick={e => e.stopPropagation()}>
          <div className="upload-success-icon">
            <CheckIcon size={32} />
          </div>
          <h2>Upload Complete!</h2>
          <p className="upload-success-track">
            <strong>{form.title}</strong> by {form.artist}
          </p>
          <p className="upload-success-sub">Your Tamil song is now in your library.</p>
          <div className="upload-success-actions">
            <button className="upload-btn-primary" onClick={() => {
              setUploadDone(false);
              setProgress(null);
              setAudioFile(null);
              setCoverFile(null);
              setCoverPreview(null);
              setForm({ title: '', artist: '', album: '', genre: 'Melody (மெலடி)' });
            }}>
              Upload Another
            </button>
            <button className="upload-btn-ghost" onClick={onClose}>Done</button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="upload-modal-backdrop" onClick={onClose} role="dialog" aria-modal="true" aria-label="Upload Song">
      <div className="upload-modal" onClick={e => e.stopPropagation()}>
        {/* Header */}
        <div className="upload-modal-header">
          <div className="upload-modal-title-row">
            <span className="upload-modal-icon"><MusicNoteIcon size={18} /></span>
            <h2 className="upload-modal-title">Upload Tamil Song</h2>
          </div>
          <button className="upload-close" onClick={onClose} aria-label="Close">
            <CloseIcon size={18} />
          </button>
        </div>

        {!isSupabaseConfigured && (
          <div className="upload-setup-banner">
            <strong>Supabase not configured.</strong> Add your keys to <code>.env</code> to enable uploads.
            See the setup guide in the terminal output for instructions.
          </div>
        )}

        <form className="upload-form" onSubmit={handleSubmit} noValidate>
          {/* Two column layout */}
          <div className="upload-columns">
            {/* Left: Cover art */}
            <div className="upload-cover-section">
              <label className="upload-field-label">Cover Art</label>
              <div
                className={`upload-cover-drop ${coverDragging ? 'dragging' : ''}`}
                onDragOver={e => { e.preventDefault(); setCoverDragging(true); }}
                onDragLeave={() => setCoverDragging(false)}
                onDrop={handleCoverDrop}
                onClick={() => coverInputRef.current?.click()}
                role="button"
                tabIndex={0}
                aria-label="Upload cover image"
                onKeyDown={e => e.key === 'Enter' && coverInputRef.current?.click()}
              >
                {coverPreview ? (
                  <img
                    src={coverPreview}
                    alt="Cover preview"
                    className="upload-cover-preview"
                  />
                ) : (
                  <div className="upload-cover-placeholder">
                    <span className="upload-cover-placeholder-icon">🎵</span>
                    <span>Add Cover</span>
                    <span className="upload-cover-hint">JPG, PNG, WebP</span>
                  </div>
                )}
                {coverPreview && (
                  <div className="upload-cover-overlay">
                    <PlusIcon size={20} />
                  </div>
                )}
              </div>
              <input
                ref={coverInputRef}
                type="file"
                accept={ACCEPTED_IMAGE}
                className="upload-file-hidden"
                onChange={e => e.target.files[0] && handleCoverFile(e.target.files[0])}
                aria-label="Choose cover image"
              />
              {coverFile && (
                <p className="upload-file-info">
                  {coverFile.name} · {formatBytes(coverFile.size)}
                </p>
              )}
            </div>

            {/* Right: Form fields */}
            <div className="upload-fields">
              <div className="upload-field">
                <label className="upload-field-label" htmlFor="u-title">
                  Song Title <span className="upload-required">*</span>
                </label>
                <input
                  id="u-title"
                  name="title"
                  className="upload-input"
                  placeholder="e.g. Munbe Vaa"
                  value={form.title}
                  onChange={handleFormChange}
                  required
                  autoComplete="off"
                />
              </div>

              <div className="upload-field">
                <label className="upload-field-label" htmlFor="u-artist">
                  Artist / Singer <span className="upload-required">*</span>
                </label>
                <input
                  id="u-artist"
                  name="artist"
                  className="upload-input"
                  placeholder="e.g. S.P. Balasubrahmanyam"
                  value={form.artist}
                  onChange={handleFormChange}
                  required
                  autoComplete="off"
                />
              </div>

              <div className="upload-field">
                <label className="upload-field-label" htmlFor="u-album">
                  Album / Movie
                </label>
                <input
                  id="u-album"
                  name="album"
                  className="upload-input"
                  placeholder="e.g. Sillunu Oru Kaadhal"
                  value={form.album}
                  onChange={handleFormChange}
                  autoComplete="off"
                />
              </div>

              <div className="upload-field">
                <label className="upload-field-label" htmlFor="u-genre">Genre</label>
                <select
                  id="u-genre"
                  name="genre"
                  className="upload-select"
                  value={form.genre}
                  onChange={handleFormChange}
                >
                  {TAMIL_GENRES.map(g => (
                    <option key={g} value={g}>{g}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Audio file drop zone */}
          <div className="upload-field">
            <label className="upload-field-label">
              Audio File <span className="upload-required">*</span>
              <span className="upload-field-hint"> MP3, M4A, WAV, FLAC — max {MAX_AUDIO_MB}MB</span>
            </label>
            <div
              className={`upload-audio-drop ${audioDragging ? 'dragging' : ''} ${audioFile ? 'has-file' : ''}`}
              onDragOver={e => { e.preventDefault(); setAudioDragging(true); }}
              onDragLeave={() => setAudioDragging(false)}
              onDrop={handleAudioDrop}
              onClick={() => audioInputRef.current?.click()}
              role="button"
              tabIndex={0}
              onKeyDown={e => e.key === 'Enter' && audioInputRef.current?.click()}
              aria-label="Upload audio file"
            >
              {audioFile ? (
                <div className="upload-audio-selected">
                  <span className="upload-audio-icon">🎶</span>
                  <div className="upload-audio-info">
                    <span className="upload-audio-name">{audioFile.name}</span>
                    <span className="upload-audio-size">{formatBytes(audioFile.size)}</span>
                  </div>
                  <span className="upload-audio-check">✓</span>
                </div>
              ) : (
                <div className="upload-audio-empty">
                  <span className="upload-audio-drag-icon">🎵</span>
                  <span className="upload-audio-drag-text">
                    Drag & drop audio file here
                  </span>
                  <span className="upload-audio-or">or click to browse</span>
                </div>
              )}
            </div>
            <input
              ref={audioInputRef}
              type="file"
              accept={ACCEPTED_AUDIO}
              className="upload-file-hidden"
              onChange={e => e.target.files[0] && handleAudioFile(e.target.files[0])}
              aria-label="Choose audio file"
            />
          </div>

          {/* Progress */}
          {progress && (
            <div className="upload-progress-section">
              <div className="upload-progress-label">
                {progress.step === 'audio' && '🎵 Uploading audio...'}
                {progress.step === 'cover' && '🖼️ Uploading cover art...'}
                {progress.step === 'saving' && '💾 Saving to library...'}
              </div>
              <div className="upload-progress-bar-track">
                <div
                  className="upload-progress-bar-fill"
                  style={{ width: `${progress.percent}%` }}
                />
              </div>
              <span className="upload-progress-pct">{progress.percent}%</span>
            </div>
          )}

          {/* Error */}
          {uploadError && (
            <div className="upload-error" role="alert">{uploadError}</div>
          )}

          {/* Submit */}
          <div className="upload-actions">
            <button
              type="button"
              className="upload-btn-ghost"
              onClick={onClose}
              disabled={!!progress}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="upload-btn-primary"
              disabled={!!progress || !audioFile || !isSupabaseConfigured}
            >
              {progress ? 'Uploading...' : 'Upload Song'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
