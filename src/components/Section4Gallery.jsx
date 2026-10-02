import { useState } from 'react';
import { CONFIG } from '../config';
import { Heart } from 'lucide-react';

const Section4Gallery = () => {
  const [activeHeart, setActiveHeart] = useState(null);

  const handleHeartClick = (index, e) => {
    e.stopPropagation();
    setActiveHeart(index);
    setTimeout(() => setActiveHeart(null), 1000);
  };

  return (
    <div className="section">
      <h2 style={{ fontSize: 'clamp(1.8rem, 5vw, 3rem)', color: 'var(--accent-gold)', marginBottom: '4rem', textAlign: 'center', padding: '0 1rem' }}>
        Moments I Want to Remember Forever
      </h2>
      
      <div style={{ 
        display: 'flex', 
        flexWrap: 'wrap', 
        gap: '2rem', 
        justifyContent: 'center',
        maxWidth: '1200px'
      }}>
        {CONFIG.gallery.map((photo, index) => (
          <div key={index} style={{
            background: 'white',
            padding: '1rem',
            paddingBottom: '3rem',
            borderRadius: '0.5rem',
            boxShadow: '0 10px 20px rgba(0,0,0,0.3)',
            transform: `rotate(${index % 2 === 0 ? '-3deg' : '3deg'})`,
            transition: 'transform 0.3s ease, z-index 0s',
            position: 'relative',
            cursor: 'pointer',
            maxWidth: '300px',
            width: '100%'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.1) rotate(0deg)';
            e.currentTarget.style.zIndex = '10';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = `rotate(${index % 2 === 0 ? '-3deg' : '3deg'})`;
            e.currentTarget.style.zIndex = '1';
          }}
          >
            <div style={{ position: 'relative', overflow: 'hidden', borderRadius: '4px' }}>
              <img src={photo.src} alt={photo.caption} style={{ width: '100%', height: '300px', objectFit: 'cover' }} />
              
              {/* Clickable Heart Overlay */}
              <div 
                style={{
                  position: 'absolute',
                  top: '10px',
                  right: '10px',
                  background: 'rgba(255,255,255,0.7)',
                  borderRadius: '50%',
                  padding: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
                onClick={(e) => handleHeartClick(index, e)}
              >
                <Heart 
                  size={20} 
                  fill={activeHeart === index ? "var(--accent-red)" : "transparent"} 
                  color="var(--accent-red)" 
                  style={{ transition: 'all 0.3s' }}
                />
              </div>

              {/* Heart floating animation on click */}
              {activeHeart === index && (
                <div style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  animation: 'fadeOut 1s forwards'
                }}>
                  <Heart size={80} fill="var(--accent-pink)" color="var(--accent-pink)" />
                </div>
              )}
            </div>
            
            <p style={{ 
              fontFamily: 'var(--font-hand)', 
              color: '#333', 
              fontSize: '1.5rem', 
              textAlign: 'center',
              position: 'absolute',
              bottom: '0.5rem',
              left: '0',
              width: '100%'
            }}>
              {photo.caption}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Section4Gallery;
