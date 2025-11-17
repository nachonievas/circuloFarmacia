import { useEffect, useRef } from 'react';
import './GradientText.css';

export default function GradientText({ 
  colors = ["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"],
  animationSpeed = 3,
  showBorder = false,
  className = "",
  children 
}) {
  const textRef = useRef(null);

  useEffect(() => {
    if (textRef.current) {
      const gradient = `linear-gradient(to right, ${colors.join(', ')})`;
      textRef.current.style.backgroundImage = gradient;
      textRef.current.style.animationDuration = `${animationSpeed}s`;
    }
  }, [colors, animationSpeed]);

  return (
    <span 
      ref={textRef}
      className={`gradient-text ${showBorder ? 'with-border' : ''} ${className}`}
    >
      {children}
    </span>
  );
}
