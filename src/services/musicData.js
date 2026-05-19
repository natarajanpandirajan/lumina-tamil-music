// ===== ARTWORK GRADIENTS =====
export const artworkGradients = [
  'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
  'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
  'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
  'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
  'linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)',
  'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)',
  'linear-gradient(135deg, #ff9a9e 0%, #fad0c4 100%)',
  'linear-gradient(135deg, #a1c4fd 0%, #c2e9fb 100%)',
  'linear-gradient(135deg, #fd7043 0%, #e91e8c 100%)',
  'linear-gradient(135deg, #0f2027 0%, #203a43 50%, #2c5364 100%)',
  'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
  'linear-gradient(135deg, #232526 0%, #414345 100%)',
  'linear-gradient(135deg, #373b44 0%, #4286f4 100%)',
  'linear-gradient(135deg, #ee0979 0%, #ff6a00 100%)',
  'linear-gradient(135deg, #8360c3 0%, #2ebf91 100%)',
  'linear-gradient(135deg, #c94b4b 0%, #4b134f 100%)',
  'linear-gradient(135deg, #02aab0 0%, #00cdac 100%)',
];

// ===== ARTISTS =====
export const artists = [
  { id: 'a1', name: 'Nova Sable', gradient: artworkGradients[0], genre: 'Indie Pop', followers: '2.4M', verified: true },
  { id: 'a2', name: 'Echo Drift', gradient: artworkGradients[1], genre: 'Electronic', followers: '1.8M', verified: true },
  { id: 'a3', name: 'Lyra Chen', gradient: artworkGradients[2], genre: 'R&B Soul', followers: '4.1M', verified: true },
  { id: 'a4', name: 'The Pale Fires', gradient: artworkGradients[3], genre: 'Alt Rock', followers: '890K', verified: false },
  { id: 'a5', name: 'Meridian', gradient: artworkGradients[4], genre: 'Neo Soul', followers: '3.2M', verified: true },
  { id: 'a6', name: 'Voss', gradient: artworkGradients[5], genre: 'Hip-Hop', followers: '5.7M', verified: true },
  { id: 'a7', name: 'Celeste Blue', gradient: artworkGradients[6], genre: 'Dream Pop', followers: '1.1M', verified: false },
  { id: 'a8', name: 'Onyx Grove', gradient: artworkGradients[7], genre: 'Jazz Fusion', followers: '620K', verified: true },
  { id: 'a9', name: 'Phantom Code', gradient: artworkGradients[8], genre: 'Synth Wave', followers: '2.9M', verified: true },
  { id: 'a10', name: 'Aurora Haze', gradient: artworkGradients[9], genre: 'Ambient', followers: '750K', verified: false },
];

// ===== ALBUMS =====
export const albums = [
  { id: 'alb1', title: 'Neon Solitude', artistId: 'a1', gradient: artworkGradients[0], year: 2025, genre: 'Indie Pop', trackCount: 12 },
  { id: 'alb2', title: 'Fractured Light', artistId: 'a2', gradient: artworkGradients[1], year: 2025, genre: 'Electronic', trackCount: 10 },
  { id: 'alb3', title: 'Silk & Smoke', artistId: 'a3', gradient: artworkGradients[2], year: 2024, genre: 'R&B Soul', trackCount: 14 },
  { id: 'alb4', title: 'Dead Stars Burning', artistId: 'a4', gradient: artworkGradients[3], year: 2025, genre: 'Alt Rock', trackCount: 11 },
  { id: 'alb5', title: 'Golden Hour Theory', artistId: 'a5', gradient: artworkGradients[4], year: 2024, genre: 'Neo Soul', trackCount: 13 },
  { id: 'alb6', title: 'Signal Loss', artistId: 'a6', gradient: artworkGradients[5], year: 2025, genre: 'Hip-Hop', trackCount: 16 },
  { id: 'alb7', title: 'Watercolour Dreams', artistId: 'a7', gradient: artworkGradients[6], year: 2024, genre: 'Dream Pop', trackCount: 9 },
  { id: 'alb8', title: 'Midnight Theorem', artistId: 'a8', gradient: artworkGradients[7], year: 2025, genre: 'Jazz Fusion', trackCount: 8 },
  { id: 'alb9', title: 'Ultraviolet Static', artistId: 'a9', gradient: artworkGradients[8], year: 2025, genre: 'Synth Wave', trackCount: 12 },
  { id: 'alb10', title: 'Vapor Atlas', artistId: 'a10', gradient: artworkGradients[9], year: 2024, genre: 'Ambient', trackCount: 7 },
];

