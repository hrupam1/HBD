import { useRef } from 'react';
import { CONFIG } from '../config';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const Section2Timeline = () => {
  const containerRef = useRef(null);

  // Advanced scroll tracking for the timeline line
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  // Spring animation for smoother line growth
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const lineHeight = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);
  // The glowing ball at the tip of the line
  const ballPosition = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);

  return (
    <div className="section" ref={containerRef} style={{ perspective: '1000px' }}>
      <motion.h2 
        initial={{ opacity: 0, y: -30, scale: 0.9 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, type: "spring", bounce: 0.5 }}
        viewport={{ once: true, margin: "-100px" }}
        style={{ fontSize: '3.5rem', color: 'var(--accent-gold)', marginBottom: '5rem', textAlign: 'center', textShadow: '0 0 20px rgba(212, 175, 55, 0.5)' }}
      >
        How Our Journey Started
      </motion.h2>
      
      <div style={{ maxWidth: '900px', width: '100%', position: 'relative', margin: '0 auto', paddingBottom: '100px' }}>
        {/* Background Track for the line */}
        <div style={{
            position: 'absolute',
            left: '50%',
            top: 0,
            bottom: 0,
            width: '4px',
            background: 'rgba(255, 255, 255, 0.05)',
            transform: 'translateX(-50%)',
            borderRadius: '2px'
        }} />

        {/* Dynamic Scroll-driven Timeline Line */}
        <motion.div 
          style={{
            position: 'absolute',
            left: '50%',
            top: 0,
            width: '4px',
            height: lineHeight,
            background: 'linear-gradient(to bottom, var(--accent-gold), var(--accent-pink))',
            transform: 'translateX(-50%)',
            borderRadius: '2px',
            boxShadow: '0 0 15px var(--accent-pink)'
          }} 
        />

        {/* Glowing Orb tracing the line */}
        <motion.div
          style={{
            position: 'absolute',
            left: '50%',
            top: ballPosition,
            width: '24px',
            height: '24px',
            borderRadius: '50%',
            background: 'white',
            transform: 'translateX(-50%) translateY(-50%)',
            boxShadow: '0 0 20px 5px var(--accent-pink), 0 0 40px 10px var(--accent-gold)',
            zIndex: 10
          }}
        />

        {CONFIG.timeline.map((item, index) => {
          const isEven = index % 2 === 0;
          
          return (
          <div key={index} style={{
            display: 'flex',
            justifyContent: isEven ? 'flex-start' : 'flex-end',
            marginBottom: '6rem',
            position: 'relative',
            width: '100%'
          }}>
            {/* Timeline Dot (Static base) */}
            <motion.div 
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true, margin: "-200px" }}
              style={{
                position: 'absolute',
                left: '50%',
                top: '40px',
                width: '18px',
                height: '18px',
                borderRadius: '50%',
                background: 'var(--accent-gold)',
                transform: 'translateX(-50%)',
                boxShadow: '0 0 15px var(--accent-gold)',
                zIndex: 5,
                border: '3px solid rgba(255,255,255,0.2)'
              }} 
            />

            {/* Advanced Content Box */}
            <motion.div 
              initial={{ 
                opacity: 0, 
                x: isEven ? -150 : 150,
                rotateY: isEven ? 45 : -45,
                scale: 0.8
              }}
              whileInView={{ 
                opacity: 1, 
                x: 0,
                rotateY: 0,
                scale: 1
              }}
              transition={{ 
                duration: 0.8, 
                type: "spring", 
                bounce: 0.3,
                delay: 0.1
              }}
              viewport={{ once: true, margin: "-150px" }}
              className="glass" 
              style={{
                width: '45%',
                padding: '2.5rem',
                borderRadius: '2rem',
                textAlign: isEven ? 'right' : 'left',
                position: 'relative',
                zIndex: 1,
                boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
                border: '1px solid rgba(255,255,255,0.1)',
                backdropFilter: 'blur(16px)',
                background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.01) 100%)'
              }}
              whileHover={{ 
                scale: 1.05, 
                y: -10,
                boxShadow: '0 30px 60px rgba(212, 175, 55, 0.2)',
                border: '1px solid rgba(212, 175, 55, 0.3)'
              }}
            >
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                viewport={{ once: true }}
                style={{ color: 'var(--accent-pink)', fontWeight: 'bold', marginBottom: '0.5rem', letterSpacing: '2px', textTransform: 'uppercase', fontSize: '0.9rem' }}
              >
                {item.date}
              </motion.div>

              {item.title && (
                <motion.h3 
                  initial={{ opacity: 0, x: isEven ? 20 : -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  viewport={{ once: true }}
                  style={{ fontSize: '1.8rem', marginBottom: '1rem', color: 'white', textShadow: '0 2px 10px rgba(0,0,0,0.5)' }}
                >
                  {item.title}
                </motion.h3>
              )}

              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                viewport={{ once: true }}
                style={{ color: 'rgba(255,255,255,0.8)', marginBottom: '1.5rem', lineHeight: '1.6' }}
              >
                {item.description}
              </motion.p>
              
              {item.image && (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9, rotateZ: isEven ? -2 : 2 }}
                  whileInView={{ opacity: 1, scale: 1, rotateZ: 0 }}
                  transition={{ delay: 0.7, duration: 0.6, type: "spring" }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, rotateZ: isEven ? 2 : -2 }}
                  style={{ borderRadius: '1.5rem', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.5)' }}
                >
                  <motion.img 
                    src={item.image} 
                    alt={item.title} 
                    style={{ width: '100%', height: '250px', objectFit: 'cover' }}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.4 }}
                  />
                </motion.div>
              )}
            </motion.div>
          </div>
        )})}
      </div>
    </div>
  );
};

export default Section2Timeline;
