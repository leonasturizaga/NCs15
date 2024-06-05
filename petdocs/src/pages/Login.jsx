// src/LoginForm.jsx
import React, { useState } from 'react';
import axios from 'axios';
import './css/login.css';


const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await axios.post('https://ncs15-petdocs-api.onrender.com/validate_owner/', {
        username,
        password
      });

      console.log(response.data);

    } catch (error) {
      setError('Login failed. Please check your credentials.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div  >
      
      <div >
      <h3 class="fs-1">Login</h3>
      <p>Si aun no te Registraste, podes hacerlo <a href="#" class="link-warning">acá</a></p>

      <form onSubmit={handleSubmit}>
        <div >
          <label className="form-label">Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label className="form-label">Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <br></br>
        <div>
          <button type="submit" disabled={loading} className="btn-login">
            {loading ? 'Logging in...' : 'Login'}
            {error && <p style={{ color: 'red' }}>{error}</p>}
          </button>
        </div>

      </form>
      </div>
    </div>
  );
};

export default Login;
