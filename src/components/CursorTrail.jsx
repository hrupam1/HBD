import { useEffect, useState } from 'react';

const CursorTrail = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [trails, setTrails] = useState([]);

  useEffect(() => {
    let lastTime = 0;
    
    const updatePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      const now = Date.now();
      if (now - lastTime > 50) { // Add a trail element every 50ms
        setTrails(prev => [...prev, { id: now, x: e.clientX, y: e.clientY }]);
        lastTime = now;
        
        // Remove trail after 1s
        setTimeout(() => {
          setTrails(prev => prev.filter(t => t.id !== now));
        }, 1000);
      }
    };

    const handleClick = (e) => {
      const id = Date.now() + 'click';
      setTrails(prev => [...prev, { id, x: e.clientX, y: e.clientY, isClick: true }]);
      setTimeout(() => {
        setTrails(prev => prev.filter(t => t.id !== id));
      }, 1000);
    };

    window.addEventListener('mousemove', updatePosition);
    window.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      window.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <>
      {/* Custom Cursor Pointer */}
      <div 
        className="custom-cursor" 
        style={{ left: position.x, top: position.y }}
      >
        ❤️
      </div>
      
      {/* Trails */}
      {trails.map(trail => (
        <div
          key={trail.id}
          className="cursor-trail"
          style={{
            left: trail.x,
            top: trail.y,
            fontSize: trail.isClick ? '30px' : '15px'
          }}
        >
          {trail.isClick ? '💖' : '✨'}
        </div>
      ))}
    </>
  );
};

export default CursorTrail;
