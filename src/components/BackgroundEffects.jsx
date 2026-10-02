import { useEffect, useState, memo } from 'react';

const BackgroundEffects = memo(() => {
  const [stars, setStars] = useState([]);
  const [petals, setPetals] = useState([]);

  useEffect(() => {
    // Generate initial stars
    const newStars = Array.from({ length: 50 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100 + 'vw',
      animationDuration: (Math.random() * 10 + 5) + 's',
      animationDelay: (Math.random() * 5) + 's',
      size: Math.random() * 3 + 1 + 'px',
    }));
    setStars(newStars);

    // Generate falling petals
    const newPetals = Array.from({ length: 20 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100 + 'vw',
      animationDuration: (Math.random() * 15 + 10) + 's',
      animationDelay: (Math.random() * 10) + 's',
    }));
    setPetals(newPetals);
  }, []);

  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 0 }}>
      {stars.map(star => (
        <div
          key={`star-${star.id}`}
          className="star"
          style={{
            left: star.left,
            width: star.size,
            height: star.size,
            animationDuration: star.animationDuration,
            animationDelay: star.animationDelay,
          }}
        />
      ))}
      {petals.map(petal => (
        <div
          key={`petal-${petal.id}`}
          className="petal"
          style={{
            left: petal.left,
            animationDuration: petal.animationDuration,
            animationDelay: petal.animationDelay,
          }}
        >
          🌸
        </div>
      ))}
    </div>
  );
});

export default BackgroundEffects;
