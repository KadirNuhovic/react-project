import React, { useState, useEffect } from 'react';
import './SignAuth.css';

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="clock-container fade-in">
      <h2 className="clock-time">
        {time.toLocaleTimeString('sr-RS', { timeZone: 'Europe/Belgrade', hour: '2-digit', minute: '2-digit' })}
      </h2>
      <p className="clock-city">Novi Pazar</p>
      <p className="clock-date">
        {time.toLocaleDateString('en-GB', { weekday: 'long', day: 'numeric', month: 'short' })}
      </p>
    </div>
  );
};

const SignAuth = ({ onSignIn, onSignUp, onGuest }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    
    if (isLogin) {
      const err = onSignIn(username, password);
      if (err) setError(err);
    } else {
      if (password !== confirm) {
        setError('Passwords do not match!');
        return;
      }
      const err = onSignUp(username, password);
      if (err) setError(err);
    }
  };

  return (
    <div className="modern-bg modern-center auth-wrapper">
      <div className="auth-container">
        
        {/* Dugmad za izbor (Toggle) */}
        <div className="modern-auth-btns">
          <button 
            className={`toggle-btn ${isLogin ? 'active' : ''}`}
            onClick={() => { setIsLogin(true); setError(''); }}
          >
            Sign In
          </button>
          <button 
            className={`toggle-btn ${!isLogin ? 'active' : ''}`}
            onClick={() => { setIsLogin(false); setError(''); }}
          >
            Sign Up
          </button>
        </div>

        <div className="auth-form-wrapper fade-in" key={isLogin ? 'login' : 'register'}>
          <h2>{isLogin ? 'Welcome Back!' : 'Join Us'}</h2>
          
          <form className="auth-form" onSubmit={handleSubmit}>
            <input type="text" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} required />
            <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} required />
            {!isLogin && <input type="password" placeholder="Confirm Password" value={confirm} onChange={e => setConfirm(e.target.value)} required />}
            
            {error && <div className="auth-error">{error}</div>}
            <button type="submit">{isLogin ? 'Sign In' : 'Sign Up'}</button>
          </form>

          <div className="guest-section">
            <div className="divider">
              <span>or</span>
            </div>
            <button type="button" className="guest-btn" onClick={onGuest}>
              Continue as Guest
            </button>
          </div>
        </div>
      </div>
      <Clock />
    </div>
  );
};

export default SignAuth;