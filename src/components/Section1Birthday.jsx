import { CONFIG } from '../config';

const Section1Birthday = () => {
  return (
    <div className="section text-center" style={{ minHeight: '80vh' }}>
      <h2 style={{ fontSize: '2.5rem', color: 'var(--text-muted)', marginBottom: '1rem', fontStyle: 'italic' }}>
        Today isn't just your birthday...
      </h2>
      <h3 style={{ fontSize: '1.5rem', color: 'var(--text-main)', marginBottom: '3rem', fontWeight: 300 }}>
        it's the day the world became a little more beautiful.
      </h3>
      
      <div style={{ position: 'relative', display: 'inline-block' }}>
        <h1 
          className="slide-up"
          style={{ 
            fontSize: '5rem', 
            color: 'var(--accent-pink)', 
            textShadow: '0 0 20px rgba(255,77,109,0.5)',
            marginBottom: '1rem'
          }}
        >
          Happy Birthday, {CONFIG.girlName} ❤️
        </h1>
      </div>
      
      <p style={{ marginTop: '2rem', color: 'var(--text-muted)', opacity: 0.8, fontStyle: 'italic' }}>
        Scroll down to continue our story...
      </p>
    </div>
  );
};

export default Section1Birthday;
