import { useState, useRef, useEffect } from 'react';
import { Play, Pause, Music } from 'lucide-react';

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    // Attempt auto-play on mount (may be blocked by browser)
    if (audioRef.current) {
      audioRef.current.volume = 0.5;
    }
  }, []);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div style={{ position: 'fixed', top: '20px', right: '20px', zIndex: 100 }}>
      <button 
        onClick={togglePlay}
        className="glass"
        style={{
          width: '50px',
          height: '50px',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          border: 'none',
          color: 'var(--accent-pink)',
          transition: 'all 0.3s ease',
          boxShadow: isPlaying ? '0 0 15px var(--accent-pink)' : 'none'
        }}
      >
        {isPlaying ? <Pause size={24} /> : <Play size={24} />}
      </button>
      
      {/* 
        Note: You need to add a music.mp3 file to your public directory
        for this to work properly.
      */}
      <audio 
        ref={audioRef} 
        src="/music.mp3" 
        loop 
      />
    </div>
  );
};

export default MusicPlayer;
