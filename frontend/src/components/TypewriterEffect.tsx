import { useEffect, useState } from 'react';

interface TypewriterEffectProps {
  strings: string[];
  typingSpeed?: number;
  deleteSpeed?: number;
  pauseDuration?: number;
}

export default function TypewriterEffect({
  strings,
  typingSpeed = 80,
  deleteSpeed = 50,
  pauseDuration = 2000,
}: TypewriterEffectProps) {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (strings.length === 0) return;

    const currentString = strings[currentIndex];

    if (isPaused) {
      const timer = setTimeout(() => {
        setIsPaused(false);
        setIsDeleting(true);
      }, pauseDuration);
      return () => clearTimeout(timer);
    }

    if (!isDeleting) {
      if (displayText.length < currentString.length) {
        const timer = setTimeout(() => {
          setDisplayText(currentString.slice(0, displayText.length + 1));
        }, typingSpeed);
        return () => clearTimeout(timer);
      } else {
        setIsPaused(true);
      }
    } else {
      if (displayText.length > 0) {
        const timer = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, deleteSpeed);
        return () => clearTimeout(timer);
      } else {
        setIsDeleting(false);
        setCurrentIndex((prev) => (prev + 1) % strings.length);
      }
    }
  }, [displayText, currentIndex, isDeleting, isPaused, strings, typingSpeed, deleteSpeed, pauseDuration]);

  return (
    <span className="typewriter-text">
      {displayText}
      <span className="typewriter-cursor">|</span>
    </span>
  );
}
