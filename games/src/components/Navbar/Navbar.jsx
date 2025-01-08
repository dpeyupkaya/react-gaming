import React from "react";
import { useNavigate } from "react-router-dom"; // useNavigate hook'unu ekleyin
import "./Navbar.css"; // Navbar için stil dosyası

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo"><button onClick={()=>navigate("/")}>Gaming Hub</button></div>
        <ul className="navbar-menu">
          <li className="navbar-item">
            <button onClick={() => navigate("/snake-game")}>Snake Game</button>
          </li>
          <li className="navbar-item">
            <button onClick={() => navigate("/tetris")}>Tetris</button>
          </li>
          <li className="navbar-item">
            <button onClick={() => navigate("/pacman")}>Pac-Man</button>
          </li>
          <li className="navbar-item">
            <button onClick={() => navigate("/oldgame")}>Old Game</button>
          </li>
          <li className="navbar-item">
            <button onClick={() => navigate("/login")}>Sign In</button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;