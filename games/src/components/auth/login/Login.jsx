import React, { useState } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Welcome, ${username}!`);
  };
  const gotoRegister = () => {
    navigate('/register');
  }
  const harun =() => {
    navigate("/")
  }



  return (
    <div className="login-container">
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
          <button type="submit">Login</button>

        
        </form>
        <button className="login-button" onClick={gotoRegister}>
          Go to Register
        </button>
        <button className='home-button' onClick={harun}>
            Go Home


        </button>

      </div>
    </div>
  );
};

export default Login;