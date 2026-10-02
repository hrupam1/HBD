import { useEffect, useState } from 'react';
import confetti from 'canvas-confetti';
import { CONFIG } from '../config';
import { motion, AnimatePresence } from 'framer-motion';

// Cute floating hearts background component
const FloatingHearts = () => {
  const elements = Array.from({ length: 30 });
  return (
    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', overflow: 'hidden', pointerEvents: 'none', zIndex: 1 }}>
      {elements.map((_, i) => (
        <motion.div
          key={i}
          initial={{ 
            y: '110vh', 
            x: `${Math.random() * 100}vw`,
            opacity: 0,
            scale: Math.random() * 0.5 + 0.5
          }}
          animate={{ 
            y: '-10vh',
            x: `${Math.random() * 100}vw`,
            opacity: [0, 1, 0],
            rotate: Math.random() * 360
          }}
          transition={{ 
            duration: Math.random() * 8 + 7,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: 'linear'
          }}
          style={{ 
            position: 'absolute', 
            color: ['#ff4d6d', '#ffb3c1', '#c9184a', '#ffffff'][Math.floor(Math.random() * 4)], 
            fontSize: `${Math.random() * 20 + 10}px`,
            filter: 'drop-shadow(0 0 5px rgba(255, 77, 109, 0.5))'
          }}
        >
          {['❤️', '💖', '✨', '💕', '💍'][Math.floor(Math.random() * 5)]}
        </motion.div>
      ))}
    </div>
  );
};

