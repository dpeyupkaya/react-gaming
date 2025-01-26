import React, { useState, useEffect } from 'react';
import './Oldgame.css'; // CSS dosyasını import ediyoruz

export const Oldgame = () => {
  const [score, setScore] = useState(0);
  const [balloons, setBalloons] = useState([]);

  // Balon oluşturma fonksiyonu
  const createBalloon = () => {
    const newBalloon = {
      id: Date.now(),
      top: Math.random() * 80 + '%', // Rastgele yükseklik
      left: Math.random() * 80 + '%', // Rastgele genişlik
      size: Math.random() * 50 + 30 + 'px', // Rastgele boyut
    };
    setBalloons((prev) => [...prev, newBalloon]);
  };

  // Balon patlatma fonksiyonu
  const popBalloon = (id) => {
    setBalloons((prev) => prev.filter((balloon) => balloon.id !== id));
    setScore((prev) => prev + 1);
  };

  // Her 1 saniyede bir yeni balon oluştur
  useEffect(() => {
    const interval = setInterval(() => {
      createBalloon();
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="game-container">
      <h1>Balon Patlatma Oyunu</h1>
      <p className="score">Puan: {score}</p>
      <div className="balloon-area">
        {balloons.map((balloon) => (
          <div
            key={balloon.id}
            className="balloon"
            style={{
              top: balloon.top,
              left: balloon.left,
              width: balloon.size,
              height: balloon.size,
            }}
            onClick={() => popBalloon(balloon.id)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Oldgame;