import './Button.css';

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  icon,
  iconOnly = false,
  loading = false,
  disabled = false,
  className = '',
  onClick,
  type = 'button',
  ...props
}) {
  return (
    <button
      type={type}
      className={`btn btn-${variant} btn-${size} ${iconOnly ? 'btn-icon-only' : ''} ${loading ? 'btn-loading' : ''} ${className}`}
      disabled={disabled || loading}
      onClick={onClick}
      {...props}
    >
      {loading ? (
        <span className="btn-spinner" aria-label="Loading" />
      ) : (
        <>
          {icon && <span className="btn-icon">{icon}</span>}
          {!iconOnly && children}
        </>
      )}
    </button>
  );
}
