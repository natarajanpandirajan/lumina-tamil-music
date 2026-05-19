import './Skeleton.css';

export default function Skeleton({ width, height, radius, className = '' }) {
  return (
    <span
      className={`skeleton ${className}`}
      style={{
        width: width || '100%',
        height: height || '16px',
        borderRadius: radius || 'var(--radius-md)',
      }}
      aria-hidden="true"
    />
  );
}

export function SkeletonCard() {
  return (
    <div className="skeleton-card">
      <Skeleton height="160px" radius="var(--radius-lg)" />
      <div className="skeleton-card-info">
        <Skeleton height="14px" width="80%" />
        <Skeleton height="12px" width="55%" />
      </div>
    </div>
  );
}

export function SkeletonTrack() {
  return (
    <div className="skeleton-track">
      <Skeleton width="40px" height="40px" radius="var(--radius-md)" />
      <div className="skeleton-track-info">
        <Skeleton height="13px" width="60%" />
        <Skeleton height="11px" width="40%" />
      </div>
      <Skeleton height="11px" width="36px" className="skeleton-duration" />
    </div>
  );
}
