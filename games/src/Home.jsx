import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { useNavigate } from "react-router-dom";
 export const Home = () => {


  const navigate = useNavigate();


const goeyup = () => {
  navigate('/login');
}

  return (
<>
<Navbar />
<div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>Welcome to Gaming World</h1>
     <div className="start">

     <button onClick={goeyup}>
        Start UP
      </button>

     </div>
     
      <Player
        autoplay
        loop
        src="https://assets4.lottiefiles.com/private_files/lf30_obidsi0t.json"
        style={{ height: "400px", width: "400px" }}
      />
    </div>
    <Footer />
    </>

   
  );
};

export default Home;