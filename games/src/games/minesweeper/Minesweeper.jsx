import React, { useState, useEffect } from 'react';
import './Minesweeper.css';

const BOARD_SIZE = 10;
const NUM_MINES = 10;

const createBoard = () => {
  const board = Array(BOARD_SIZE)
    .fill()
    .map(() => Array(BOARD_SIZE).fill({ value: 0, isRevealed: false, isFlagged: false }));

  // Mayınları yerleştir
  let minesPlaced = 0;
  while (minesPlaced < NUM_MINES) {
    const row = Math.floor(Math.random() * BOARD_SIZE);
    const col = Math.floor(Math.random() * BOARD_SIZE);
    if (board[row][col].value !== 'X') {
      board[row][col] = { ...board[row][col], value: 'X' };
      minesPlaced++;
    }
  }

  // Komşu mayın sayılarını hesapla
  for (let row = 0; row < BOARD_SIZE; row++) {
    for (let col = 0; col < BOARD_SIZE; col++) {
      if (board[row][col].value === 'X') continue;

      let mineCount = 0;
      for (let i = -1; i <= 1; i++) {
        for (let j = -1; j <= 1; j++) {
          if (i === 0 && j === 0) continue;
          const newRow = row + i;
          const newCol = col + j;
          if (
            newRow >= 0 &&
            newRow < BOARD_SIZE &&
            newCol >= 0 &&
            newCol < BOARD_SIZE &&
            board[newRow][newCol].value === 'X'
          ) {
            mineCount++;
          }
        }
      }
      board[row][col] = { ...board[row][col], value: mineCount };
    }
  }

  return board;
};

const Minesweeper = () => {
  const [board, setBoard] = useState(createBoard());
  const [gameOver, setGameOver] = useState(false);
  const [gameWon, setGameWon] = useState(false);

  // Hücreyi aç
  const revealCell = (row, col) => {
    if (gameOver || gameWon || board[row][col].isRevealed || board[row][col].isFlagged) return;

    const newBoard = [...board];
    newBoard[row][col] = { ...newBoard[row][col], isRevealed: true };

    if (newBoard[row][col].value === 'X') {
      setGameOver(true);
      revealAllMines();
    } else if (newBoard[row][col].value === 0) {
      revealAdjacentCells(row, col, newBoard);
    }

    setBoard(newBoard);
    checkWin(newBoard);
  };

  // Komşu hücreleri aç (0 değerli hücreler için)
  const revealAdjacentCells = (row, col, newBoard) => {
    for (let i = -1; i <= 1; i++) {
      for (let j = -1; j <= 1; j++) {
        if (i === 0 && j === 0) continue;
        const newRow = row + i;
        const newCol = col + j;
        if (
          newRow >= 0 &&
          newRow < BOARD_SIZE &&
          newCol >= 0 &&
          newCol < BOARD_SIZE &&
          !newBoard[newRow][newCol].isRevealed
        ) {
          newBoard[newRow][newCol] = { ...newBoard[newRow][newCol], isRevealed: true };
          if (newBoard[newRow][newCol].value === 0) {
            revealAdjacentCells(newRow, newCol, newBoard);
          }
        }
      }
    }
  };

  // Tüm mayınları aç (oyun kaybedildiğinde)
  const revealAllMines = () => {
    const newBoard = board.map((row) =>
      row.map((cell) => (cell.value === 'X' ? { ...cell, isRevealed: true } : cell))
    );
    setBoard(newBoard);
  };

  // Bayrak koy/kaldır
  const toggleFlag = (row, col, e) => {
    e.preventDefault(); // Sağ tık menüsünü engelle
    if (gameOver || gameWon || board[row][col].isRevealed) return;

    const newBoard = [...board];
    newBoard[row][col] = { ...newBoard[row][col], isFlagged: !newBoard[row][col].isFlagged };
    setBoard(newBoard);
  };

  // Kazanma durumunu kontrol et
  const checkWin = (newBoard) => {
    const allNonMinesRevealed = newBoard.every((row) =>
      row.every((cell) => cell.value === 'X' || cell.isRevealed)
    );
    if (allNonMinesRevealed) {
      setGameWon(true);
    }
  };

  // Oyunu sıfırla
  const resetGame = () => {
    setBoard(createBoard());
    setGameOver(false);
    setGameWon(false);
  };

  return (
    <div className="minesweeper">

      <div className="board">
        {board.map((row, rowIndex) => (
          <div key={rowIndex} className="row">
            {row.map((cell, colIndex) => (
              <div
                key={colIndex}
                className={`cell ${cell.isRevealed ? 'revealed' : ''} ${cell.isFlagged ? 'flagged' : ''}`}
                onClick={() => revealCell(rowIndex, colIndex)}
                onContextMenu={(e) => toggleFlag(rowIndex, colIndex, e)}
              >
                {cell.isRevealed && cell.value !== 0 && cell.value !== 'X' && cell.value}
                {cell.isRevealed && cell.value === 'X' && '💣'}
                {cell.isFlagged && !cell.isRevealed && '🚩'}
              </div>
            ))}
          </div>
        ))}
      </div>
      {gameOver && <div className="game-over">Game Over! You Hit a Mine! 💥</div>}
      {gameWon && <div className="game-won">Congratulations! You Won! 🎉</div>}
      <button className='cafer' onClick={resetGame}>Restart Game</button>
    </div>
  );
};

export default Minesweeper;