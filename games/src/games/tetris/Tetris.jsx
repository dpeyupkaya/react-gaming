import React, { useState, useEffect, useCallback } from 'react';
import './Tetris.css';

const BOARD_WIDTH = 10;
const BOARD_HEIGHT = 20;

const createBoard = () => Array.from(Array(BOARD_HEIGHT), () => Array(BOARD_WIDTH).fill(0));

const Tetris = () => {
  const [board, setBoard] = useState(createBoard());
  const [currentPiece, setCurrentPiece] = useState(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const pieces = [
    [[1, 1, 1, 1]], // I piece
    [[1, 1], [1, 1]], // O piece
    [[0, 1, 0], [1, 1, 1]], // T piece
    [[1, 0, 0], [1, 1, 1]], // L piece
    [[0, 0, 1], [1, 1, 1]], // J piece
    [[0, 1, 1], [1, 1, 0]], // S piece
    [[1, 1, 0], [0, 1, 1]], // Z piece
  ];

  const randomPiece = () => {
    const randomIndex = Math.floor(Math.random() * pieces.length);
    return pieces[randomIndex];
  };

  const startGame = useCallback(() => {
    setBoard(createBoard());
    setCurrentPiece(randomPiece());
    setPosition({ x: 0, y: 0 });
  }, []);

  useEffect(() => {
    startGame();
  }, [startGame]);

  const renderBoard = () => {
    return board.map((row, rowIndex) => (
      <div key={rowIndex} className="row">
        {row.map((cell, cellIndex) => (
          <div key={cellIndex} className={`cell ${cell ? 'filled' : ''}`}></div>
        ))}
      </div>
    ));
  };

  return (
    <div className="tetris">
      <h1>Tetris</h1>
      <div className="board">{renderBoard()}</div>
      <button onClick={startGame}>Start Game</button>
    </div>
  );
};

export default Tetris;