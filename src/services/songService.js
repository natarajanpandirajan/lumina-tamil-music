import { supabase, isSupabaseConfigured } from './supabase';
import { artworkGradients } from './musicData';

// Map Supabase row → app track format
export function normalizeSupabaseSong(song) {
  // Deterministic gradient based on song id
  const code = (song.id || '').split('').reduce((a, c) => a + c.charCodeAt(0), 0);
  const gradient = artworkGradients[code % artworkGradients.length];
  const gradient2 = artworkGradients[(code + 3) % artworkGradients.length];

  return {
    id: song.id,
    title: song.title,
    artistId: null,
    albumId: null,
    duration: song.duration || 0,
    plays: song.plays || 0,
    audioUrl: song.audio_url,
    coverUrl: song.cover_url || null,
    genre: song.genre || 'Tamil',
    language: 'Tamil',
    isUserUploaded: true,
    // Inline meta so getTrackWithMeta passes through cleanly
    artist: { id: null, name: song.artist || 'Unknown Artist', gradient },
    album: {
      id: null,
      title: song.album || song.title,
      gradient: gradient2,
      year: new Date(song.created_at || Date.now()).getFullYear(),
    },
  };
}

// Fetch all songs from Supabase
export async function fetchSongs() {
  if (!isSupabaseConfigured || !supabase) return [];

  const { data, error } = await supabase
    .from('songs')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) throw error;
  return (data || []).map(normalizeSupabaseSong);
}

// Get audio duration from File
function getAudioDuration(file) {
  return new Promise((resolve) => {
    const audio = new Audio();
    const url = URL.createObjectURL(file);
    audio.onloadedmetadata = () => { URL.revokeObjectURL(url); resolve(Math.round(audio.duration)); };
    audio.onerror = () => { URL.revokeObjectURL(url); resolve(0); };
    audio.src = url;
  });
}

// Sanitize filename for storage paths
function sanitizeName(name) {
  return name.replace(/[^a-zA-Z0-9._-]/g, '_').slice(0, 80);
}

// Upload a single song (audio + optional cover) to Supabase
export async function uploadSong({ title, artist, album, genre, audioFile, coverFile, onProgress }) {
  if (!isSupabaseConfigured || !supabase) {
    throw new Error('Supabase is not configured. Please add your environment variables.');
  }

  const ts = Date.now();
  onProgress?.({ step: 'audio', percent: 5 });

  // 1. Get duration client-side before upload
  const duration = await getAudioDuration(audioFile);
  onProgress?.({ step: 'audio', percent: 15 });

  // 2. Upload audio file
  const audioExt = audioFile.name.split('.').pop().toLowerCase();
  const audioPath = `${ts}-${sanitizeName(title)}.${audioExt}`;

  const { error: audioError } = await supabase.storage
    .from('songs')
    .upload(audioPath, audioFile, { contentType: audioFile.type, upsert: false });

  if (audioError) throw new Error(`Audio upload failed: ${audioError.message}`);

  onProgress?.({ step: 'audio', percent: 55 });

  const { data: { publicUrl: audioUrl } } = supabase.storage
    .from('songs')
    .getPublicUrl(audioPath);

  // 3. Upload cover image (optional)
  let coverUrl = null;
  if (coverFile) {
    onProgress?.({ step: 'cover', percent: 65 });
    const coverExt = coverFile.name.split('.').pop().toLowerCase();
    const coverPath = `${ts}-${sanitizeName(title)}.${coverExt}`;

    const { error: coverError } = await supabase.storage
      .from('covers')
      .upload(coverPath, coverFile, { contentType: coverFile.type, upsert: false });

    if (!coverError) {
      const { data: { publicUrl } } = supabase.storage
        .from('covers')
        .getPublicUrl(coverPath);
      coverUrl = publicUrl;
    }
    onProgress?.({ step: 'cover', percent: 85 });
  }

  // 4. Insert record into songs table
  onProgress?.({ step: 'saving', percent: 90 });

  const { data, error: dbError } = await supabase
    .from('songs')
    .insert({
      title: title.trim(),
      artist: artist.trim(),
      album: album?.trim() || title.trim(),
      genre: genre || 'Melody',
      language: 'Tamil',
      duration,
      audio_url: audioUrl,
      cover_url: coverUrl,
      plays: 0,
    })
    .select()
    .single();

  if (dbError) throw new Error(`Database error: ${dbError.message}`);

  onProgress?.({ step: 'done', percent: 100 });
  return normalizeSupabaseSong(data);
}
