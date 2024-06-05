// import { React, useState } from 'react';
// import Input from '../components/Input';
// import './css/register.css';
// import imgRegistro from '../assets/portada-registro.png'


//******opcion 2 */

// src/RegisterForm.jsx
// import React, { useState } from 'react';
// import axios from 'axios';
// import './css/register.css';
// import imgRegistro from '../assets/portada-registro.png'

// const Register = () => {
// const [nick, setNick] = useState('');
// const [password, setPassword] = useState('');
// const [repeatPassword, setRepeatPassword] = useState('');
// const [ownerPicture, setOwnerPicture] = useState('');
// const [mail, setMail] = useState('');
// const [error, setError] = useState('');
// const [success, setSuccess] = useState('');
// const [loading, setLoading] = useState(false);

// const validateForm = () => {
//   const nickRegex = /^[a-zA-Z0-9]{3,20}$/;
//   const passwordRegex = /^(?=.*[A-Z])[a-zA-Z0-9]{8,12}$/;

//   if (!nickRegex.test(nick)) {
//     setError('El nombre de usuario debe tener entre 3 y 20 caracteres y no contener espacios.');
//     return false;
//   }
//   if (!passwordRegex.test(password)) {
//     setError('La contraseña debe tener entre 8 y 12 caracteres, contener solo letras y números e incluir al menos una letra mayúscula.');
//     return false;
//   }
//   if (password !== repeatPassword) {
//     setError('Las contraseñas no coinciden.');
//     return false;
//   }
//   return true;
// };

// const handleSubmit = async (e) => {
//   e.preventDefault();
//   setError('');
//   setSuccess('');

//   if (!validateForm()) return;

//   setLoading(true);
  
//   try {
//     const response = await axios.post('https://nc15-petdocs-api.onrender.com/owner/', {
//       nick,
//       password,
//       owner_picture: ownerPicture,
//       mail
//     });

//     setSuccess('Registro Exitoso!');
//     console.log(response.data);
//   } catch (error) {
//     setError('Fallo el Registro, intente nuevamente.');
//   } finally {
//     setLoading(false);
//   }
// };

// return (
//   <div className="register-container">
//     <div >
//       <img src={imgRegistro}/>
//     </div>
//     <div >
//     <h3 class="fs-1">Registrate</h3>
//     <p>Si ya estas registrado, inicia sesion <a href="#" class="link-warning">acá</a></p>

//     <form onSubmit={handleSubmit}>
//       <div>
//         <label>Usuario:</label>
//         <input
//           type="text"
//           value={nick}
//           onChange={(e) => setNick(e.target.value)}
//           required
//         />
//       </div>
//       <div>
//         <label>Password:</label>
//         <input
//           type="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//         />
//       </div>
//       <div>
//         <label>Repetir Password:</label>
//         <input
//           type="password"
//           value={repeatPassword}
//           onChange={(e) => setRepeatPassword(e.target.value)}
//           required
//         />
//       </div>
//       <div>
//         <label>Imagen de usuario (opcional):</label>
//         <input
//           type="text"
//           value={ownerPicture}
//           onChange={(e) => setOwnerPicture(e.target.value)}
//         />
//       </div>
//       <div>
//         <label>Email (opcional):</label>
//         <input
//           type="email"
//           value={mail}
//           onChange={(e) => setMail(e.target.value)}
//         />
//       </div>
//       <button type="submit" disabled={loading}>
//         {loading ? 'Enviando datos...' : 'Registro'}
//       </button>
//       {error && <p style={{ color: 'red' }}>{error}</p>}
//       {success && <p style={{ color: 'green' }}>{success}</p>}
//     </form>

//     </div>
//     </div>
//   );
// };

// export default Register;



// ****** opcion 3******
// src/components/Register.jsx
import React, { useState } from 'react';
import axios from 'axios';
import './css/register.css';
import imgRegistro from '../assets/portada-registro.png'

const Register = () => {
  const [nick, setNick] = useState('');
  const [password, setPassword] = useState('');
//adding
const [repeatPassword, setRepeatPassword] = useState('');
const [ownerPicture, setOwnerPicture] = useState('');
const [mail, setMail] = useState('');
const [error, setError] = useState('');
const [success, setSuccess] = useState('');
const [loading, setLoading] = useState(false);

  const [responseMessage, setResponseMessage] = useState('');
  const [responseColor, setResponseColor] = useState('');

//adding
const validateForm = () => {
  const nickRegex = /^[a-zA-Z0-9]{3,20}$/;
  const passwordRegex = /^(?=.*[A-Z])[a-zA-Z0-9]{8,12}$/;

  if (!nickRegex.test(nick)) {
    setError('El nombre de usuario debe tener entre 3 y 20 caracteres y no contener espacios.');
    return false;
  }
  if (!passwordRegex.test(password)) {
    setError('La contraseña debe tener entre 8 y 12 caracteres, contener solo letras y números e incluir al menos una letra mayúscula.');
    return false;
  }
  if (password !== repeatPassword) {
    setError('Las contraseñas no coinciden.');
    return false;
  }
  return true;
};


  const handleSubmit = async (event) => {
    event.preventDefault();
      setError('');
      setSuccess('');
      setResponseMessage('');

    //adding
  if (!validateForm()) return;

    try {
      const response = await axios.post('https://ncs15-petdocs-api.onrender.com/create_owner/', {
        nick,
        password,
      });
      if (response.data.error) {
        setResponseMessage(response.data.error);
        setResponseColor('red');
      } else {
        setResponseMessage('Registration successful');
        setResponseColor('green');
      }
    } catch (error) {
      console.error('Error:', error);
      setResponseMessage('An error occurred. Please try again.');
      setResponseColor('red');
    }
  };

  return (
  <div className="register-container">
    <div >
      <img src={imgRegistro}/>
    </div>
    <div >
    <h3 class="fs-1">Registrate</h3>
      <p>If you already have an account, please <a href="/login">login here</a>.</p>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input type="text" value={nick} onChange={(e) => setNick(e.target.value)} required />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <div>
          <label>Repetir Password:</label>
          <input type="password" value={repeatPassword} onChange={(e) => setRepeatPassword(e.target.value)} required />
        </div>
        <button type="submit">Register</button>
           {error && <p style={{ color: 'red' }}>{error}</p>}
           {success && <p style={{ color: 'green' }}>{success}</p>}
      </form>
      <p id="registerResponseMessage" style={{ color: responseColor }}>{responseMessage}</p>

      </div>
    </div>
  );
};

export default Register;