// Audio samples (royalty-free)
const audioSamples = [
  'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
  'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
  'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3',
  'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3',
  'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3',
];

// ===== TRACKS =====
export const tracks = [
  // Neon Solitude - Nova Sable
  { id: 't1', title: 'Neon Solitude', artistId: 'a1', albumId: 'alb1', duration: 214, trackNumber: 1, plays: 8420000, audioUrl: audioSamples[0] },
  { id: 't2', title: 'Glass Houses', artistId: 'a1', albumId: 'alb1', duration: 198, trackNumber: 2, plays: 5130000, audioUrl: audioSamples[1] },
  { id: 't3', title: 'Meridian Blue', artistId: 'a1', albumId: 'alb1', duration: 241, trackNumber: 3, plays: 3870000, audioUrl: audioSamples[2] },
  { id: 't4', title: 'Ivory Static', artistId: 'a1', albumId: 'alb1', duration: 187, trackNumber: 4, plays: 2940000, audioUrl: audioSamples[3] },
  { id: 't5', title: 'Hollow Echo', artistId: 'a1', albumId: 'alb1', duration: 225, trackNumber: 5, plays: 4210000, audioUrl: audioSamples[4] },

  // Fractured Light - Echo Drift
  { id: 't6', title: 'Fractured Light', artistId: 'a2', albumId: 'alb2', duration: 322, trackNumber: 1, plays: 7600000, audioUrl: audioSamples[0] },
  { id: 't7', title: 'Phase Shift', artistId: 'a2', albumId: 'alb2', duration: 285, trackNumber: 2, plays: 4900000, audioUrl: audioSamples[1] },
  { id: 't8', title: 'Harmonic Decay', artistId: 'a2', albumId: 'alb2', duration: 347, trackNumber: 3, plays: 3100000, audioUrl: audioSamples[2] },
  { id: 't9', title: 'Circuit Dreams', artistId: 'a2', albumId: 'alb2', duration: 264, trackNumber: 4, plays: 5800000, audioUrl: audioSamples[3] },
  { id: 't10', title: 'Lattice', artistId: 'a2', albumId: 'alb2', duration: 198, trackNumber: 5, plays: 2400000, audioUrl: audioSamples[4] },

  // Silk & Smoke - Lyra Chen
  { id: 't11', title: 'Silk & Smoke', artistId: 'a3', albumId: 'alb3', duration: 234, trackNumber: 1, plays: 12500000, audioUrl: audioSamples[0] },
  { id: 't12', title: 'Velvet Hours', artistId: 'a3', albumId: 'alb3', duration: 261, trackNumber: 2, plays: 9800000, audioUrl: audioSamples[1] },
  { id: 't13', title: 'Golden Sigh', artistId: 'a3', albumId: 'alb3', duration: 218, trackNumber: 3, plays: 7300000, audioUrl: audioSamples[2] },
  { id: 't14', title: 'Slow Burn', artistId: 'a3', albumId: 'alb3', duration: 275, trackNumber: 4, plays: 8100000, audioUrl: audioSamples[3] },
  { id: 't15', title: 'Midnight Crush', artistId: 'a3', albumId: 'alb3', duration: 243, trackNumber: 5, plays: 6400000, audioUrl: audioSamples[4] },

  // Dead Stars Burning - The Pale Fires
  { id: 't16', title: 'Supernova', artistId: 'a4', albumId: 'alb4', duration: 296, trackNumber: 1, plays: 3200000, audioUrl: audioSamples[0] },
  { id: 't17', title: 'Pale Fire', artistId: 'a4', albumId: 'alb4', duration: 314, trackNumber: 2, plays: 2800000, audioUrl: audioSamples[1] },
  { id: 't18', title: 'Ashfall', artistId: 'a4', albumId: 'alb4', duration: 268, trackNumber: 3, plays: 1900000, audioUrl: audioSamples[2] },
  { id: 't19', title: 'Ghost Frequency', artistId: 'a4', albumId: 'alb4', duration: 342, trackNumber: 4, plays: 2300000, audioUrl: audioSamples[3] },
  { id: 't20', title: 'Orbit Decay', artistId: 'a4', albumId: 'alb4', duration: 278, trackNumber: 5, plays: 1700000, audioUrl: audioSamples[4] },

  // Golden Hour Theory - Meridian
  { id: 't21', title: 'Golden Hour', artistId: 'a5', albumId: 'alb5', duration: 251, trackNumber: 1, plays: 9700000, audioUrl: audioSamples[0] },
  { id: 't22', title: 'Sundown Theory', artistId: 'a5', albumId: 'alb5', duration: 287, trackNumber: 2, plays: 7200000, audioUrl: audioSamples[1] },
  { id: 't23', title: 'Amber Light', artistId: 'a5', albumId: 'alb5', duration: 232, trackNumber: 3, plays: 5600000, audioUrl: audioSamples[2] },
  { id: 't24', title: 'Warm Static', artistId: 'a5', albumId: 'alb5', duration: 264, trackNumber: 4, plays: 4100000, audioUrl: audioSamples[3] },
  { id: 't25', title: 'Dusk Protocol', artistId: 'a5', albumId: 'alb5', duration: 308, trackNumber: 5, plays: 3800000, audioUrl: audioSamples[4] },

  // Signal Loss - Voss
  { id: 't26', title: 'Signal Loss', artistId: 'a6', albumId: 'alb6', duration: 198, trackNumber: 1, plays: 15600000, audioUrl: audioSamples[0] },
  { id: 't27', title: 'Frequency War', artistId: 'a6', albumId: 'alb6', duration: 214, trackNumber: 2, plays: 11200000, audioUrl: audioSamples[1] },
  { id: 't28', title: 'Static Empire', artistId: 'a6', albumId: 'alb6', duration: 231, trackNumber: 3, plays: 8900000, audioUrl: audioSamples[2] },
  { id: 't29', title: 'Dark Energy', artistId: 'a6', albumId: 'alb6', duration: 187, trackNumber: 4, plays: 7400000, audioUrl: audioSamples[3] },
  { id: 't30', title: 'Broadcast', artistId: 'a6', albumId: 'alb6', duration: 245, trackNumber: 5, plays: 6200000, audioUrl: audioSamples[4] },
];

