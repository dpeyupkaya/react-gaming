import React, { useState } from 'react';
import './Oldgame.css';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

const Oldgame = () => {
  const [targetNumber, setTargetNumber] = useState(Math.floor(Math.random() * 100) + 1);
  const [guess, setGuess] = useState('');
  const [message, setMessage] = useState('1 ile 100 arasında bir sayı tahmin edin!');
  const [attempts, setAttempts] = useState(0);

  const handleGuess = () => {
    const userGuess = parseInt(guess, 10);

    if (isNaN(userGuess)) {
      setMessage('Lütfen geçerli bir sayı girin!');
      return;
    }

    setAttempts(attempts + 1);

    if (userGuess < targetNumber) {
      setMessage('Daha büyük bir sayı tahmin edin!');
    } else if (userGuess > targetNumber) {
      setMessage('Daha küçük bir sayı tahmin edin!');
    } else {
      setMessage(`Tebrikler! ${attempts + 1} denemede doğru tahmin ettiniz!`);
    }
  };

  const resetGame = () => {
    setTargetNumber(Math.floor(Math.random() * 100) + 1);
    setGuess('');
    setMessage('1 ile 100 arasında bir sayı tahmin edin!');
    setAttempts(0);
  };

  return (
<> <Navbar />
<div className="oldgame">
      <h1>Sayı Tahmin Oyunu</h1>
      <p>{message}</p>
      <input
        type="number"
        value={guess}
        onChange={(e) => setGuess(e.target.value)}
        placeholder="Tahmininizi girin"
      />
      <button onClick={handleGuess}>Tahmin Et</button>
      <button onClick={resetGame}>Yeni Oyun</button>
    </div>
<Footer />
</>
  );
};

export default Oldgame;