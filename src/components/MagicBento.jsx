import { useEffect, useRef, useState } from 'react';
import './MagicBento.css';

export default function MagicBento({
  children,
  textAutoHide = true,
  enableStars = true,
  enableSpotlight = true,
  enableBorderGlow = true,
  enableTilt = true,
  enableMagnetism = true,
  clickEffect = true,
  spotlightRadius = 300,
  particleCount = 12,
  glowColor = "132, 0, 255"
}) {
  const cardRef = useRef(null);
  const spotlightRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    if (!enableStars || !cardRef.current) return;

    const stars = [];
    for (let i = 0; i < particleCount; i++) {
      stars.push({
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 2 + 1,
        delay: Math.random() * 3
      });
    }
    setParticles(stars);
  }, [enableStars, particleCount]);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePos({ x, y });

    if (enableSpotlight && spotlightRef.current) {
      spotlightRef.current.style.background = `radial-gradient(${spotlightRadius}px circle at ${x}px ${y}px, rgba(${glowColor}, 0.3), transparent)`;
    }

    if (enableTilt) {
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = (y - centerY) / 20;
      const rotateY = (centerX - x) / 20;
      cardRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (cardRef.current && enableTilt) {
      cardRef.current.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
    }
  };

  const handleClick = (e) => {
    if (!clickEffect || !cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const ripple = document.createElement('div');
    ripple.className = 'magic-ripple';
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;
    cardRef.current.appendChild(ripple);

    setTimeout(() => ripple.remove(), 600);
  };

  return (
    <div
      ref={cardRef}
      className={`magic-bento ${isHovered && textAutoHide ? 'hovered' : ''}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      style={{
        '--glow-color': glowColor
      }}
    >
      {enableSpotlight && (
        <div ref={spotlightRef} className="magic-spotlight" />
      )}

      {enableBorderGlow && (
        <div className="magic-border-glow" />
      )}

      {enableStars && (
        <div className="magic-stars">
          {particles.map((star, i) => (
            <div
              key={i}
              className="magic-star"
              style={{
                left: `${star.x}%`,
                top: `${star.y}%`,
                width: `${star.size}px`,
                height: `${star.size}px`,
                animationDelay: `${star.delay}s`
              }}
            />
          ))}
        </div>
      )}

      <div className="magic-content">
        {children}
      </div>
    </div>
  );
}
