import { useState, useEffect } from 'react';
import './TextType.css';

const TextType = ({ 
  text = [""], 
  typingSpeed = 75, 
  pauseDuration = 1500,
  showCursor = true,
  cursorCharacter = "|"
}) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    const currentFullText = text[currentTextIndex];
    
    if (!isDeleting && currentCharIndex < currentFullText.length) {
      // Typing
      const timeout = setTimeout(() => {
        setDisplayText(currentFullText.substring(0, currentCharIndex + 1));
        setCurrentCharIndex(currentCharIndex + 1);
      }, typingSpeed);
      
      return () => clearTimeout(timeout);
    } else if (!isDeleting && currentCharIndex === currentFullText.length) {
      // Pause at end
      const timeout = setTimeout(() => {
        setIsDeleting(true);
      }, pauseDuration);
      
      return () => clearTimeout(timeout);
    } else if (isDeleting && currentCharIndex > 0) {
      // Deleting
      const timeout = setTimeout(() => {
        setDisplayText(currentFullText.substring(0, currentCharIndex - 1));
        setCurrentCharIndex(currentCharIndex - 1);
      }, typingSpeed / 2);
      
      return () => clearTimeout(timeout);
    } else if (isDeleting && currentCharIndex === 0) {
      // Move to next text
      setIsDeleting(false);
      setCurrentTextIndex((currentTextIndex + 1) % text.length);
    }
  }, [currentCharIndex, currentTextIndex, isDeleting, text, typingSpeed, pauseDuration]);

  return (
    <span className="text-type">
      {displayText}
      {showCursor && <span className="text-type-cursor">{cursorCharacter}</span>}
    </span>
  );
};

export default TextType;
