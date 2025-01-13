import React from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import "./Contact.css";
import Home from "../../Home";
import { Navigate, useNavigate } from "react-router-dom";


export const Contact = () => {

  const navigate = useNavigate();

  return (
    <div className="contact-container">
      {/* İletişim formu ve bilgiler */}
      <div className="contact-content">
        <h1>Contact Us</h1>
        <p>Have questions or feedback? Reach out to us!</p>

        <div className="contact-info">
          <div className="info-item">
            <FaEnvelope className="info-icon" />
            <span>info@gaminghub.com</span>
          </div>
          <div className="info-item">
            <FaPhone className="info-icon" />
            <span>+1 234 567 890</span>
          </div>
          <div className="info-item">
            <FaMapMarkerAlt className="info-icon" />
            <span>123 Gaming Street, Virtual World</span>
          </div>
        </div>

        {/* İletişim formu */}
        <form className="contact-form">
          <div className="form-group">
            <input type="text" placeholder="Your Name" required />
          </div>
          <div className="form-group">
            <input type="email" placeholder="Your Email" required />
          </div>
          <div className="form-group">
            <textarea placeholder="Your Message" rows="5" required></textarea>
          </div>
          <button type="submit" className="submit-button">
            Send Message
          </button>
          
        </form>
        <button className="home-button" onClick={()=> navigate ("/")}>Go Home</button>
      </div>
    </div>
  );
};

export default Contact;