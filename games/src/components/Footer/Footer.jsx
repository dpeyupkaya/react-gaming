import React from "react";
import "./Footer.css";  // Footer için stil dosyası
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p className="footer-text">
          © 2024 Gaming Hub | All Rights Reserved
        </p>
        <div className="footer-social">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="twitter-link">
          <FaSquareXTwitter />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="facebook-link">
          <FaFacebook />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="instagram-link">
          <FaInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
