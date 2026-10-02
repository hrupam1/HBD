import { CONFIG } from '../config';

const OpeningScreen = ({ onStart }) => {
  return (
    <div className="section text-center fade-in">
      <div style={{ marginBottom: '4rem' }}>
        <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', marginBottom: '1rem', fontStyle: 'italic', color: 'var(--accent-gold)' }}>
          "There are 365 days in a year...
        </h1>
        <h2 style={{ fontSize: 'clamp(1.5rem, 4vw, 2rem)', color: 'var(--text-muted)' }}>
          but one day will always be special to me."
        </h2>
      </div>

      <button onClick={onStart} className="btn-primary" style={{ animation: 'pulse 2s infinite', marginTop: '2rem' }}>
        Open Your Surprise 💌
      </button>
    </div>
  );
};

export default OpeningScreen;
