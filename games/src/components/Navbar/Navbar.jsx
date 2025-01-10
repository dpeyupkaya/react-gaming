import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";
import { FaClock } from "react-icons/fa";
import Modal from "../Modal"
const Navbar = () => {
  const navigate = useNavigate();
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [isModalOpen, setIsModalOpen] = useState(false); 


  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Modal'ı aç
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Modal'ı kapat
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <button onClick={() => navigate("/")}>Gaming Hub</button>
        </div>
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
        <div className="navbar-clock" onClick={openModal}>
          <FaClock className="mr-2" /> {/* Saat ikonu */}
          <span>{time}</span> {/* Saat metni */}
        </div>
      </div>

      {/* Modal */}
      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </nav>
  );
};

export default Navbar;