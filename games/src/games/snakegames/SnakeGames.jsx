import React, { useState, useEffect } from "react";
import "./SnakeGames.css";

const SnakeGames= () => {
  const gridSize = 400;
  const cellSize = 20;
  const initialSnake = [
    { x: 60, y: 0 },
    { x: 40, y: 0 },
    { x: 20, y: 0 },
  ];

  const [snake, setSnake] = useState(initialSnake);
  const [direction, setDirection] = useState("RIGHT");
  const [food, setFood] = useState({ x: 200, y: 200 });
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);

  // Yemek oluştur
  const generateFood = () => {
    const x = Math.floor(Math.random() * (gridSize / cellSize)) * cellSize;
    const y = Math.floor(Math.random() * (gridSize / cellSize)) * cellSize;
    setFood({ x, y });
  };

  // Yılanın hareketi
  const moveSnake = () => {
    if (gameOver) return;

    const newSnake = [...snake];
    const head = { ...newSnake[0] };

    switch (direction) {
      case "UP":
        head.y -= cellSize;
        break;
      case "DOWN":
        head.y += cellSize;
        break;
      case "LEFT":
        head.x -= cellSize;
        break;
      case "RIGHT":
        head.x += cellSize;
        break;
      default:
        break;
    }

    // Yılanın sınırları aşmasını kontrol et
    if (head.x < 0 || head.x >= gridSize || head.y < 0 || head.y >= gridSize) {
      setGameOver(true);
      return;
    }

    // Yılanın kendine çarpmasını kontrol et
    if (newSnake.some((segment) => segment.x === head.x && segment.y === head.y)) {
      setGameOver(true);
      return;
    }

    newSnake.unshift(head);

    // Yemek yendi mi?
    if (head.x === food.x && head.y === food.y) {
      generateFood();
      setScore(score + 1);
    } else {
      newSnake.pop();
    }

    setSnake(newSnake);
  };

  // Klavye kontrolleri
  const handleKeyDown = (e) => {
    if (e.key === "ArrowUp" && direction !== "DOWN") setDirection("UP");
    if (e.key === "ArrowDown" && direction !== "UP") setDirection("DOWN");
    if (e.key === "ArrowLeft" && direction !== "RIGHT") setDirection("LEFT");
    if (e.key === "ArrowRight" && direction !== "LEFT") setDirection("RIGHT");
  };

  // Oyunu başlat ve kontrolleri ekle
  useEffect(() => {
    if (gameOver) return;

    const interval = setInterval(moveSnake, 100);
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      clearInterval(interval);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [snake, direction, gameOver]);

  // Oyunu sıfırla
  const resetGame = () => {
    setSnake(initialSnake);
    setDirection("RIGHT");
    setFood({ x: 200, y: 200 });
    setGameOver(false);
    setScore(0);
  };

  return (
    <div className="snake-game-container">
      <div className="game-board">
        {/* Yılan */}
        {snake.map((segment, index) => (
          <div
            key={index}
            className="snake-segment"
            style={{
              left: segment.x,
              top: segment.y,
            }}
          />
        ))}

        {/* Yemek */}
        <div
          className="food"
          style={{
            left: food.x,
            top: food.y,
          }}
        />

        {/* Oyun Bitti Ekranı */}
        {gameOver && (
          <div className="game-over-screen">
            <div className="game-over-text">Game Over!</div>
            <div className="score-text">Score: {score}</div>
            <button className="restart-button" onClick={resetGame}>
              Restart
            </button>
          </div>
        )}
      </div>

      {/* Skor Tablosu */}
      <div className="score-board">
        Score: {score}
      </div>

      {/* Kontroller */}
      <div className="controls">
        Use Arrow Keys to Move
      </div>
    </div>
  );
};

export default SnakeGames;