import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Yönlendirme için
import './Register.css';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Yönlendirme için

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Welcome, ${username}! You have successfully registered.`);
  };

  const goToLogin = () => {
    navigate('/login'); 
  };

  return (
    <div className="register-container">
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
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
            />
          </div>
          <button type="submit">Register</button>
        </form>
        <button className="login-button" onClick={goToLogin}>
          Go to Login
        </button>
      </div>
    </div>
  );
};

export default Register;