import { useEffect, useRef, useState } from 'react';
import './FuzzyText.css';

export default function FuzzyText({
  children,
  baseIntensity = 0.2,
  hoverIntensity = 0.5,
  enableHover = true
}) {
  const textRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const animationFrameRef = useRef(null);

  useEffect(() => {
    const element = textRef.current;
    if (!element) return;

    const originalText = children.toString();
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';
    let iteration = 0;
    
    const animate = () => {
      const currentIntensity = isHovered ? hoverIntensity : baseIntensity;
      
      element.innerText = originalText
        .split('')
        .map((char, index) => {
          if (char === ' ') return ' ';
          
          if (Math.random() < currentIntensity) {
            return chars[Math.floor(Math.random() * chars.length)];
          }
          
          return originalText[index];
        })
        .join('');

      iteration++;
      
      if (iteration < 60) {
        animationFrameRef.current = requestAnimationFrame(animate);
      } else {
        element.innerText = originalText;
        iteration = 0;
        if (isHovered || baseIntensity > 0) {
          setTimeout(() => {
            animationFrameRef.current = requestAnimationFrame(animate);
          }, 100);
        }
      }
    };

    if (baseIntensity > 0 || isHovered) {
      animate();
    }

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [children, isHovered, baseIntensity, hoverIntensity]);

  const handleMouseEnter = () => {
    if (enableHover) {
      setIsHovered(true);
    }
  };

  const handleMouseLeave = () => {
    if (enableHover) {
      setIsHovered(false);
    }
  };

  return (
    <span
      ref={textRef}
      className="fuzzy-text"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </span>
  );
}
