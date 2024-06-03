// import React from 'react';
// import './css/login.css';
// const Login = () => (
//   <div className='login-container'>
//     <h2>Login</h2>
//     <div className='form-container'>
//     <form >
//       <label>
//         Username:
        
//       </label>
//       <input type="text" name="username" /><br></br>
//       <label>
//         Password:
//       </label>
//       <input type="password" name="password" /><br></br>
//       <button type="submit" className="btn-login">Login</button>
//     </form>
//     </div>

//   </div>
// );

// export default Login;


// src/components/Login.jsx
import React, { useState } from 'react';
import './css/login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (username === 'user' && password === 'password') {
      alert('Login exitoso');
    } else {
      alert('Usuario o clave invalidos');
    }
  };

  return (
    <div className="container mt-5">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">Username</label>
          <input 
            type="text" 
            className="form-control" 
            id="username" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
            required 
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input 
            type="password" 
            className="form-control" 
            id="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
        </div>
        <button type="submit" className="btn-login">Login</button>
      </form>
    </div>
  );
};

export default Login;
