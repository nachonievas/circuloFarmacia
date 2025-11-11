import { useState, useEffect, useRef } from 'react';
import './GlitchText.css';

const GlitchText = ({ 
  children, 
  speed = 1, 
  enableShadows = true, 
  enableOnHover = false,
  className = '' 
}) => {
  const [isGlitching, setIsGlitching] = useState(!enableOnHover);
  const textRef = useRef(null);

  useEffect(() => {
    if (!isGlitching) return;

    const glitchInterval = setInterval(() => {
      if (textRef.current) {
        const glitchDuration = 100 / speed;
        textRef.current.classList.add('glitch-active');
        
        setTimeout(() => {
          if (textRef.current) {
            textRef.current.classList.remove('glitch-active');
          }
        }, glitchDuration);
      }
    }, 3000 / speed);

    return () => clearInterval(glitchInterval);
  }, [isGlitching, speed]);

  const handleMouseEnter = () => {
    if (enableOnHover) {
      setIsGlitching(true);
    }
  };

  const handleMouseLeave = () => {
    if (enableOnHover) {
      setIsGlitching(false);
      if (textRef.current) {
        textRef.current.classList.remove('glitch-active');
      }
    }
  };

  return (
    <span
      ref={textRef}
      className={`glitch-text ${enableShadows ? 'glitch-shadows' : ''} ${className}`}
      data-text={children}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </span>
  );
};

export default GlitchText;
