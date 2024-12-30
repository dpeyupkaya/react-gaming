import React from "react";
import "./Footer.css";  // Footer için stil dosyası

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p className="footer-text">
          © 2024 Gaming Hub | All Rights Reserved
        </p>
        <div className="footer-social">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="footer-link">
            Twitter
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="footer-link">
            Facebook
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="footer-link">
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
