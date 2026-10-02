import { CONFIG } from '../config';

const Section1Birthday = () => {
  return (
    <div className="section text-center" style={{ minHeight: '80vh', padding: '2rem 1rem' }}>
      <h2 style={{ fontSize: 'clamp(1.8rem, 5vw, 2.5rem)', color: 'var(--text-muted)', marginBottom: '1rem', fontStyle: 'italic', padding: '0 1rem' }}>
        Today isn't just your birthday...
      </h2>
      <h3 style={{ fontSize: 'clamp(1.2rem, 4vw, 1.5rem)', color: 'var(--text-main)', marginBottom: '3rem', fontWeight: 300, padding: '0 1rem' }}>
        it's the day the world became a little more beautiful.
      </h3>
      
      <div style={{ position: 'relative', display: 'inline-block', width: '100%' }}>
        <h1 
          className="slide-up"
          style={{ 
            fontSize: 'clamp(3rem, 10vw, 5rem)', 
            color: 'var(--accent-pink)', 
            textShadow: '0 0 20px rgba(255,77,109,0.5)',
            marginBottom: '1rem',
            lineHeight: 1.2
          }}
        >
          Happy Birthday, {CONFIG.girlName} ❤️
        </h1>
      </div>
      
      <p style={{ marginTop: '2rem', color: 'var(--text-muted)', opacity: 0.8, fontStyle: 'italic', fontSize: 'clamp(0.9rem, 3vw, 1rem)' }}>
        Scroll down to continue our story...
      </p>
    </div>
  );
};

export default Section1Birthday;