// ===== PLAYLISTS =====
export const playlists = [
  {
    id: 'pl1',
    title: 'Late Night Drive',
    description: 'Smooth vibes for the city at 3AM',
    gradient: 'linear-gradient(135deg, #0f2027 0%, #203a43 50%, #2c5364 100%)',
    trackIds: ['t1', 't6', 't11', 't21', 't26', 't7', 't12', 't22'],
    isOfficial: true,
    plays: 4200000,
  },
  {
    id: 'pl2',
    title: 'Focus Flow',
    description: 'Deep concentration, minimal distraction',
    gradient: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
    trackIds: ['t8', 't10', 't6', 't25', 't30', 't20'],
    isOfficial: true,
    plays: 6800000,
  },
  {
    id: 'pl3',
    title: 'Heartstrings',
    description: 'Songs that hit differently at night',
    gradient: 'linear-gradient(135deg, #ee0979 0%, #ff6a00 100%)',
    trackIds: ['t11', 't12', 't13', 't14', 't15', 't21', 't22'],
    isOfficial: true,
    plays: 9100000,
  },
  {
    id: 'pl4',
    title: 'Alter Ego',
    description: 'For when you feel invincible',
    gradient: 'linear-gradient(135deg, #8360c3 0%, #2ebf91 100%)',
    trackIds: ['t26', 't27', 't28', 't29', 't16', 't17'],
    isOfficial: true,
    plays: 3500000,
  },
  {
    id: 'pl5',
    title: 'Cloud Nine',
    description: 'Float above everything',
    gradient: 'linear-gradient(135deg, #a1c4fd 0%, #c2e9fb 100%)',
    trackIds: ['t1', 't2', 't5', 't9', 't21', 't23'],
    isOfficial: true,
    plays: 5600000,
  },
  {
    id: 'pl6',
    title: 'Liked Songs',
    description: 'Your personal collection',
    gradient: 'linear-gradient(135deg, #ff375f 0%, #ff6b8a 100%)',
    trackIds: ['t1', 't11', 't26', 't21', 't6'],
    isOfficial: false,
    plays: 0,
  },
];

