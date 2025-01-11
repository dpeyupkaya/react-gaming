import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Player } from "@lottiefiles/react-lottie-player";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // Göz ikonları için
import "./Register.css";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false); // Şifre görünürlüğü durumu
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Welcome, ${username}! You have successfully registered.`);
  };

  const goToLogin = () => {
    navigate("/login");
  };

  // Şifreyi göster/gizle fonksiyonu
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="register-container">
      {/* Yıldızlar için arka plan */}
      <div className="stars"></div>
      <Player
  autoplay
  loop
  src="https://assets10.lottiefiles.com/packages/lf20_myejiggj.json" // Telifsiz "Loading" animasyonu
  style={{
    position: "absolute",
    top: 10,
    left: 40,
    width: "60%",
    height: "80%",
    zIndex: 0,
  }}
/>
      {/* Register kutusu */}
      <div className="register-box">
        <h1>Register</h1>
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
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
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
              className="password-toggle"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />} {/* İkon değişimi */}
            </button>
          </div>
          <button type="submit" className="register-button">
            Register
          </button>
        </form>

        <p className="login-text">
          <Link to ="/login" className="secondary-link">
            ← Go to Login
            
            </Link></p>
      </div>
    </div>
  );
};

export default Register;