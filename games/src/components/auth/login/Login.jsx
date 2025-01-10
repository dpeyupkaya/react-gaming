import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
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

  return (
    <div className="login-container">
      {/* Yıldızlar için arka plan */}
      <div className="stars"></div>

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
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
            />
          </div>
          <button type="submit" className="login-button">
            Login
          </button>
        </form>

        {/* Diğer butonlar */}
        <button className="secondary-button" onClick={gotoRegister}>
          Go to Register
        </button>
        <button className="secondary-button" onClick={goHome}>
          Go Home
        </button>
      </div>
    </div>
  );
};

export default Login;