// ===== CATEGORIES =====
export const categories = [
  { id: 'c1', name: 'Electronic', gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)', icon: '⚡' },
  { id: 'c2', name: 'Hip-Hop', gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)', icon: '🎤' },
  { id: 'c3', name: 'Indie Pop', gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', icon: '🌙' },
  { id: 'c4', name: 'R&B / Soul', gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)', icon: '🎵' },
  { id: 'c5', name: 'Alt Rock', gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)', icon: '🎸' },
  { id: 'c6', name: 'Jazz', gradient: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)', icon: '🎷' },
  { id: 'c7', name: 'Ambient', gradient: 'linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)', icon: '🌌' },
  { id: 'c8', name: 'Neo Soul', gradient: 'linear-gradient(135deg, #c94b4b 0%, #4b134f 100%)', icon: '🎹' },
  { id: 'c9', name: 'Synth Wave', gradient: 'linear-gradient(135deg, #373b44 0%, #4286f4 100%)', icon: '🔊' },
  { id: 'c10', name: 'Dream Pop', gradient: 'linear-gradient(135deg, #02aab0 0%, #00cdac 100%)', icon: '✨' },
  { id: 'c11', name: 'Chill Vibes', gradient: 'linear-gradient(135deg, #8360c3 0%, #2ebf91 100%)', icon: '🌊' },
  { id: 'c12', name: 'Focus', gradient: 'linear-gradient(135deg, #ee0979 0%, #ff6a00 100%)', icon: '🎯' },
];

// ===== HELPER FUNCTIONS =====
export function getArtistById(id) {
  return artists.find(a => a.id === id);
}

export function getAlbumById(id) {
  return albums.find(a => a.id === id);
}

export function getTrackById(id) {
  return tracks.find(t => t.id === id);
}

export function getPlaylistById(id) {
  return playlists.find(p => p.id === id);
}

export function getTracksByAlbum(albumId) {
  return tracks.filter(t => t.albumId === albumId);
}

export function getTracksByPlaylist(playlistId) {
  const playlist = getPlaylistById(playlistId);
  if (!playlist) return [];
  return playlist.trackIds.map(id => getTrackById(id)).filter(Boolean);
}

export function getTrackWithMeta(track) {
  if (!track) return null;
  // Already normalized (Supabase song) — artist/album are pre-computed objects
  if (track.artist && typeof track.artist === 'object') return track;
  return {
    ...track,
    artist: getArtistById(track.artistId),
    album: getAlbumById(track.albumId),
  };
}

export function searchAll(query) {
  if (!query || query.length < 1) return { tracks: [], artists: [], albums: [], playlists: [] };
  const q = query.toLowerCase();

  return {
    tracks: tracks.filter(t => {
      const artist = getArtistById(t.artistId);
      return t.title.toLowerCase().includes(q) || artist?.name.toLowerCase().includes(q);
    }).slice(0, 8),
    artists: artists.filter(a => a.name.toLowerCase().includes(q)).slice(0, 4),
    albums: albums.filter(a => {
      const artist = getArtistById(a.artistId);
      return a.title.toLowerCase().includes(q) || artist?.name.toLowerCase().includes(q);
    }).slice(0, 4),
    playlists: playlists.filter(p => p.title.toLowerCase().includes(q)).slice(0, 4),
  };
}

export function formatPlays(num) {
  if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`;
  if (num >= 1000) return `${(num / 1000).toFixed(0)}K`;
  return num.toString();
}

export const trendingTracks = tracks.slice(0, 10);
export const featuredPlaylists = playlists.slice(0, 6);
export const topArtists = artists.slice(0, 8);
export const newReleases = albums.slice(0, 6);
export const recentlyPlayed = [tracks[0], tracks[5], tracks[10], tracks[20], tracks[25]];
