import React from "react";
import "./Navbar.css"; // Navbar için stil dosyası

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">Gaming Hub</div>
        <ul className="navbar-menu">
          <li className="navbar-item">Snake Game</li>
          <li className="navbar-item">Tetris</li>
          <li className="navbar-item">Pac-Man</li>
          <li className="navbar-item">Space Invaders</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
