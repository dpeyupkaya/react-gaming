import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { Player } from "@lottiefiles/react-lottie-player";
import "./Login.css";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // Göz ikonları için

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false); // Şifre görünürlüğü durumu
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Welcome, ${username}!`);
  };

  const gotoRegister = () => {
    navigate("/register");
  };

  const goHome = () => {
    navigate("/");
  };

  // Şifreyi göster/gizle fonksiyonu
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="login-container">
      {/* Yıldızlar için arka plan */}
      <div className="stars"></div>
         <Player
        autoplay
        loop
        src="https://assets10.lottiefiles.com/packages/lf20_myejiggj.json" // Telifsiz "Loading" animasyonu
        style={{
          position: "absolute",
          top: 10,
         right: 40,
          width: "60%",
          height: "80%",
          zIndex: 0,
        }}
      />

      {/* Login kutusu */}
      <div className="login-box">
        <h1>Gaming Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
              required
            />
          </div>
          <div className="input-group">
            <input
              type={showPassword ? "text" : "password"} // Şifre görünürlüğü
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
            />
            <button
              type="button"
              className="password"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />} {/* İkon değişimi */}
            </button>
          </div>
          <button type="submit" className="login-button" onClick={goHome}>
            Login
          </button>
        </form>
      <p className="register-text"> 
        <Link to="/register" className="secondary-link">
  Go to Register →
</Link>
</p>

      </div>
    </div>
  );
};

export default Login;