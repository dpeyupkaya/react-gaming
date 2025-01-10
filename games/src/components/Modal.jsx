import React from "react";
import "./Modal.css";

const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2 className="modal-title">🎮 Gaming Hub 🎮</h2>
        <p className="modal-message">
          Hoş geldiniz! Gaming Hub'da klasik oyunların keyfini çıkarın. 🕹️
        </p>
        <div className="modal-games">
          <p>Oynamak için aşağıdaki oyunlardan birini seçin:</p>
          <ul>
            <li>🐍 Snake Game</li>
            <li>🧊 Tetris</li>
            <li>👻 Pac-Man</li>
            <li>🕹️ Retro Games</li>
          </ul>
        </div>
        <button className="modal-close-button" onClick={onClose}>
          Kapat
        </button>
      </div>
    </div>
  );
};

export default Modal;