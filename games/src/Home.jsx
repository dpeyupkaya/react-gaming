import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";

export const Home = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Welcome to Gaming World</h1>
      <Player
        autoplay
        loop
        src="https://assets4.lottiefiles.com/private_files/lf30_obidsi0t.json"
        style={{ height: "400px", width: "400px" }}
      />
    </div>
  );
};

export default Home;