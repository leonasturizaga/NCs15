// src/LoginForm.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './css/login.css';


// src/components/Login.jsx
const Login = () => {
  const [nick, setNick] = useState('');
  const [password, setPassword] = useState('');
  const [responseMessage, setResponseMessage] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://ncs15-petdocs-api.onrender.com/validate_owner/', {
        nick,
        password
      });

      if (response.data.error) {
        setResponseMessage({ message: response.data.error, color: 'red' });
      } else if (response.data.message) {
        setResponseMessage({ message: response.data.message, color: 'green' });
      }
    } catch (error) {
      console.error('Error:', error);
      setResponseMessage({ message: 'Error, por favor intente nuevamente.', color: 'red' });
    }
  };

  return (
    <div className="hero">
      <div className="container-hero">

      <div className="hero-info" >
          <h3 className="title-h1">Login</h3>
          <p>Si aún no te regsitraste, puedes hacerlo <p>&nbsp;</p><a href="/">acá!</a>.</p>
          <form onSubmit={handleLogin}>
            <div>
              <label>Usuario:</label>
              <input
                type="text"
                id="loginNick"
                value={nick}
                onChange={(e) => setNick(e.target.value)}
                required
              />
            </div>
            <div>
              <label>Password:</label>
              <input
                type="password"
                id="loginPassword"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="btn-login">Iniciar Sesión</button>
          </form>
          {responseMessage && (
            <p style={{ color: responseMessage.color }}>{responseMessage.message}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;