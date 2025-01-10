import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import { useNavigate } from "react-router-dom";
import { Contact } from "./components/contact/Contact.jsx";
import "./Home.css";

export const Home = () => {
  const navigate = useNavigate();

  const goToLogin = () => {
    navigate("/login");
  };

  return (
    <div className="page-container">
      {/* Home bölümü */}
      <div className="home">
        <h1>Welcome to Gaming HUB</h1>
        <div className="start-container">
          <button className="start-button" onClick={goToLogin}>
            Start UP
          </button>
        </div>

        <Player
          autoplay
          loop
          src="https://assets5.lottiefiles.com/packages/lf20_1pxqjqps.json"
          style={{ height: "400px", width: "400px" }}
        />
      </div>

      {/* Contact bölümü */}
      <div className="contact-section">
        <Contact />
      </div>
    </div>
  );
};

export default Home;