const FinalSurprise = () => {
  const [showLove, setShowLove] = useState(false);
  const [showProposal, setShowProposal] = useState(false);
  const [accepted, setAccepted] = useState(false);
  const [noPosition, setNoPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    fireConfetti();
    setTimeout(() => setShowLove(true), 4000);
  }, []);

  const fireConfetti = () => {
    const duration = 15 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    const interval = setInterval(function() {
      const timeLeft = animationEnd - Date.now();
      if (timeLeft <= 0) return clearInterval(interval);

      const particleCount = 50 * (timeLeft / duration);
      confetti({
        ...defaults, particleCount,
        origin: { x: Math.random(), y: Math.random() - 0.2 },
        colors: ['#ff4d6d', '#c9184a', '#e2c07d', '#ffffff']
      });
    }, 250);
  };

  const fireCelebrationConfetti = () => {
    const duration = 8 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 60, spread: 360, ticks: 100, zIndex: 1000 };

    const interval = setInterval(function() {
      const timeLeft = animationEnd - Date.now();
      if (timeLeft <= 0) return clearInterval(interval);
      
      const particleCount = 150 * (timeLeft / duration);
      confetti({
        ...defaults, particleCount,
        origin: { x: Math.random(), y: Math.random() - 0.2 },
        colors: ['#ff0000', '#ff4d6d', '#ffffff', '#ffd700', '#ffb3c1']
      });
    }, 200);
  };

  const handleNoHover = () => {
    let randomX = Math.floor(Math.random() * 500) - 250; 
    let randomY = Math.floor(Math.random() * 400) - 200;
    
    // Ensure it jumps a decent distance away
    if (Math.abs(randomX) < 120) randomX = randomX > 0 ? 150 : -150;
    if (Math.abs(randomY) < 100) randomY = randomY > 0 ? 120 : -120;

    setNoPosition({ x: randomX, y: randomY });
  };

  const handleYesClick = () => {
    setAccepted(true);
    fireCelebrationConfetti();
  };

  if (showProposal) {
    return (
      <div className="section text-center" style={{ 
        background: 'radial-gradient(circle at center, #4a041c 0%, var(--bg-dark) 100%)', 
        zIndex: 100, 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        justifyContent: 'center', 
        minHeight: '100vh', 
        position: 'relative', 
        overflow: 'hidden' 
      }}>
        
        {/* Animated Background */}
        <FloatingHearts />

        <AnimatePresence mode="wait">
          {accepted ? (
            <motion.div 
              key="accepted"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: 'spring', bounce: 0.5, duration: 1 }}
              style={{ zIndex: 10, padding: '0 1rem' }}
            >
              <motion.h1 
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                style={{ fontSize: 'clamp(3rem, 10vw, 6rem)', color: 'var(--accent-gold)', marginBottom: '2rem', fontFamily: 'var(--font-serif)', textShadow: '0 0 30px rgba(212, 175, 55, 0.8)' }}
              >
                I knew it! ❤️💍
              </motion.h1>
              <h2 style={{ fontSize: 'clamp(1.8rem, 6vw, 3rem)', color: '#ffb3c1', textShadow: '0 0 15px rgba(255,179,193,0.5)' }}>
                I love you forever!
              </h2>
            </motion.div>
          ) : (
            <motion.div 
              key="proposal"
              initial={{ scale: 0, rotate: -5 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: 'spring', bounce: 0.4, duration: 1 }}
              style={{ 
                position: 'relative', 
                zIndex: 10,
                background: 'rgba(255, 179, 193, 0.05)',
                backdropFilter: 'blur(12px)',
                border: '2px solid rgba(255, 77, 109, 0.3)',
                borderRadius: '40px',
                padding: 'clamp(2rem, 5vw, 4rem) clamp(1rem, 5vw, 6rem)',
                boxShadow: '0 25px 50px rgba(0,0,0,0.5), inset 0 0 30px rgba(255, 77, 109, 0.1)',
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: 'center', 
                justifyContent: 'center',
                width: '90%',
                maxWidth: '800px'
              }}
            >
              <motion.div 
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                style={{ textAlign: 'center', marginBottom: '3rem' }}
              >
                <h1 style={{ fontSize: 'clamp(2.5rem, 8vw, 4.5rem)', color: '#ffb3c1', margin: 0, fontFamily: 'var(--font-serif)', textShadow: '0 0 20px rgba(255, 77, 109, 0.6)', lineHeight: 1.2 }}>
                  Will we be 3 babies? 🥺🍼
                </h1>
              </motion.div>
              
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', alignItems: 'center', position: 'relative', justifyContent: 'center', width: '100%' }}>
                
                <motion.button 
                  onClick={handleYesClick}
                  whileHover={{ scale: 1.1, boxShadow: '0 0 30px rgba(74, 222, 128, 0.8)' }}
                  whileTap={{ scale: 0.9 }}
                  animate={{ boxShadow: ['0 0 15px rgba(74,222,128,0.4)', '0 0 35px rgba(74,222,128,0.8)', '0 0 15px rgba(74,222,128,0.4)'] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  style={{
                    padding: 'clamp(0.8rem, 3vw, 1.2rem) clamp(2rem, 6vw, 4rem)',
                    fontSize: 'clamp(1.5rem, 4vw, 2rem)',
                    background: 'linear-gradient(135deg, #4ade80, #16a34a)',
                    color: 'white',
                    border: 'none',
                    borderRadius: '40px',
                    cursor: 'pointer',
                    fontWeight: 'bold',
                    zIndex: 10,
                    outline: '4px solid rgba(74, 222, 128, 0.3)',
                    outlineOffset: '4px'
                  }}
                >
                  YES! 💖
                </motion.button>

                <motion.div 
                  onMouseEnter={handleNoHover}
                  onClick={handleNoHover}
                  animate={{ x: noPosition.x, y: noPosition.y }}
                  transition={{ type: 'spring', stiffness: 300, damping: 15 }}
                  style={{
                    position: 'relative',
                    zIndex: 5,
                    padding: '3rem', // Force field slightly smaller for mobile friendliness
                    margin: '-3rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer'
                  }}
                >
                  <button 
                    style={{
                      padding: 'clamp(0.8rem, 3vw, 1.2rem) clamp(2rem, 6vw, 4rem)',
                      fontSize: 'clamp(1.5rem, 4vw, 2rem)',
                      background: 'linear-gradient(135deg, #f87171, #dc2626)',
                      color: 'white',
                      border: 'none',
                      borderRadius: '40px',
                      fontWeight: 'bold',
                      boxShadow: '0 8px 25px rgba(248, 113, 113, 0.5)',
                      pointerEvents: 'none'
                    }}
                  >
                    No 🥺
                  </button>
                </motion.div>

              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  }

  // Initial State (Before Proposal)
  return (
    <div className="section text-center" style={{ background: 'var(--bg-dark)', zIndex: 100 }}>
      <h1 className="fade-in" style={{ fontSize: '4rem', color: 'var(--accent-pink)', marginBottom: '2rem' }}>
        Happy Birthday, {CONFIG.girlName} ❤️
      </h1>
      
      <h2 className="slide-up" style={{ fontSize: '2rem', color: 'var(--text-muted)', marginBottom: '4rem', animationDelay: '1s' }}>
        Thank you for being a beautiful part of my life.
      </h2>

      {showLove && (
        <div className="fade-in" style={{ animationDuration: '2s' }}>
          <h1 style={{ fontSize: '6rem', color: 'var(--accent-red)', marginBottom: '2rem', fontFamily: 'var(--font-serif)' }}>
            I Love You ❤️
          </h1>

          <div style={{ marginTop: '4rem' }}>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary" 
              onClick={() => setShowProposal(true)} 
              style={{ marginBottom: '2rem', padding: '1.2rem 4rem', fontSize: '1.5rem', borderRadius: '40px' }}
            >
              Click me ✨
            </motion.button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FinalSurprise;
