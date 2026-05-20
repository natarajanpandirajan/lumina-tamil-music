const Icon = ({ size = 20, children, style, ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={style}
    aria-hidden="true"
    {...props}
  >
    {children}
  </svg>
);

export const PlayIcon = ({ size }) => (
  <Icon size={size}>
    <path d="M6 4.75a.75.75 0 0 0-1.5 0v14.5a.75.75 0 0 0 1.5 0V4.75zM19.5 12 8 5v14l11.5-7z" fill="currentColor" />
  </Icon>
);

export const PauseIcon = ({ size }) => (
  <Icon size={size}>
    <path d="M6.75 5.25a.75.75 0 0 1 .75.75v12a.75.75 0 0 1-1.5 0V6a.75.75 0 0 1 .75-.75zm10 0a.75.75 0 0 1 .75.75v12a.75.75 0 0 1-1.5 0V6a.75.75 0 0 1 .75-.75z" fill="currentColor" />
  </Icon>
);

export const SkipNextIcon = ({ size }) => (
  <Icon size={size}>
    <path d="M6 5.75a.75.75 0 0 0-1.5 0v12.5a.75.75 0 0 0 1.5 0V5.75zm1.5 6.25 9.5 6V6l-9.5 6zm11 6.25a.75.75 0 0 1-1.5 0V5.75a.75.75 0 0 1 1.5 0v12.5z" fill="currentColor" />
  </Icon>
);

export const SkipPrevIcon = ({ size }) => (
  <Icon size={size}>
    <path d="M18 18.25a.75.75 0 0 0 1.5 0V5.75a.75.75 0 0 0-1.5 0v12.5zm-1.5-6.25L7 6v12l9.5-6zM5.5 18.25a.75.75 0 0 1-1.5 0V5.75a.75.75 0 0 1 1.5 0v12.5z" fill="currentColor" />
  </Icon>
);

export const ShuffleIcon = ({ size }) => (
  <Icon size={size}>
    <path d="M16.586 5H18a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0v-.001l-1.46.001-2.643 3.168a.75.75 0 1 1-1.154-.96L14.336 6H12.69A5.75 5.75 0 0 0 8.1 8.58l-2.19 2.627a.75.75 0 0 1-1.154-.96l2.19-2.628A7.25 7.25 0 0 1 12.69 4.5h1.632l-2.178-2.613a.75.75 0 1 1 1.154-.96L16.586 5zm.954 8.832.46.552V14a1 1 0 1 1 2 0v1a1 1 0 0 1-1 1h-1.414L13.702 12.9a.75.75 0 1 1 1.154-.96l2.684 3.226V14.5a1 1 0 0 1-2 0v-.136l-.46-.552.46-.98zM4.756 13.247l2.19 2.627A5.75 5.75 0 0 0 11.51 18.5H12a.75.75 0 0 1 0 1.5h-.49a7.25 7.25 0 0 1-5.754-2.872l-2.19-2.628a.75.75 0 0 1 1.19-.253z" fill="currentColor" />
  </Icon>
);

export const RepeatIcon = ({ size }) => (
  <Icon size={size}>
    <path d="M7.5 3.75A3.75 3.75 0 0 0 3.75 7.5v.75H2.5a.75.75 0 0 0 0 1.5h1.25v.75a3.75 3.75 0 0 0 3.75 3.75h9a3.75 3.75 0 0 0 3.75-3.75V7.5a3.75 3.75 0 0 0-3.75-3.75h-9zM5.25 7.5A2.25 2.25 0 0 1 7.5 5.25h9A2.25 2.25 0 0 1 18.75 7.5v3a2.25 2.25 0 0 1-2.25 2.25h-9A2.25 2.25 0 0 1 5.25 10.5V7.5z" fill="currentColor" />
    <path d="M3.75 15v.75a3.75 3.75 0 0 0 3.75 3.75h9a3.75 3.75 0 0 0 3.75-3.75V15h1.25a.75.75 0 0 0 0-1.5H20.25V12.75a.75.75 0 0 0-1.5 0V13.5H5.25v-.75a.75.75 0 0 0-1.5 0V13.5H2.5a.75.75 0 0 0 0 1.5H3.75z" fill="currentColor" />
  </Icon>
);

export const HeartIcon = ({ size, filled }) => (
  <Icon size={size}>
    {filled ? (
      <path d="M12 21.593c-.5-.3-5.15-3.64-6.97-5.52a7 7 0 1 1 9.94-9.94l.03.03.03-.03a7 7 0 0 1 9.94 9.94c-1.82 1.88-6.47 5.22-6.97 5.52-.31.17-.68.17-.99 0z" fill="currentColor" />
    ) : (
      <path d="M12.01 21.47L11.3 21c-.5-.3-5.15-3.64-6.97-5.52a7 7 0 1 1 9.94-9.94l.03.03.03-.03a7 7 0 0 1 9.94 9.94c-1.82 1.88-6.47 5.22-6.97 5.52-.31.17-.68.17-.99 0zm-6.15-7.25c1.35 1.45 4.27 3.7 6.14 5.04 1.87-1.34 4.79-3.59 6.14-5.04a5.5 5.5 0 0 0-7.77-7.77l-.37.37-.37-.37a5.5 5.5 0 0 0-7.77 7.77z" fill="currentColor" />
    )}
  </Icon>
);

export const VolumeIcon = ({ size, level = 'high' }) => (
  <Icon size={size}>
    {level === 'mute' && (
      <path d="M3.293 4.293a1 1 0 0 1 1.414 0L12 11.586l7.293-7.293a1 1 0 1 1 1.414 1.414L13.414 13l7.293 7.293a1 1 0 0 1-1.414 1.414L12 14.414l-7.293 7.293a1 1 0 0 1-1.414-1.414L10.586 13 3.293 5.707a1 1 0 0 1 0-1.414z" fill="currentColor" />
    )}
    {level === 'low' && (
      <path d="M6 8.25a.75.75 0 0 1 .75-.75H10a.75.75 0 0 1 .75.75v7.5a.75.75 0 0 1-.75.75H6.75A.75.75 0 0 1 6 15.75v-7.5zm5.25-3.22a.75.75 0 0 1 1.28.53v12.88a.75.75 0 0 1-1.28.53L8.56 16.5H7.5v-9h1.06l2.69-2.47zm4.5 4.68a.75.75 0 0 1 1.04-.2 6 6 0 0 1 0 9.98.75.75 0 1 1-.84-1.24 4.5 4.5 0 0 0 0-7.5.75.75 0 0 1-.2-1.04z" fill="currentColor" />
    )}
    {level === 'high' && (
      <path d="M13.5 4.06c0-.81-1-.81-1.28-.53L9.56 6H7.5a.75.75 0 0 0-.75.75v10.5c0 .414.336.75.75.75h2.06l2.66 2.47c.28.28 1.28.28 1.28-.53V4.06zM15 9.14a.75.75 0 0 1 1.04-.2 6 6 0 0 1 0 9.98.75.75 0 0 1-.84-1.24 4.5 4.5 0 0 0 0-7.5.75.75 0 0 1-.2-1.04zm2.5-3.08a.75.75 0 1 1 1.06 1.06 9 9 0 0 1 0 12.72.75.75 0 1 1-1.06-1.06 7.5 7.5 0 0 0 0-10.6z" fill="currentColor" />
    )}
  </Icon>
);

export const HomeIcon = ({ size }) => (
  <Icon size={size}>
    <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689z" fill="currentColor" />
    <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432z" fill="currentColor" />
  </Icon>
);

export const SearchIcon = ({ size }) => (
  <Icon size={size}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607z" stroke="currentColor" />
  </Icon>
);

export const LibraryIcon = ({ size }) => (
  <Icon size={size}>
    <path d="M11.25 4.533A9.707 9.707 0 0 0 6 3a9.735 9.735 0 0 0-3.25.555.75.75 0 0 0-.5.707v14.25a.75.75 0 0 0 1 .707A8.237 8.237 0 0 1 6 18.75c1.995 0 3.823.707 5.25 1.886V4.533zM12.75 20.636A8.214 8.214 0 0 1 18 18.75c.966 0 1.89.166 2.75.47a.75.75 0 0 0 1-.708V4.262a.75.75 0 0 0-.5-.707A9.735 9.735 0 0 0 18 3a9.707 9.707 0 0 0-5.25 1.533v16.103z" fill="currentColor" />
  </Icon>
);

export const BrowseIcon = ({ size }) => (
  <Icon size={size}>
    <path d="M3.375 3C2.339 3 1.5 3.84 1.5 4.875v.75c0 1.036.84 1.875 1.875 1.875h17.25c1.035 0 1.875-.84 1.875-1.875v-.75C22.5 3.839 21.66 3 20.625 3H3.375z" fill="currentColor" />
    <path fillRule="evenodd" d="m3.087 9 .54 9.176A3 3 0 0 0 6.62 21h10.757a3 3 0 0 0 2.995-2.824L20.913 9H3.087zm6.163 3.75A.75.75 0 0 1 10 12h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75z" fill="currentColor" clipRule="evenodd" />
  </Icon>
);

export const PlusIcon = ({ size }) => (
  <Icon size={size}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.5v15m7.5-7.5h-15" stroke="currentColor" />
  </Icon>
);

export const DotsIcon = ({ size }) => (
  <Icon size={size}>
    <path d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5zM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5zM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5z" fill="currentColor" strokeWidth="1.5" stroke="currentColor" />
  </Icon>
);

export const ChevronRightIcon = ({ size }) => (
  <Icon size={size}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m8.25 4.5 7.5 7.5-7.5 7.5" stroke="currentColor" />
  </Icon>
);

export const ChevronLeftIcon = ({ size }) => (
  <Icon size={size}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.75 19.5 8.25 12l7.5-7.5" stroke="currentColor" />
  </Icon>
);

export const QueueIcon = ({ size }) => (
  <Icon size={size}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h10.5" stroke="currentColor" />
  </Icon>
);

export const CloseIcon = ({ size }) => (
  <Icon size={size}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18 18 6M6 6l12 12" stroke="currentColor" />
  </Icon>
);

export const CheckIcon = ({ size }) => (
  <Icon size={size}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m4.5 12.75 6 6 9-13.5" stroke="currentColor" />
  </Icon>
);

export const EyeIcon = ({ size }) => (
  <Icon size={size}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" stroke="currentColor" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" stroke="currentColor" />
  </Icon>
);

export const EyeOffIcon = ({ size }) => (
  <Icon size={size}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" stroke="currentColor" />
  </Icon>
);

export const MusicNoteIcon = ({ size }) => (
  <Icon size={size}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="m9 9 10.5-3m0 6.553v3.75a2.25 2.25 0 0 1-1.632 2.163l-1.32.377a1.803 1.803 0 1 1-.99-3.467l2.31-.66a2.25 2.25 0 0 0 1.632-2.163zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 0 1-1.632 2.163l-1.32.377a1.803 1.803 0 0 1-.99-3.467l2.31-.66A2.25 2.25 0 0 0 9 15.553z" stroke="currentColor" />
  </Icon>
);

export const SparkleIcon = ({ size }) => (
  <Icon size={size}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09zM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456zM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423z" stroke="currentColor" />
  </Icon>
);

export const ArrowRightIcon = ({ size }) => (
  <Icon size={size}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" stroke="currentColor" />
  </Icon>
);

export const UserIcon = ({ size }) => (
  <Icon size={size}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0zM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632z" stroke="currentColor" />
  </Icon>
);

export const LogOutIcon = ({ size }) => (
  <Icon size={size}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9" stroke="currentColor" />
  </Icon>
);

export const StarIcon = ({ size, filled }) => (
  <Icon size={size}>
    {filled ? (
      <path d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005z" fill="currentColor" />
    ) : (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5z" stroke="currentColor" />
    )}
  </Icon>
);

export const LyricsIcon = ({ size }) => (
  <Icon size={size}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9z" stroke="currentColor" />
  </Icon>
);

export const GlobeIcon = ({ size }) => (
  <Icon size={size}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" stroke="currentColor" />
  </Icon>
);

export const Equalizer = ({ playing }) => (
  <span className="equalizer" aria-label={playing ? 'Playing' : 'Paused'}>
    <span className="eq-bar" style={{ animationPlayState: playing ? 'running' : 'paused', animationName: 'equalizer1' }} />
    <span className="eq-bar" style={{ animationPlayState: playing ? 'running' : 'paused', animationName: 'equalizer2' }} />
    <span className="eq-bar" style={{ animationPlayState: playing ? 'running' : 'paused', animationName: 'equalizer3' }} />
  </span>
);
