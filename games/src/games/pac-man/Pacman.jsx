import React, { useState, useEffect } from 'react';
import './Pacman.css';

export const Pacman = () => {
  const [position, setPosition] = useState({ top: 50, left: 50 });
  const [direction, setDirection] = useState('right');

  const movePacman = (e) => {
    let newTop = position.top;
    let newLeft = position.left;

    switch (e.key) {
      case 'ArrowUp':
        newTop = Math.max(newTop - 10, 0);
        setDirection('up');
        break;
      case 'ArrowDown':
        newTop = Math.min(newTop + 10, window.innerHeight - 50);
        setDirection('down');
        break;
      case 'ArrowLeft':
        newLeft = Math.max(newLeft - 10, 0);
        setDirection('left');
        break;
      case 'ArrowRight':
        newLeft = Math.min(newLeft + 10, window.innerWidth - 50);
        setDirection('right');
        break;
      default:
        break;
    }

    setPosition({ top: newTop, left: newLeft });
  };

  useEffect(() => {
    window.addEventListener('keydown', movePacman);
    return () => window.removeEventListener('keydown', movePacman);
  }, [position]);

  return (
    <div className="pacman-container">
      <div
        className={`pacman pacman-${direction}`}
        style={{ top: `${position.top}px`, left: `${position.left}px` }}
      ></div>
    </div>
  );
};
export default Pacman;