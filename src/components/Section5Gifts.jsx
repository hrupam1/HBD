import { useState } from 'react';
import { CONFIG } from '../config';
import { Gift, Heart, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';

const Section5Gifts = ({ onComplete }) => {
  const [openedGifts, setOpenedGifts] = useState(Array(CONFIG.gifts.length).fill(false));

  const handleOpen = (index, e) => {
    if (openedGifts[index]) return;

    // Fire confetti from the clicked gift location
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (rect.left + rect.width / 2) / window.innerWidth;
    const y = (rect.top + rect.height / 2) / window.innerHeight;

    confetti({
      particleCount: 100,
      spread: 70,
      origin: { x, y },
      colors: ['#ff4d6d', '#ff8fa3', '#ffb3c1', '#d4af37', '#ffffff'],
      zIndex: 100
    });

    const newOpened = [...openedGifts];
    newOpened[index] = true;
    setOpenedGifts(newOpened);

    // If it's the last gift in the array (the biggest surprise)
    if (index === CONFIG.gifts.length - 1) {
      setTimeout(() => {
        onComplete();
      }, 3500); // Wait a bit longer for them to read it before redirecting
    }
  };

  return (
    <div className="section text-center">
      <motion.h2 
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        style={{ fontSize: 'clamp(2rem, 6vw, 3.5rem)', color: 'var(--accent-gold)', marginBottom: '5rem', textShadow: '0 0 20px rgba(212, 175, 55, 0.5)', padding: '0 1rem' }}
      >
        Interactive Gifts 🎁
      </motion.h2>

      <div style={{ display: 'flex', gap: '3rem', flexWrap: 'wrap', justifyContent: 'center', perspective: '1200px' }}>
        {CONFIG.gifts.map((gift, index) => {
          const isOpened = openedGifts[index];
          const isLast = index === CONFIG.gifts.length - 1;

          return (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.8, rotateY: 45 }}
              whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.15, type: 'spring', bounce: 0.4 }}
              className="glass"
              style={{ 
                padding: '2.5rem', 
                borderRadius: '2rem',
                width: '100%',
                maxWidth: '320px',
                minHeight: '260px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                cursor: isOpened ? 'default' : 'pointer',
                transformStyle: 'preserve-3d',
                boxShadow: isOpened 
                    ? '0 15px 50px rgba(255, 77, 109, 0.3), inset 0 0 40px rgba(255, 77, 109, 0.15)' 
                    : '0 15px 40px rgba(0,0,0,0.4)',
                border: isOpened ? '2px solid var(--accent-pink)' : '1px solid rgba(255,255,255,0.1)',
                background: isOpened ? 'linear-gradient(145deg, rgba(255,77,109,0.15), rgba(0,0,0,0.6))' : ''
              }}
              onClick={(e) => handleOpen(index, e)}
              whileHover={!isOpened ? { y: -15, scale: 1.05, boxShadow: '0 25px 50px rgba(212, 175, 55, 0.3)' } : {}}
            >
              <AnimatePresence mode="wait">
                {!isOpened ? (
                  <motion.div
                    key="closed"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, scale: 0.5, rotateZ: -180 }}
                    transition={{ duration: 0.4 }}
                    style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
                  >
                    <motion.div
                      animate={{ y: [0, -12, 0], rotateZ: [0, -8, 8, 0] }}
                      transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                    >
                      <Gift size={75} color="var(--accent-gold)" style={{ filter: 'drop-shadow(0 0 15px rgba(212, 175, 55, 0.6))' }} />
                    </motion.div>
                    <h3 style={{ color: 'var(--text-main)', marginTop: '2rem', fontSize: '1.5rem', letterSpacing: '1px' }}>
                      {gift.title}
                    </h3>
                    {isLast && (
                      <motion.div 
                        animate={{ opacity: [0.4, 1, 0.4] }} 
                        transition={{ repeat: Infinity, duration: 2 }}
                        style={{ marginTop: '1.2rem', color: 'var(--accent-pink)', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '1rem', fontWeight: 'bold' }}
                      >
                        <Sparkles size={18} /> Final Surprise <Sparkles size={18} />
                      </motion.div>
                    )}
                  </motion.div>
                ) : (
                  <motion.div 
                    key="opened"
                    initial={{ opacity: 0, scale: 0.3, y: 60 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ type: 'spring', bounce: 0.6, duration: 0.8 }}
                    style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}
                  >
                    <Heart size={45} color="var(--accent-pink)" fill="var(--accent-pink)" style={{ marginBottom: '1.5rem', filter: 'drop-shadow(0 0 10px rgba(255, 77, 109, 0.6))' }} />
                    <p style={{ 
                      color: 'white', 
                      fontSize: '1.15rem', 
                      lineHeight: '1.8',
                      fontStyle: isLast ? 'italic' : 'normal',
                      textShadow: '0 2px 5px rgba(0,0,0,0.8)'
                    }}>
                      {gift.message}
                    </p>
                    {isLast && (
                      <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.5, duration: 1 }}
                        style={{ color: 'var(--accent-gold)', marginTop: '2.5rem', fontSize: '1.2rem', fontWeight: 'bold', letterSpacing: '1px' }}
                      >
                        Preparing magic... ✨
                      </motion.div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Section5Gifts;
