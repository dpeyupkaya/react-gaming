import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();

  const goToLogin = () => {
    navigate('/login');
  }

  return (
    <div className="home">
      <h1>Welcome to Gaming World</h1>
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
  );
};

export default Home;