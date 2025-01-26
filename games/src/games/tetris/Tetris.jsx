import React, { useState, useEffect, useCallback } from 'react';
import './Tetris.css';

const BOARD_WIDTH = 14;
const BOARD_HEIGHT = 16;

const createBoard = () => Array.from(Array(BOARD_HEIGHT), () => Array(BOARD_WIDTH).fill(0));

const Tetris = () => {
  const [board, setBoard] = useState(createBoard());
  const [currentPiece, setCurrentPiece] = useState(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [gameOver, setGameOver] = useState(false);

  const pieces = [
    { shape: [[1, 1, 1, 1]], color: '#00FFFF' }, // I piece (Cyan)
    { shape: [[1, 1], [1, 1]], color: '#FFFF00' }, // O piece (Yellow)
    { shape: [[0, 1, 0], [1, 1, 1]], color: '#800080' }, // T piece (Purple)
    { shape: [[1, 0, 0], [1, 1, 1]], color: '#FFA500' }, // L piece (Orange)
    { shape: [[0, 0, 1], [1, 1, 1]], color: '#0000FF' }, // J piece (Blue)
    { shape: [[0, 1, 1], [1, 1, 0]], color: '#00FF00' }, // S piece (Green)
    { shape: [[1, 1, 0], [0, 1, 1]], color: '#FF0000' }, // Z piece (Red)
  ];

  const randomPiece = () => {
    const randomIndex = Math.floor(Math.random() * pieces.length);
    return pieces[randomIndex];
  };

  const startGame = useCallback(() => {
    setBoard(createBoard());
    setCurrentPiece(randomPiece());
    setPosition({ x: BOARD_WIDTH / 2 - 1, y: 0 });
    setGameOver(false);
  }, []);

  useEffect(() => {
    startGame();
  }, [startGame]);

  useEffect(() => {
    if (!gameOver) {
      const interval = setInterval(() => {
        movePieceDown();
      }, 1000); // Her saniyede bir parçayı aşağı hareket ettir
      return () => clearInterval(interval);
    }
  }, [currentPiece, position, gameOver]);

  const movePieceDown = () => {
    if (!currentPiece) return;

    const newY = position.y + 1;
    if (checkCollision(position.x, newY, currentPiece.shape)) {
      placePiece();
      return;
    }
    setPosition({ ...position, y: newY });
  };

  const movePieceLeft = () => {
    if (!currentPiece) return;

    const newX = position.x - 1;
    if (!checkCollision(newX, position.y, currentPiece.shape)) {
      setPosition({ ...position, x: newX });
    }
  };

  const movePieceRight = () => {
    if (!currentPiece) return;

    const newX = position.x + 1;
    if (!checkCollision(newX, position.y, currentPiece.shape)) {
      setPosition({ ...position, x: newX });
    }
  };

  const rotatePiece = () => {
    if (!currentPiece) return;

    const rotatedPiece = currentPiece.shape[0].map((_, i) =>
      currentPiece.shape.map((row) => row[i]).reverse()
    );
    if (!checkCollision(position.x, position.y, rotatedPiece)) {
      setCurrentPiece({ ...currentPiece, shape: rotatedPiece });
    }
  };

  const checkCollision = (x, y, piece) => {
    for (let row = 0; row < piece.length; row++) {
      for (let col = 0; col < piece[row].length; col++) {
        if (
          piece[row][col] &&
          (board[y + row] && board[y + row][x + col]) !== 0
        ) {
          return true;
        }
      }
    }
    return false;
  };

  const placePiece = () => {
    if (!currentPiece) return;

    const newBoard = board.map((row) => [...row]);
    for (let row = 0; row < currentPiece.shape.length; row++) {
      for (let col = 0; col < currentPiece.shape[row].length; col++) {
        if (currentPiece.shape[row][col]) {
          newBoard[position.y + row][position.x + col] = currentPiece.color;
        }
      }
    }
    setBoard(newBoard);
    setCurrentPiece(randomPiece());
    setPosition({ x: BOARD_WIDTH / 2 - 1, y: 0 });

    if (checkCollision(position.x, position.y, currentPiece.shape)) {
      setGameOver(true);
    }
  };

  const handleKeyDown = (e) => {
    if (gameOver) return;

    switch (e.key) {
      case 'ArrowLeft':
        movePieceLeft();
        break;
      case 'ArrowRight':
        movePieceRight();
        break;
      case 'ArrowDown':
        movePieceDown();
        break;
      case 'ArrowUp':
        rotatePiece();
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  const renderBoard = () => {
    const displayBoard = board.map((row) => [...row]);

    if (currentPiece) {
      for (let row = 0; row < currentPiece.shape.length; row++) {
        for (let col = 0; col < currentPiece.shape[row].length; col++) {
          if (currentPiece.shape[row][col]) {
            displayBoard[position.y + row][position.x + col] = currentPiece.color;
          }
        }
      }
    }

    return displayBoard.map((row, rowIndex) => (
      <div key={rowIndex} className="row">
        {row.map((cell, cellIndex) => (
          <div
            key={cellIndex}
            className="cell"
            style={{ backgroundColor: cell || 'transparent' }}
          ></div>
        ))}
      </div>
    ));
  };

  return (
    <div className="tetris">
      <h1>Tetris</h1>
      <div className="board">{renderBoard()}</div>
      {gameOver && <div className="game-over">Game Over!</div>}
      <button onClick={startGame}>Start Game</button>
    </div>
  );
};

export default Tetris;