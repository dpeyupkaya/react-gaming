import React, { useState, useEffect } from "react";

const SnakeGame = () => {
  const [snake, setSnake] = useState([
    { x: 0, y: 0 },
    { x: 10, y: 0 },
    { x: 20, y: 0 },
  ]);
  const [direction, setDirection] = useState("RIGHT");
  const [food, setFood] = useState({ x: 50, y: 50 });
  const [gameOver, setGameOver] = useState(false);

  const gridSize = 100;
  const cellSize = 20;

  const handleKeyDown = (e) => {
    if (e.key === "ArrowUp" && direction !== "DOWN") setDirection("UP");
    if (e.key === "ArrowDown" && direction !== "UP") setDirection("DOWN");
    if (e.key === "ArrowLeft" && direction !== "RIGHT") setDirection("LEFT");
    if (e.key === "ArrowRight" && direction !== "LEFT") setDirection("RIGHT");
  };

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

    newSnake.unshift(head);
    if (head.x === food.x && head.y === food.y) {
      setFood({
        x: Math.floor(Math.random() * gridSize / cellSize) * cellSize,
        y: Math.floor(Math.random() * gridSize / cellSize) * cellSize,
      });
    } else {
      newSnake.pop();
    }

    if (isCollision(newSnake)) {
      setGameOver(true);
    }

    setSnake(newSnake);
  };

  const isCollision = (snake) => {
    const head = snake[0];
    return (
      head.x < 0 ||
      head.x >= gridSize ||
      head.y < 0 ||
      head.y >= gridSize ||
      snake.slice(1).some((segment) => segment.x === head.x && segment.y === head.y)
    );
  };

  useEffect(() => {
    if (gameOver) return;

    const interval = setInterval(moveSnake, 100);
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      clearInterval(interval);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [snake, direction, gameOver]);

  return (
    <div className="flex justify-center items-center h-screen bg-gray-800">
      <div className="relative">
        <div
          className="absolute w-[400px] h-[400px] bg-black border-4 border-white"
          style={{ position: "relative", width: gridSize, height: gridSize }}
        >
          {snake.map((segment, index) => (
            <div
              key={index}
              className="absolute bg-green-500"
              style={{
                width: cellSize,
                height: cellSize,
                left: segment.x,
                top: segment.y,
              }}
            />
          ))}
          <div
            className="absolute bg-red-500"
            style={{
              width: cellSize,
              height: cellSize,
              left: food.x,
              top: food.y,
            }}
          />
        </div>
        {gameOver && (
          <div className="absolute text-white text-xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            Game Over
          </div>
        )}
      </div>
    </div>
  );
};

export default SnakeGame;

