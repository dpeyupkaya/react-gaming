import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";
import { FaClock, FaBars } from "react-icons/fa";
import Modal from "../Modal";

const Navbar = () => {
  const navigate = useNavigate();
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true); // Navbar'ın görünürlüğü
  const [isHovered, setIsHovered] = useState(false);  

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const hours = now.getHours().toString().padStart(2, "0"); // Saat (2 haneli)
      const minutes = now.getMinutes().toString().padStart(2, "0"); // Dakika (2 haneli)
      setTime(`${hours}:${minutes}`); // Saat ve dakikayı birleştir
    }, 1000); // Her saniye güncelle
  
    return () => clearInterval(timer); // Temizleme
  }, []);

  // Scroll event listener'ı ekle
  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        // Aşağı kaydırma
        setIsNavbarVisible(false);
      } else {
        // Yukarı kaydırma
        setIsNavbarVisible(true);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className={`navbar ${isNavbarVisible ? "" : "hidden"}`}>
      <div className="navbar-container">
        <div className="navbar-logo">
          <button onClick={() => navigate("/")}>Gaming Hub</button>
        </div>

        <div className="mobile-menu-icon" onClick={toggleMobileMenu}>
          <FaBars />
        </div>

        <ul className={`navbar-menu ${isMobileMenuOpen ? "active" : ""}`}>
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

        <div className="navbar-clock" onClick={openModal}  onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
  <FaClock className="clock-icon" />
  {isHovered && <span className="clock-text">{time}</span>}
</div>
      </div>

      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </nav>
  );
};

export default Navbar;