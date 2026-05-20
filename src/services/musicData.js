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
  { id: 'a1', name: 'Nova Sable', gradient: artworkGradients[0], genre: 'Indie Pop', followers: '2.4M', verified: true, language: 'English' },
  { id: 'a2', name: 'Echo Drift', gradient: artworkGradients[1], genre: 'Electronic', followers: '1.8M', verified: true, language: 'English' },
  { id: 'a3', name: 'Lyra Chen', gradient: artworkGradients[2], genre: 'R&B Soul', followers: '4.1M', verified: true, language: 'English' },
  { id: 'a4', name: 'The Pale Fires', gradient: artworkGradients[3], genre: 'Alt Rock', followers: '890K', verified: false, language: 'English' },
  { id: 'a5', name: 'Meridian', gradient: artworkGradients[4], genre: 'Neo Soul', followers: '3.2M', verified: true, language: 'English' },
  { id: 'a6', name: 'Voss', gradient: artworkGradients[5], genre: 'Hip-Hop', followers: '5.7M', verified: true, language: 'English' },
  { id: 'a7', name: 'Celeste Blue', gradient: artworkGradients[6], genre: 'Dream Pop', followers: '1.1M', verified: false, language: 'English' },
  { id: 'a8', name: 'Onyx Grove', gradient: artworkGradients[7], genre: 'Jazz Fusion', followers: '620K', verified: true, language: 'English' },
  { id: 'a9', name: 'Phantom Code', gradient: artworkGradients[8], genre: 'Synth Wave', followers: '2.9M', verified: true, language: 'English' },
  { id: 'a10', name: 'Aurora Haze', gradient: artworkGradients[9], genre: 'Ambient', followers: '750K', verified: false, language: 'English' },
  // Tamil Artists
  { id: 'ta1', name: 'A.R. Rahman', gradient: 'linear-gradient(135deg, #f7971e 0%, #ffd200 100%)', genre: 'Melody', followers: '12.4M', verified: true, language: 'Tamil' },
  { id: 'ta2', name: 'Yuvan Shankar Raja', gradient: 'linear-gradient(135deg, #c94b4b 0%, #4b134f 100%)', genre: 'Melody', followers: '8.6M', verified: true, language: 'Tamil' },
  { id: 'ta3', name: 'Anirudh Ravichander', gradient: 'linear-gradient(135deg, #ee0979 0%, #ff6a00 100%)', genre: 'Mass', followers: '15.2M', verified: true, language: 'Tamil' },
  { id: 'ta4', name: 'Harris Jayaraj', gradient: 'linear-gradient(135deg, #02aab0 0%, #00cdac 100%)', genre: 'Melody', followers: '6.3M', verified: true, language: 'Tamil' },
  { id: 'ta5', name: 'D. Imman', gradient: 'linear-gradient(135deg, #8360c3 0%, #2ebf91 100%)', genre: 'Devotional', followers: '4.8M', verified: true, language: 'Tamil' },
];

