import { useState, useEffect } from 'react';
import { CONFIG } from '../config';
import { Heart } from 'lucide-react';

const OpeningScreen = ({ onStart }) => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const calculateTimeLeft = () => {
      // Create date object for midnight of the birthday in user's local timezone
      const targetDate = new Date(CONFIG.birthdayDate);
      // Ensure it's for the current or next upcoming birthday
      const now = new Date();
      targetDate.setFullYear(now.getFullYear());
      
      if (now > targetDate && now.getDate() !== targetDate.getDate()) {
        targetDate.setFullYear(now.getFullYear() + 1);
      }

      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      }
    };

    const timer = setInterval(calculateTimeLeft, 1000);
    calculateTimeLeft();

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="section text-center fade-in">
      <div style={{ marginBottom: '4rem' }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem', fontStyle: 'italic', color: 'var(--accent-gold)' }}>
          "There are 365 days in a year...
        </h1>
        <h2 style={{ fontSize: '2rem', color: 'var(--text-muted)' }}>
          but one day will always be special to me."
        </h2>
      </div>

      {/* Countdown */}
      <div style={{ display: 'flex', gap: '1.5rem', marginBottom: '4rem', justifyContent: 'center' }}>
        {Object.entries(timeLeft).map(([unit, value]) => (
          <div key={unit} className="glass" style={{ padding: '1.5rem', borderRadius: '1rem', minWidth: '90px' }}>
            <div style={{ fontSize: '2.5rem', fontWeight: 'bold', fontFamily: 'var(--font-serif)', color: 'var(--accent-pink)' }}>
              {value}
            </div>
            <div style={{ fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '2px', color: 'var(--text-muted)' }}>
              {unit}
            </div>
          </div>
        ))}
      </div>

      <button onClick={onStart} className="btn-primary" style={{ animation: 'pulse 2s infinite' }}>
        Open Your Surprise 💌
      </button>
    </div>
  );
};

export default OpeningScreen;
