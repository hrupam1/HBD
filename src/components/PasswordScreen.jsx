import { useState } from 'react';
import { CONFIG } from '../config';
import { Lock, Unlock } from 'lucide-react';

const PasswordScreen = ({ onUnlock }) => {
  const [input, setInput] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.toLowerCase().trim() === CONFIG.password.toLowerCase().trim()) {
      onUnlock();
    } else {
      setError(true);
      setTimeout(() => setError(false), 2000);
      setInput('');
    }
  };

  return (
    <div className="section" style={{ zIndex: 20 }}>
      <div className="glass p-8 rounded-2xl text-center" style={{ padding: '3rem', borderRadius: '1.5rem', maxWidth: '400px', width: '90%' }}>
        <h2 style={{ marginBottom: '1rem', fontSize: '2rem' }}>Only for You</h2>
        <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>Enter our little secret to continue...</p>
        
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <input
            type="password"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Secret Password"
            style={{
              padding: '12px 20px',
              borderRadius: '30px',
              border: error ? '2px solid var(--accent-red)' : '1px solid rgba(255,255,255,0.2)',
              background: 'rgba(0,0,0,0.2)',
              color: 'white',
              fontFamily: 'var(--font-sans)',
              fontSize: '1rem',
              outline: 'none',
              textAlign: 'center',
              transition: 'border 0.3s ease'
            }}
          />
          {error && <span style={{ color: 'var(--accent-red)', fontSize: '0.9rem' }}>Incorrect, try again ❤️</span>}
          
          <button type="submit" className="btn-primary" style={{ marginTop: '1rem' }}>
            {error ? <Lock size={20} /> : <Unlock size={20} />} Unlock
          </button>
        </form>
      </div>
    </div>
  );
};

export default PasswordScreen;