// ===== ALBUMS =====
export const albums = [
  { id: 'alb1', title: 'Neon Solitude', artistId: 'a1', gradient: artworkGradients[0], year: 2025, genre: 'Indie Pop', trackCount: 12, language: 'English' },
  { id: 'alb2', title: 'Fractured Light', artistId: 'a2', gradient: artworkGradients[1], year: 2025, genre: 'Electronic', trackCount: 10, language: 'English' },
  { id: 'alb3', title: 'Silk & Smoke', artistId: 'a3', gradient: artworkGradients[2], year: 2024, genre: 'R&B Soul', trackCount: 14, language: 'English' },
  { id: 'alb4', title: 'Dead Stars Burning', artistId: 'a4', gradient: artworkGradients[3], year: 2025, genre: 'Alt Rock', trackCount: 11, language: 'English' },
  { id: 'alb5', title: 'Golden Hour Theory', artistId: 'a5', gradient: artworkGradients[4], year: 2024, genre: 'Neo Soul', trackCount: 13, language: 'English' },
  { id: 'alb6', title: 'Signal Loss', artistId: 'a6', gradient: artworkGradients[5], year: 2025, genre: 'Hip-Hop', trackCount: 16, language: 'English' },
  { id: 'alb7', title: 'Watercolour Dreams', artistId: 'a7', gradient: artworkGradients[6], year: 2024, genre: 'Dream Pop', trackCount: 9, language: 'English' },
  { id: 'alb8', title: 'Midnight Theorem', artistId: 'a8', gradient: artworkGradients[7], year: 2025, genre: 'Jazz Fusion', trackCount: 8, language: 'English' },
  { id: 'alb9', title: 'Ultraviolet Static', artistId: 'a9', gradient: artworkGradients[8], year: 2025, genre: 'Synth Wave', trackCount: 12, language: 'English' },
  { id: 'alb10', title: 'Vapor Atlas', artistId: 'a10', gradient: artworkGradients[9], year: 2024, genre: 'Ambient', trackCount: 7, language: 'English' },
  // Tamil Albums
  { id: 'talb1', title: 'Roja', artistId: 'ta1', gradient: 'linear-gradient(135deg, #f7971e 0%, #ffd200 100%)', year: 1992, genre: 'Melody', trackCount: 6, language: 'Tamil' },
  { id: 'talb2', title: '7G Rainbow Colony', artistId: 'ta2', gradient: 'linear-gradient(135deg, #c94b4b 0%, #4b134f 100%)', year: 2004, genre: 'Melody', trackCount: 7, language: 'Tamil' },
  { id: 'talb3', title: 'Vikram', artistId: 'ta3', gradient: 'linear-gradient(135deg, #ee0979 0%, #ff6a00 100%)', year: 2022, genre: 'Mass', trackCount: 8, language: 'Tamil' },
  { id: 'talb4', title: 'Ghajini', artistId: 'ta4', gradient: 'linear-gradient(135deg, #02aab0 0%, #00cdac 100%)', year: 2005, genre: 'Melody', trackCount: 6, language: 'Tamil' },
  { id: 'talb5', title: 'Viswasam', artistId: 'ta5', gradient: 'linear-gradient(135deg, #8360c3 0%, #2ebf91 100%)', year: 2019, genre: 'Melody', trackCount: 6, language: 'Tamil' },
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
  // Neon Solitude - Nova Sable (English)
  { id: 't1', title: 'Neon Solitude', artistId: 'a1', albumId: 'alb1', duration: 214, trackNumber: 1, plays: 8420000, audioUrl: audioSamples[0], language: 'English',
    lyrics: `[00:00.00]
[00:04.50]City lights are fading out
[00:09.20]I'm standing in the neon glow
[00:14.10]The streets don't make a sound tonight
[00:19.00]Just echoes where you used to go
[00:24.00]
[00:26.50]I told myself I'd be okay
[00:31.80]But every light reminds me of your name
[00:38.00]
[00:40.20]In my neon solitude
[00:44.80]I'm painting shadows just for you
[00:49.50]The color bleeds into the night
[00:54.20]A lonely beautiful, a borrowed light
[00:59.00]Neon solitude, neon solitude
[01:06.00]
[01:12.00]The rain is writing on the glass
[01:16.80]The ghosts of us are passing by
[01:21.50]I press my hand against the cold
[01:26.30]And watch the world blur into sky
[01:31.00]
[01:33.50]I told myself I'd be okay
[01:38.80]But every light reminds me of your name
[01:44.00]
[01:46.20]In my neon solitude
[01:50.80]I'm painting shadows just for you
[01:55.50]The color bleeds into the night
[02:00.20]A lonely beautiful, a borrowed light
[02:05.00]Neon solitude, neon solitude
[02:12.00]
[02:20.00]Maybe someday I'll stop counting stars
[02:26.50]Maybe someday distance won't feel so far
[02:33.00]But tonight I'm holding on to every dream
[02:39.50]In this city glowing at the seams
[02:46.00]
[02:52.00]In my neon solitude
[02:56.80]I'm painting shadows just for you
[03:01.50]The color bleeds into the night
[03:06.20]A lonely beautiful, a borrowed light
[03:11.00]Neon solitude, neon solitude
[03:18.00]
[03:26.00]Neon solitude...` },

  { id: 't2', title: 'Glass Houses', artistId: 'a1', albumId: 'alb1', duration: 198, trackNumber: 2, plays: 5130000, audioUrl: audioSamples[1], language: 'English' },
  { id: 't3', title: 'Meridian Blue', artistId: 'a1', albumId: 'alb1', duration: 241, trackNumber: 3, plays: 3870000, audioUrl: audioSamples[2], language: 'English' },
  { id: 't4', title: 'Ivory Static', artistId: 'a1', albumId: 'alb1', duration: 187, trackNumber: 4, plays: 2940000, audioUrl: audioSamples[3], language: 'English' },
  { id: 't5', title: 'Hollow Echo', artistId: 'a1', albumId: 'alb1', duration: 225, trackNumber: 5, plays: 4210000, audioUrl: audioSamples[4], language: 'English' },

  // Fractured Light - Echo Drift (English)
  { id: 't6', title: 'Fractured Light', artistId: 'a2', albumId: 'alb2', duration: 322, trackNumber: 1, plays: 7600000, audioUrl: audioSamples[0], language: 'English',
    lyrics: `[00:00.00]
[00:05.00]Through the static, through the haze
[00:10.20]I find your frequency
[00:16.00]
[00:20.00]Broken signals in the air
[00:25.40]A thousand voices, none of them there
[00:30.80]I tune the dial to find your sound
[00:36.20]But all I get is fractured ground
[00:42.00]
[00:46.00]Fractured light across the floor
[00:51.50]A spectrum I've been searching for
[00:57.00]Every wavelength, every shade
[01:02.50]Is just the ghost of what we made
[01:08.00]
[01:20.00]The prism splits what we once knew
[01:26.00]Into a hundred shades of blue
[01:32.00]I chase the arc before it fades
[01:38.00]Into the dark where silence stays
[01:44.00]
[01:48.00]Fractured light across the floor
[01:53.50]A spectrum I've been searching for
[01:59.00]Every wavelength, every shade
[02:04.50]Is just the ghost of what we made
[02:10.00]
[02:30.00]Fractured... fractured light
[02:38.00]Still searching for you in the night
[02:46.00]Fractured...
[02:54.00]Still searching...
[03:02.00]
[03:10.00]Fractured light...` },

  { id: 't7', title: 'Phase Shift', artistId: 'a2', albumId: 'alb2', duration: 285, trackNumber: 2, plays: 4900000, audioUrl: audioSamples[1], language: 'English' },
  { id: 't8', title: 'Harmonic Decay', artistId: 'a2', albumId: 'alb2', duration: 347, trackNumber: 3, plays: 3100000, audioUrl: audioSamples[2], language: 'English' },
  { id: 't9', title: 'Circuit Dreams', artistId: 'a2', albumId: 'alb2', duration: 264, trackNumber: 4, plays: 5800000, audioUrl: audioSamples[3], language: 'English' },
  { id: 't10', title: 'Lattice', artistId: 'a2', albumId: 'alb2', duration: 198, trackNumber: 5, plays: 2400000, audioUrl: audioSamples[4], language: 'English' },

  // Silk & Smoke - Lyra Chen (English)
  { id: 't11', title: 'Silk & Smoke', artistId: 'a3', albumId: 'alb3', duration: 234, trackNumber: 1, plays: 12500000, audioUrl: audioSamples[0], language: 'English',
    lyrics: `[00:00.00]
[00:05.50]Pour the evening into a glass
[00:10.80]Let the memories swim and pass
[00:16.20]Silk and smoke — that's all we are
[00:21.60]Two burning things beneath the stars
[00:27.00]
[00:30.00]Silk and smoke, silk and smoke
[00:35.20]We rise up beautiful and then we choke
[00:40.80]Hold me close before the fire goes cold
[00:46.40]Our love's a story that was never told
[00:52.00]
[01:02.00]Your voice is satin on my skin
[01:07.50]The kind of warmth that pulls me in
[01:13.00]But silk can tear and smoke can fade
[01:18.50]And we were built from things that gave
[01:24.00]
[01:27.00]Silk and smoke, silk and smoke
[01:32.20]We rise up beautiful and then we choke
[01:37.80]Hold me close before the fire goes cold
[01:43.40]Our love's a story that was never told
[01:49.00]
[01:58.00]I don't need the truth tonight
[02:03.50]Just wrap me in your half-light
[02:09.00]Silk and smoke don't last too long
[02:14.50]But God, you make me feel so strong
[02:20.00]
[02:24.00]Silk and smoke, silk and smoke
[02:29.20]We rise up beautiful and then we choke
[02:34.80]Hold me close before the fire goes cold
[02:40.40]Our love's a story that was never told
[02:46.00]
[02:52.00]Silk and smoke...
[02:58.00]Never told...` },

  { id: 't12', title: 'Velvet Hours', artistId: 'a3', albumId: 'alb3', duration: 261, trackNumber: 2, plays: 9800000, audioUrl: audioSamples[1], language: 'English' },
  { id: 't13', title: 'Golden Sigh', artistId: 'a3', albumId: 'alb3', duration: 218, trackNumber: 3, plays: 7300000, audioUrl: audioSamples[2], language: 'English' },
  { id: 't14', title: 'Slow Burn', artistId: 'a3', albumId: 'alb3', duration: 275, trackNumber: 4, plays: 8100000, audioUrl: audioSamples[3], language: 'English' },
  { id: 't15', title: 'Midnight Crush', artistId: 'a3', albumId: 'alb3', duration: 243, trackNumber: 5, plays: 6400000, audioUrl: audioSamples[4], language: 'English' },

  // Dead Stars Burning - The Pale Fires (English)
  { id: 't16', title: 'Supernova', artistId: 'a4', albumId: 'alb4', duration: 296, trackNumber: 1, plays: 3200000, audioUrl: audioSamples[0], language: 'English' },
  { id: 't17', title: 'Pale Fire', artistId: 'a4', albumId: 'alb4', duration: 314, trackNumber: 2, plays: 2800000, audioUrl: audioSamples[1], language: 'English' },
  { id: 't18', title: 'Ashfall', artistId: 'a4', albumId: 'alb4', duration: 268, trackNumber: 3, plays: 1900000, audioUrl: audioSamples[2], language: 'English' },
  { id: 't19', title: 'Ghost Frequency', artistId: 'a4', albumId: 'alb4', duration: 342, trackNumber: 4, plays: 2300000, audioUrl: audioSamples[3], language: 'English' },
  { id: 't20', title: 'Orbit Decay', artistId: 'a4', albumId: 'alb4', duration: 278, trackNumber: 5, plays: 1700000, audioUrl: audioSamples[4], language: 'English' },

  // Golden Hour Theory - Meridian (English)
  { id: 't21', title: 'Golden Hour', artistId: 'a5', albumId: 'alb5', duration: 251, trackNumber: 1, plays: 9700000, audioUrl: audioSamples[0], language: 'English',
    lyrics: `[00:00.00]
[00:06.00]The sun is pulling down behind the hills
[00:11.50]And painting everything in amber spills
[00:17.00]You're standing in the doorway, silhouette
[00:22.50]The kind of light I never will forget
[00:28.00]
[00:31.00]This moment's like a photograph
[00:36.50]A second I want back
[00:41.00]
[00:43.50]Golden hour, golden hour
[00:48.80]Stay a little longer in my golden hour
[00:54.50]The world can wait, just let the light fall down
[01:00.20]This is where I want to be found
[01:05.80]Golden hour
[01:10.00]
[01:20.00]We made our coffee, let the morning go
[01:25.50]Watched the shadows stretch and bend and flow
[01:31.00]You laughed and I swore time stood perfectly still
[01:36.50]In golden light cascading off the sill
[01:42.00]
[01:45.00]This moment's like a photograph
[01:50.50]A second I want back
[01:55.00]
[01:57.50]Golden hour, golden hour
[02:02.80]Stay a little longer in my golden hour
[02:08.50]The world can wait, just let the light fall down
[02:14.20]This is where I want to be found
[02:19.80]Golden hour
[02:24.00]
[02:30.00]I know these colors fade
[02:35.50]I know this warmth won't stay
[02:41.00]But I will hold this feeling
[02:46.50]Like the last gold of the day
[02:52.00]
[02:55.50]Golden hour, golden hour
[03:00.80]Stay a little longer in my golden hour
[03:06.50]The world can wait, just let the light fall down
[03:12.20]This is where I want to be found
[03:17.80]Golden hour...
[03:24.00]Golden hour...` },

  { id: 't22', title: 'Sundown Theory', artistId: 'a5', albumId: 'alb5', duration: 287, trackNumber: 2, plays: 7200000, audioUrl: audioSamples[1], language: 'English' },
  { id: 't23', title: 'Amber Light', artistId: 'a5', albumId: 'alb5', duration: 232, trackNumber: 3, plays: 5600000, audioUrl: audioSamples[2], language: 'English' },
  { id: 't24', title: 'Warm Static', artistId: 'a5', albumId: 'alb5', duration: 264, trackNumber: 4, plays: 4100000, audioUrl: audioSamples[3], language: 'English' },
  { id: 't25', title: 'Dusk Protocol', artistId: 'a5', albumId: 'alb5', duration: 308, trackNumber: 5, plays: 3800000, audioUrl: audioSamples[4], language: 'English' },

  // Signal Loss - Voss (English)
  { id: 't26', title: 'Signal Loss', artistId: 'a6', albumId: 'alb6', duration: 198, trackNumber: 1, plays: 15600000, audioUrl: audioSamples[0], language: 'English',
    lyrics: `[00:00.00]
[00:04.00]They cut the line at 3 AM
[00:08.50]I heard the silence loud
[00:13.00]
[00:17.00]I been broadcasting to empty air
[00:22.00]Sending out my signal, nobody there
[00:27.00]The frequency is dead, the tower's down
[00:32.00]My words just echoing to an empty town
[00:37.00]
[00:40.00]Signal loss, signal loss
[00:44.50]Nothing getting through at any cost
[00:49.00]Signal loss, signal loss
[00:53.50]I'm just talking to the static at the source
[00:58.00]
[01:08.00]You used to catch every single word
[01:13.00]My voice the only thing that you preferred
[01:18.00]Now I'm shouting into static white
[01:23.00]Losing you a little more each night
[01:28.00]
[01:31.00]Signal loss, signal loss
[01:35.50]Nothing getting through at any cost
[01:40.00]Signal loss, signal loss
[01:44.50]I'm just talking to the static at the source
[01:49.00]
[01:56.00]I sent a thousand messages, not one got through
[02:01.50]Built an empire out of signals just for you
[02:07.00]But empires fall when the power's cut
[02:12.50]And now I'm standing here with nothing but
[02:18.00]
[02:22.00]Signal loss...
[02:28.00]Just signal loss...
[02:34.00]Signal loss...` },

  { id: 't27', title: 'Frequency War', artistId: 'a6', albumId: 'alb6', duration: 214, trackNumber: 2, plays: 11200000, audioUrl: audioSamples[1], language: 'English' },
  { id: 't28', title: 'Static Empire', artistId: 'a6', albumId: 'alb6', duration: 231, trackNumber: 3, plays: 8900000, audioUrl: audioSamples[2], language: 'English' },
  { id: 't29', title: 'Dark Energy', artistId: 'a6', albumId: 'alb6', duration: 187, trackNumber: 4, plays: 7400000, audioUrl: audioSamples[3], language: 'English' },
  { id: 't30', title: 'Broadcast', artistId: 'a6', albumId: 'alb6', duration: 245, trackNumber: 5, plays: 6200000, audioUrl: audioSamples[4], language: 'English' },

  // Tamil Mock Tracks
  { id: 'tt1', title: 'Roja Jaaneman', artistId: 'ta1', albumId: 'talb1', duration: 298, trackNumber: 1, plays: 22000000, audioUrl: audioSamples[0], language: 'Tamil',
    lyrics: `[00:00.00]
[00:05.00]ரோஜா ஜானேமன்...
[00:10.00]ரோஜா ஜானேமன்...
[00:16.00]
[00:20.00]முல்லை மலரே, முல்லை மலரே
[00:26.50]வெள்ளை நிலாவே, வெள்ளை நிலாவே
[00:33.00]உன் காதல் மழையில் நானும் நனைந்தேன்
[00:39.50]உன் கண்கள் தேடி இங்கே வந்தேன்
[00:46.00]
[00:50.00]ரோஜா ஜானேமன், ரோஜா ஜானேமன்
[00:57.00]என் உயிர் தோழி, என் கனவு ராணி
[01:04.00]ரோஜா ஜானேமன்...
[01:12.00]
[01:20.00]காற்றில் உன் சத்தம் கேட்கிறேன் நான்
[01:26.50]கவலை மறந்து பாடுகிறேன் நான்
[01:33.00]வாழ்வில் நீ தான் என் வசந்தம்
[01:39.50]உன்னோடு என் வாழ்க்கை சுகந்தம்
[01:46.00]
[01:50.00]ரோஜா ஜானேமன், ரோஜா ஜானேமன்
[01:57.00]என் உயிர் தோழி, என் கனவு ராணி
[02:04.00]ரோஜா ஜானேமன்...` },

  { id: 'tt2', title: 'Munbe Vaa', artistId: 'ta1', albumId: 'talb1', duration: 312, trackNumber: 2, plays: 18500000, audioUrl: audioSamples[1], language: 'Tamil',
    lyrics: `[00:00.00]
[00:07.00]முன்பே வா என் அன்பே வா
[00:13.50]இந்த நேரம் நம் நேரம் வா
[00:20.00]கொஞ்சம் தூரம் வந்திடு
[00:26.50]மனசில் ஒரு பாடல் பாடு
[00:33.00]
[00:38.00]முன்பே வா... முன்பே வா...
[00:46.00]
[00:54.00]தாமரை மலர் போல் தோன்றினாய்
[01:00.50]தண்ணீரில் மலர் போல் மிதந்தாய்
[01:07.00]உன் சிரிப்பில் என் மனம் தோய்ந்தது
[01:13.50]உன் பார்வையில் என் உயிர் நாய்ந்தது
[01:20.00]
[01:25.00]முன்பே வா என் அன்பே வா...
[01:33.00]முன்பே வா... முன்பே வா...` },

  { id: 'tt3', title: 'Kannazhaga', artistId: 'ta2', albumId: 'talb2', duration: 267, trackNumber: 1, plays: 14200000, audioUrl: audioSamples[2], language: 'Tamil',
    lyrics: `[00:00.00]
[00:06.00]கண்ணழகா, கண்ணழகா
[00:12.50]என் கண்ணழகா
[00:18.00]
[00:22.00]நீ பார்க்கும் போது என் மனசு
[00:28.50]வானில் பறக்கும் ஒரு கிளி
[00:35.00]நீ சிரிக்கும் போது என் இதயம்
[00:41.50]பூத்து குலுங்கும் ஒரு மரம்
[00:48.00]
[00:52.00]கண்ணழகா, கண்ணழகா
[00:58.50]என்னோடு வா கண்ணழகா
[01:06.00]
[01:14.00]உன் பேரை சொல்ல வாயில்லை
[01:20.50]உன் முகம் மறக்க நினைவில்லை
[01:27.00]நீயின்றி நான் வாழ முடியாது
[01:33.50]உன்னோடு தான் என் பயணம்
[01:40.00]
[01:44.00]கண்ணழகா, கண்ணழகா
[01:50.50]என்னோடு வா கண்ணழகா
[01:58.00]கண்ணழகா...` },

  { id: 'tt4', title: 'Vinnai Thaandi Varuvaya', artistId: 'ta2', albumId: 'talb2', duration: 289, trackNumber: 2, plays: 19800000, audioUrl: audioSamples[3], language: 'Tamil',
    lyrics: `[00:00.00]
[00:06.00]வின்னை தாண்டி வருவாயா
[00:12.50]என்னை காண வருவாயா
[00:19.00]
[00:24.00]மேகம் கரைந்து மழை பொழியும்
[00:30.50]நிலவு வந்து நிழல் தரும்
[00:37.00]ஆனால் நீ வராவிட்டால்
[00:43.50]என் மனம் ஏங்கி அழும்
[00:50.00]
[00:54.00]வின்னை தாண்டி வருவாயா...
[01:02.00]
[01:14.00]ஆயிரம் நிலவு தோன்றினாலும்
[01:20.50]ஒரே ஒரு நீ போதும் எனக்கு
[01:27.00]ஆகாயம் முழுதும் நீ இருந்தால்
[01:33.50]வாழ்வே இனிக்கும் எனக்கு
[01:40.00]
[01:44.00]வின்னை தாண்டி வருவாயா...
[01:52.00]வின்னை தாண்டி வருவாயா...` },

  { id: 'tt5', title: 'Vikram BGM Theme', artistId: 'ta3', albumId: 'talb3', duration: 183, trackNumber: 1, plays: 31000000, audioUrl: audioSamples[4], language: 'Tamil' },
  { id: 'tt6', title: 'Pathala Pathala', artistId: 'ta3', albumId: 'talb3', duration: 245, trackNumber: 2, plays: 25600000, audioUrl: audioSamples[0], language: 'Tamil' },
  { id: 'tt7', title: 'Oru Murai Vanthu Paarthaya', artistId: 'ta4', albumId: 'talb4', duration: 278, trackNumber: 1, plays: 11400000, audioUrl: audioSamples[1], language: 'Tamil',
    lyrics: `[00:00.00]
[00:07.00]ஒரு முறை வந்து பார்த்தாயா
[00:13.50]என் மனம் தேடி வந்தாயா
[00:20.00]
[00:24.00]கண்ணில் கண்ணை வைத்தாயா
[00:30.50]இதயம் திருடி சென்றாயா
[00:37.00]ஒரு வார்த்தை சொல்லாமல்
[00:43.50]ஏன் இப்படி போனாயா
[00:50.00]
[00:54.00]ஒரு முறை வந்து பார்த்தாயா...
[01:02.00]
[01:14.00]காற்றாய் வந்தாய் காதல் மழையாய்
[01:20.50]மனசில் பூத்தாய் மலர் போலே
[01:27.00]இப்போது தூரம் நீ சென்றாலும்
[01:33.50]நினைவில் நீயே என்றென்றும்
[01:40.00]
[01:44.00]ஒரு முறை வந்து பார்த்தாயா...
[01:52.00]ஒரு முறை வந்து பார்த்தாயா...` },

  { id: 'tt8', title: 'Nenje Ezhu', artistId: 'ta5', albumId: 'talb5', duration: 234, trackNumber: 1, plays: 8900000, audioUrl: audioSamples[2], language: 'Tamil' },
  { id: 'tt9', title: 'Kannaana Kanney', artistId: 'ta5', albumId: 'talb5', duration: 312, trackNumber: 2, plays: 16700000, audioUrl: audioSamples[3], language: 'Tamil',
    lyrics: `[00:00.00]
[00:07.00]கண்ணான கண்ணே கண்ணான கண்ணே
[00:14.50]உன்னோட சிரிப்பு தான் என் வாழ்வே
[00:22.00]கண்ணான கண்ணே...
[00:30.00]
[00:36.00]தாலாட்டு பாட்டில் உனை வளர்த்தேன்
[00:42.50]மழலை வார்த்தையில் மனம் நிறைந்தேன்
[00:49.00]உன் ஒவ்வொரு அடியும் என் மனசில்
[00:55.50]நெஞ்சில் பதிந்த ஒரு கதையாச்சே
[01:02.00]
[01:07.00]கண்ணான கண்ணே கண்ணான கண்ணே
[01:14.50]உன்னோட சிரிப்பு தான் என் வாழ்வே
[01:22.00]
[01:32.00]வளர்ந்து பெரிதாகி நீ போனாலும்
[01:38.50]என் கண்ணில் நீ குழந்தையே தான்
[01:45.00]என் அன்பின் ஆழம் அளவிட முடியாது
[01:51.50]இந்த உலகில் நீயே என் உயிரே
[01:58.00]
[02:03.00]கண்ணான கண்ணே கண்ணான கண்ணே
[02:10.50]உன்னோட சிரிப்பு தான் என் வாழ்வே
[02:18.00]கண்ணான கண்ணே...` },

  { id: 'tt10', title: 'Kaadhal Ondru Kanden', artistId: 'ta4', albumId: 'talb4', duration: 256, trackNumber: 2, plays: 9300000, audioUrl: audioSamples[4], language: 'Tamil' },
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

export const englishTracks = tracks.filter(t => t.language === 'English');
export const tamilMockTracks = tracks.filter(t => t.language === 'Tamil');
export const trendingTracks = tracks.slice(0, 10);
export const featuredPlaylists = playlists.slice(0, 6);
export const topArtists = artists.slice(0, 12);
export const newReleases = albums.slice(0, 6);
export const tamilArtists = artists.filter(a => a.language === 'Tamil');
export const tamilAlbums = albums.filter(a => a.language === 'Tamil');
export const recentlyPlayed = [tracks[0], tracks[5], tracks[10], tracks[20], tracks[25]];
