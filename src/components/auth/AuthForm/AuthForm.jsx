import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../../context/AuthContext';
import { EyeIcon, EyeOffIcon, MusicNoteIcon } from '../../ui/Icons/Icons';
import './AuthForm.css';

export default function AuthForm({ mode = 'login' }) {
  const { login, signup, isLoading, authError, setAuthError } = useAuth();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', password: '' });

  const isSignup = mode === 'signup';

  const handleChange = (e) => {
    setAuthError('');
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const success = isSignup ? await signup(form) : await login(form);
    if (success) navigate('/');
  };

  return (
    <div className="auth-card">
      <div className="auth-card-header">
        <div className="auth-icon-wrap">
          <MusicNoteIcon size={24} />
        </div>
        <h1 className="auth-heading">
          {isSignup ? 'Create your account' : 'Welcome back'}
        </h1>
        <p className="auth-subheading">
          {isSignup
            ? 'Join Lumina and discover music you love'
            : 'Sign in to continue your listening experience'
          }
        </p>
      </div>

      <form className="auth-form" onSubmit={handleSubmit} noValidate>
        {isSignup && (
          <div className="auth-field">
            <label htmlFor="name" className="auth-label">Full name</label>
            <input
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              className="auth-input"
              placeholder="Your name"
              value={form.name}
              onChange={handleChange}
              required
            />
          </div>
        )}

        <div className="auth-field">
          <label htmlFor="email" className="auth-label">Email address</label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            className="auth-input"
            placeholder="you@example.com"
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="auth-field">
          <label htmlFor="password" className="auth-label">Password</label>
          <div className="auth-input-wrap">
            <input
              id="password"
              name="password"
              type={showPassword ? 'text' : 'password'}
              autoComplete={isSignup ? 'new-password' : 'current-password'}
              className="auth-input"
              placeholder={isSignup ? 'At least 6 characters' : 'Your password'}
              value={form.password}
              onChange={handleChange}
              required
            />
            <button
              type="button"
              className="auth-eye"
              onClick={() => setShowPassword(v => !v)}
              aria-label={showPassword ? 'Hide password' : 'Show password'}
            >
              {showPassword ? <EyeOffIcon size={16} /> : <EyeIcon size={16} />}
            </button>
          </div>
        </div>

        {authError && (
          <div className="auth-error" role="alert">{authError}</div>
        )}

        <button
          type="submit"
          className="auth-submit"
          disabled={isLoading}
        >
          {isLoading ? (
            <span className="auth-spinner" />
          ) : (
            isSignup ? 'Create Account' : 'Sign In'
          )}
        </button>
      </form>

      <p className="auth-switch">
        {isSignup ? (
          <>Already have an account? <Link to="/auth/login" className="auth-switch-link">Sign in</Link></>
        ) : (
          <>Don&apos;t have an account? <Link to="/auth/signup" className="auth-switch-link">Sign up free</Link></>
        )}
      </p>
    </div>
  );
}
