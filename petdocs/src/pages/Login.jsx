// src/LoginForm.jsx
import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
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
    <div className="register-container">
    <div >
      <img src=""/>
    </div>
    <div >
    <h3 class="fs-1">Login</h3>
      <p>Si aún no te regsitraste, podes hacerlo <a href="/">acá!</a>.</p>
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
        <button type="submit">Login</button>
      </form>
      {responseMessage && (
        <p style={{ color: responseMessage.color }}>{responseMessage.message}</p>
      )}
      </div>
    </div>
  );
};

export default Login;



// src/components/LoginForm.jsx
// const LoginForm = () => {
//   const [nick, setNick] = useState('');
//   const [password, setPassword] = useState('');
//   const [responseMessage, setResponseMessage] = useState('');

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     try {
//       const response = await fetch('https://ncs15-petdocs-api.onrender.com/validate_owner/', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({ nick, password })
//       });
//       const data = await response.json();
//       if (data.error) {
//         setResponseMessage({ message: data.error, color: 'red' });
//       } else if (data.message) {
//         setResponseMessage({ message: data.message, color: 'green' });
//       }
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   };

//   return (
//     <div>
//       <h2>Login</h2>
//       <form id="loginForm" onSubmit={handleSubmit}>
//         <div>
//           <label htmlFor="loginNick">Username:</label>
//           <input
//             type="text"
//             id="loginNick"
//             value={nick}
//             onChange={(e) => setNick(e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <label htmlFor="loginPassword">Password:</label>
//           <input
//             type="password"
//             id="loginPassword"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//         </div>
//         <button type="submit">Login</button>
//       </form>
//       <p id="loginResponseMessage" style={{ color: responseMessage.color }}>
//         {responseMessage.message}
//       </p>
//     </div>
//   );
// };

// export default LoginForm;

