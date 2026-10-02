import { useState } from 'react';
import { CONFIG } from '../config';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';

const Section3Letter = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    if (!isOpen) {
      setIsOpen(true);
      confetti({
        particleCount: 150,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#f2858e', '#f4cd9f', '#ff94a3', '#ffffff']
      });
    }
  };

  return (
    <div className="section flex flex-col items-center justify-center">
      <motion.h2 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        style={{ fontSize: '3.5rem', color: 'var(--accent-gold)', marginBottom: '4rem', textAlign: 'center', textShadow: '0 0 20px rgba(212, 175, 55, 0.5)' }}
      >
        A Letter From Me
      </motion.h2>
      
      {/* Container for the 3D Envelope */}
      <div 
        onClick={handleOpen}
        style={{
          position: 'relative',
          width: '90%',
          maxWidth: '550px',
          height: '350px',
          cursor: isOpen ? 'default' : 'pointer',
          perspective: '1200px',
          marginTop: isOpen ? '250px' : '0px', 
          marginBottom: isOpen ? '50px' : '0px',
          transition: 'all 0.8s ease',
          margin: '0 auto'
        }}
      >
        {/* Envelope Back (Inside) */}
        <div style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          background: '#d59b6a', // Darker tan for inside
          borderRadius: '5px', // Changed to smaller radius so SVG corners match better
          boxShadow: '0 20px 50px rgba(0,0,0,0.4)',
          border: '3px solid #b57b4c' // Add solid border to back
        }} />

        {/* Decorative Pink Background Letter */}
        <motion.div 
          initial={{ y: 0, opacity: 0 }}
          animate={{ y: isOpen ? -100 : 0, opacity: isOpen ? 1 : 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{
            position: 'absolute',
            bottom: '20px',
            left: '10%',
            width: '55%',
            height: '250px',
            background: '#e89e9f',
            borderRadius: '10px',
            zIndex: 2,
            transform: 'rotate(-8deg)',
            border: '3px solid #c9797a',
            padding: '15px'
          }}
        >
           {/* Stamp */}
           <div style={{ position: 'absolute', top: '15px', right: '15px', width: '40px', height: '45px', background: '#fcf1d8', border: '2px dashed #c9797a', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
             <svg width="20" height="20" viewBox="0 0 24 24" fill="#e89e9f"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
           </div>
           {/* Postmarks */}
           <div style={{ position: 'absolute', top: '25px', left: '20px', display: 'flex', gap: '5px' }}>
             <div style={{ width: '40px', height: '2px', background: '#c9797a', borderRadius: '2px', transform: 'rotate(-5deg)' }}></div>
             <div style={{ width: '40px', height: '2px', background: '#c9797a', borderRadius: '2px', transform: 'rotate(-5deg)' }}></div>
           </div>
           <div style={{ position: 'absolute', top: '40px', left: '15px', width: '30px', height: '30px', border: '2px solid #c9797a', borderRadius: '50%' }}></div>
        </motion.div>
        
        {/* Decorative Purple Background Letter */}
        <motion.div 
          initial={{ y: 0, opacity: 0 }}
          animate={{ y: isOpen ? -80 : 0, opacity: isOpen ? 1 : 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          style={{
            position: 'absolute',
            bottom: '20px',
            right: '10%',
            width: '35%',
            height: '200px',
            background: '#c59fbb',
            borderRadius: '10px',
            zIndex: 2,
            transform: 'rotate(12deg)',
            border: '3px solid #a37998',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <svg width="40" height="40" viewBox="0 0 24 24" fill="transparent" stroke="#fcf1d8" strokeWidth="2"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
        </motion.div>

        {/* The Main Letter */}
        <motion.div
          initial={{ y: 0, scale: 0.9, opacity: 0 }}
          animate={{ 
            y: isOpen ? -300 : 0, 
            scale: isOpen ? 1 : 0.9,
            opacity: isOpen ? 1 : 0,
            zIndex: isOpen ? 10 : 3 // Above decorative letters
          }}
          transition={{ duration: 1, delay: isOpen ? 0.4 : 0, type: 'spring', bounce: 0.2 }}
          style={{
            position: 'absolute',
            width: '84%',
            left: '8%',
            height: '500px',
            background: '#fcf1d8', // Cream paper
            borderRadius: '15px',
            padding: '2.5rem',
            boxShadow: '0 15px 35px rgba(0,0,0,0.2)',
            overflowY: 'auto',
            border: '3px dashed #d59b6a'
          }}
        >
          {/* Letter Title */}
          <div style={{ textAlign: 'center', marginBottom: '20px' }}>
            <h3 style={{ fontFamily: 'var(--font-hand)', fontSize: '2.5rem', color: '#8c6e46', margin: 0 }}>Letters</h3>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="transparent" stroke="#f2858e" strokeWidth="2" style={{ margin: '0 auto' }}>
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
            </svg>
          </div>

          <div style={{
            fontFamily: 'var(--font-hand)',
            fontSize: '1.6rem',
            lineHeight: '1.8',
            color: '#5a452a',
            whiteSpace: 'pre-wrap'
          }}>
            {CONFIG.letter}
          </div>
          
          <AnimatePresence>
          {isOpen && (
             <motion.button 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={(e) => { e.stopPropagation(); setIsOpen(false); }}
                style={{
                  marginTop: '2rem',
                  padding: '0.8rem 1.5rem',
                  background: '#f2858e',
                  color: 'white',
                  border: 'none',
                  borderRadius: '25px',
                  cursor: 'pointer',
                  display: 'block',
                  marginLeft: 'auto',
                  marginRight: 'auto',
                  fontFamily: 'var(--font-sans)',
                  fontWeight: 'bold',
                  boxShadow: '0 5px 15px rgba(242, 133, 142, 0.4)'
                }}
             >
               Fold Everything 💌
             </motion.button>
          )}
          </AnimatePresence>
        </motion.div>

        {/* Envelope Front Flaps using SVGs for visible borders */}
        
        {/* Left Flap */}
        <div style={{ position: 'absolute', top: 0, left: 0, width: '50%', height: '100%', zIndex: 4, pointerEvents: 'none' }}>
          <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none" style={{ position: 'absolute', top: 0, left: 0, filter: 'drop-shadow(2px 0px 3px rgba(0,0,0,0.1))' }}>
             <polygon points="0,0 100,50 0,100" fill="#f4cd9f" stroke="#b57b4c" strokeWidth="3" vectorEffect="non-scaling-stroke" strokeLinejoin="round" />
          </svg>
          {/* Sparkle */}
          <div style={{ position: 'absolute', top: '40%', left: '20%', color: '#b57b4c', fontSize: '1.2rem', opacity: 0.6 }}>✨</div>
        </div>

        {/* Right Flap */}
        <div style={{ position: 'absolute', top: 0, right: 0, width: '50%', height: '100%', zIndex: 4, pointerEvents: 'none' }}>
          <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none" style={{ position: 'absolute', top: 0, left: 0, filter: 'drop-shadow(-2px 0px 3px rgba(0,0,0,0.1))' }}>
             <polygon points="100,0 0,50 100,100" fill="#f4cd9f" stroke="#b57b4c" strokeWidth="3" vectorEffect="non-scaling-stroke" strokeLinejoin="round" />
          </svg>
          {/* Sparkle */}
          <div style={{ position: 'absolute', top: '60%', right: '25%', color: '#b57b4c', fontSize: '1.2rem', opacity: 0.6 }}>✨</div>
        </div>

        {/* Bottom Flap with Kawaii Face */}
        <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: '75%', zIndex: 5, pointerEvents: 'none' }}>
          <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none" style={{ position: 'absolute', top: 0, left: 0, filter: 'drop-shadow(0px -2px 3px rgba(0,0,0,0.1))' }}>
             <polygon points="0,100 50,0 100,100" fill="#f4cd9f" stroke="#b57b4c" strokeWidth="3" vectorEffect="non-scaling-stroke" strokeLinejoin="round" />
          </svg>
          
          {/* Kawaii Face */}
          <div style={{
            position: 'absolute',
            bottom: '30px',
            left: '50%',
            transform: 'translateX(-50%) scale(1.2)',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
          }}>
            {/* Blush Left */}
            <div style={{ width: '18px', height: '10px', background: '#ff94a3', borderRadius: '50%', filter: 'blur(1px)', transform: 'translateY(3px)' }} />
            {/* Eye Left */}
            <div style={{ width: '10px', height: '10px', background: '#4a3a30', borderRadius: '50%' }} />
            {/* Smile */}
            <svg width="14" height="8" viewBox="0 0 14 8" style={{ marginTop: '2px' }}>
               <path d="M 2 2 Q 7 8 12 2" fill="transparent" stroke="#4a3a30" strokeWidth="2" strokeLinecap="round" />
            </svg>
            {/* Eye Right */}
            <div style={{ width: '10px', height: '10px', background: '#4a3a30', borderRadius: '50%' }} />
            {/* Blush Right */}
            <div style={{ width: '18px', height: '10px', background: '#ff94a3', borderRadius: '50%', filter: 'blur(1px)', transform: 'translateY(3px)' }} />
          </div>
        </div>

        {/* Top Flap (Animated) */}
        <motion.div 
          initial={{ rotateX: 0 }}
          animate={{ rotateX: isOpen ? 180 : 0, zIndex: isOpen ? 1 : 6 }}
          transition={{ duration: 0.8, type: 'spring', bounce: 0.2 }}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%', 
            height: '55%', 
            transformOrigin: 'top center',
            pointerEvents: 'none'
          }}
        >
          <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none" style={{ position: 'absolute', top: 0, left: 0, filter: 'drop-shadow(0px 3px 4px rgba(0,0,0,0.15))' }}>
             <polygon points="0,0 50,100 100,0" fill="#f4cd9f" stroke="#b57b4c" strokeWidth="3" vectorEffect="non-scaling-stroke" strokeLinejoin="round" />
          </svg>
        </motion.div>
        
        {/* Heart Seal */}
        <motion.div
            initial={{ opacity: 1, scale: 1 }}
            animate={{ opacity: isOpen ? 0 : 1, scale: isOpen ? 0 : 1, y: isOpen ? -30 : 0 }}
            transition={{ duration: 0.4 }}
            style={{
                position: 'absolute',
                top: '55%',
                left: '50%',
                transform: 'translate(-50%, -50%)', 
                zIndex: 7,
                pointerEvents: 'none' // Let clicks pass through to container
            }}
        >
            <svg width="50" height="50" viewBox="0 0 24 24" fill="#f2858e" stroke="#c95963" strokeWidth="1" style={{ filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.2))' }}>
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
            </svg>
        </motion.div>
      </div>
      
      <AnimatePresence>
        {!isOpen && (
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            style={{ marginTop: '5rem', color: 'var(--accent-pink)', fontSize: '1.2rem', letterSpacing: '2px', textTransform: 'uppercase', fontWeight: 'bold' }}
          >
            Open your cute letters ✨
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Section3Letter;
