// // src/pages/Login.jsx
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { Link } from 'react-router-dom';
// import axios from 'axios';
// import './css/login.css';

// const Login = () => {
//   const [nick, setNick] = useState('');
//   const [password, setPassword] = useState('');
//   const [responseMessage, setResponseMessage] = useState('');
//   const navigate = useNavigate();

//   const handleLogin = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await axios.post('https://ncs15-petdocs-api.onrender.com/validate_owner/', {
//         nick,
//         password
//       });

//       if (response.data.error) {
//         setResponseMessage({ message: response.data.error, color: 'red' });
//       } else if (response.data.message) {
//         setResponseMessage({ message: response.data.message, color: 'green' });
//         navigate('/home'); // Navigate to Home page on successful login
//       }
//     } catch (error) {
//       console.error('Error:', error);
//       setResponseMessage({ message: 'Error, por favor intente nuevamente.', color: 'red' });
//     }
//   };

//   return (
//     <div className="hero">
//       <div className="container-hero">
//         <div className="hero-info">
//           <h3 className="title-h1">Login</h3>
//           <p>Si aún no te registraste, puedes hacerlo <Link to="/Register" >&nbsp; acá!</Link>.</p>
//           <form onSubmit={handleLogin}>
//             <div>
//               <label>Usuario:</label>
//               <input
//                 type="text"
//                 id="loginNick"
//                 value={nick}
//                 onChange={(e) => setNick(e.target.value)}
//                 required
//               />
//             </div>
//             <div>
//               <label>Password:</label>
//               <input
//                 type="password"
//                 id="loginPassword"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 required
//               />
//             </div>
//             <button type="submit" className="btn-login">Iniciar Sesión</button>
//           </form>
//           {responseMessage && (
//             <p style={{ color: responseMessage.color }}>{responseMessage.message}</p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;

//***********************  opcion 1 ********************* */

// // src/pages/Login.jsx
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { Link } from 'react-router-dom';
// import axios from 'axios';
// import './css/login.css';

// const Login = () => {
//   const [nick, setNick] = useState('');
//   const [password, setPassword] = useState('');
//   const [responseMessage, setResponseMessage] = useState('');
//   const navigate = useNavigate();

//   const handleLogin = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await axios.post('https://ncs15-petdocs-api.onrender.com/validate_owner/', {
//         nick,
//         password
//       });

//       if (response.data.error) {
//         setResponseMessage({ message: response.data.error, color: 'red' });
//       } else if (response.data.message) {
//         setResponseMessage({ message: response.data.message, color: 'green' });
//         navigate('/home', { state: { nick } }); // Navigate to Home page with nick
//       }
//     } catch (error) {
//       console.error('Error:', error);
//       setResponseMessage({ message: 'Error, por favor intente nuevamente.', color: 'red' });
//     }
//   };

//   return (
//     <div className="hero">
//       <div className="container-hero">
//         <div className="hero-info">
//           <h3 className="title-h1">Login</h3>
//           <p>Si aún no te registraste, puedes hacerlo <Link to="/register">&nbsp; acá!</Link>.</p>
//           <form onSubmit={handleLogin}>
//             <div>
//               <label>Usuario:</label>
//               <input
//                 type="text"
//                 id="loginNick"
//                 value={nick}
//                 onChange={(e) => setNick(e.target.value)}
//                 required
//               />
//             </div>
//             <div>
//               <label>Password:</label>
//               <input
//                 type="password"
//                 id="loginPassword"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 required
//               />
//             </div>
//             <button type="submit" className="btn-login">Iniciar Sesión</button>
//           </form>
//           {responseMessage && (
//             <p style={{ color: responseMessage.color }}>{responseMessage.message}</p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;



//********************** opcion 2 ***************** */
// src/pages/Login.jsx
import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './css/login.css';
import { UserContext } from '../context/UserContext';

const Login = () => {
  const [nick, setNickInput] = useState('');
  const [password, setPassword] = useState('');
  const [responseMessage, setResponseMessage] = useState('');
  const { setNick } = useContext(UserContext);
  const navigate = useNavigate();
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
        setNick(nick); // Set the nick in context
        navigate('/home'); // Navigate to Home page on successful login
      }
    } catch (error) {
      console.error('Error:', error);
      setResponseMessage({ message: 'Error, por favor intente nuevamente.', color: 'red' });
    }
  };
// clases corregidas para que no causen problemas y mejora en el estilo
  return (
    <div className="login">
      <div className="login-container">
        <div className="login-info">
          <h3 className="title-h3">Login</h3>
          <p className='title-h3-p'>Si aún no te registraste, puedes hacerlo <Link to="/Register" >&nbsp; acá!</Link>.</p>
          <form onSubmit={handleLogin}>
            <div>
              <label className='login-label'>Usuario:</label>
              <input
                className='login-input'
                type="text"
                id="loginNick"
                value={nick}
                onChange={(e) => setNickInput(e.target.value)}
                required
              />
            </div>
            <div>
              <label className='login-label'>Password:</label>
              <input
                className='login-input'
                type="password"
                id="loginPassword"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="login-btn">Iniciar Sesión</button>
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
