// import { React, useState } from 'react';
// import Input from '../components/Input';
// import './css/register.css';
// import imgRegistro from '../assets/portada-registro.png'

// const Register = () => {
//   const [nick, setNick] = useState('');
//   const [password, setPassword] = useState('');
//   const [repeatPassword, setRepeatPassword] = useState('');

//   const handleNickChange = (e) => {
//     setNick(e.target.value);
//   };

//   const handlePasswordChange = (e) => {
//     setPassword(e.target.value);
//   };

//   const handleRepeatPasswordChange = (e) => {
//     setRepeatPassword(e.target.value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault(); 

//     let regxp = /^([a-zA-Z0-9-]){1,16}$/;

//     if (password !== repeatPassword) {
//       alert('Las contraseñas no coinciden');
//     }

//     if(password.length < 8) {
//       alert('Contraseña débil');
//     }else if(password.length > 12) {
//       alert('Contraseña muy larga')
//     }else {
//       if(regxp.test(password) === false){
//         alert('Contraseña no valida')
//       } else {
//         alert('Contraseña exitosa')
//         return
//       }
//     }

//     const formData = {
//       nick : nick,
//       password: password
//     };
    
//     console.log('Datos enviados:', formData);

//     const sendLoginRequest = async () => {
//       try {
//         const response = await fetch('', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json'
//           },
//           body: JSON.stringify(formData)
//         });

//         if (response.ok) {
//           console.log('Login exitoso');
//         } else {
//           console.error('Error en el login');
//         }
//       } catch (error) {
//         console.error('Error en la solicitud:', error);
//       }
//     };
//     sendLoginRequest();
//   };

//   return (
//     <div className="register-container">
//       <div >
//         <img src={imgRegistro}/>
//       </div>
//       <div >
      
//       <h3 class="fs-1">Registrate</h3>
//       <p>Si ya estas registrado, inicia sesion <a href="#" class="link-warning">acá</a></p>

//       <form onSubmit={handleSubmit}>
//         <Input
//           label="Usuario"
//           type="user"
//           value={nick}
//           onChange={handleNickChange}
//           className='inputs'
//         />
//         <Input
//           label="Contraseña"
//           type="password"
//           value={password}
//           onChange={handlePasswordChange}
//           className='inputs'
//         />
//         <Input 
//           label="Repetir Contraseña"
//           type="password"
//           value={repeatPassword}
//           onChange={handleRepeatPasswordChange}
//           className='inputs'
//         />
//         <button type="submit" className='btn-register'>Enviar</button>
//       </form>
      
//       </div>
//     </div>
//   );
// }

// export default Register;





// src/RegisterForm.jsx    *** 2 ***
// import React, { useState } from 'react';
// import axios from 'axios';
// import './css/register.css';
// import imgRegistro from '../assets/portada-registro.png'

// const Register = () => {
//   const [formData, setFormData] = useState({
//     username: '',
//     password: '',
//     repeatPassword: '',
//     email: '',
//     image: null,
//   });
//   const [error, setError] = useState('');
//   const [success, setSuccess] = useState('');
//   const [loading, setLoading] = useState(false);

//   const validateForm = () => {
//     const { username, password, repeatPassword, email } = formData;
//     const usernameRegex = /^[a-zA-Z0-9]{3,20}$/;
//     const passwordRegex = /^(?=.*[A-Z])[A-Za-z0-9]{8,12}$/;
//     if (!usernameRegex.test(username)) {
//       return 'El nombre de usuario debe tener entre 3 y 20 caracteres y no contener espacios.';
//     }
//     if (!passwordRegex.test(password)) {
//       return 'La contraseña debe tener entre 8 y 12 caracteres, contener solo letras y números e incluir al menos una letra mayúscula.';
//     }
//     if (password !== repeatPassword) {
//       return 'Las contraseñas no coinciden.';
//     }
//     if (!email) {
//       return 'Se requiere correo electrónico.';
//     }
//     return '';
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleFileChange = (e) => {
//     setFormData({ ...formData, image: e.target.files[0] });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError('');
//     setSuccess('');
//     const errorMessage = validateForm();
//     if (errorMessage) {
//       setError(errorMessage);
//       return;
//     }
//     setLoading(true);

//     try {
//       const formDataObj = new FormData();
//       for (const key in formData) {
//         formDataObj.append(key, formData[key]);
//       }
      
//       const response = await axios.post('https://nc15-petdocs-api.onrender.com/owner/', formDataObj, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//       });

//       setSuccess('Registro Exitoso!');
//     } catch (error) {
//       setError('Fallo el Registro. Intente nuevamente.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="register-container">
//       <div >
//         <img src={imgRegistro}/>
//       </div>
//       <div >
//       <h3 class="fs-1">Registrate</h3>
//       <p>Si ya estas registrado, inicia sesion <a href="#" class="link-warning">acá</a></p>

//       <form onSubmit={handleSubmit} encType="multipart/form-data">
//         <div>
//           <label>Username:</label>
//           <input
//             type="text"
//             name="username"
//             value={formData.username}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div>
//           <label>Password:</label>
//           <input
//             type="password"
//             name="password"
//             value={formData.password}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div>
//           <label>Repeat Password:</label>
//           <input
//             type="password"
//             name="repeatPassword"
//             value={formData.repeatPassword}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div>
//           <label>Email:</label>
//           <input
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div>
//           <label>Image (optional):</label>
//           <input
//             type="file"
//             name="image"
//             onChange={handleFileChange}
//           />
//         </div>
//         <button type="submit" disabled={loading} className='btn-register'>
//           {loading ? 'Enviando datos...' : 'Registro'}
//         </button>
//         {error && <p style={{ color: 'red' }}>{error}</p>}
//         {success && <p style={{ color: 'green' }}>{success}</p>}
//       </form>

//       </div>
//     </div>
//   );
// };

// export default Register;






// src/RegisterForm.jsx
import React, { useState } from 'react';
import axios from 'axios';
import './css/register.css';
import imgRegistro from '../assets/portada-registro.png'

const Register = () => {
const [nick, setNick] = useState('');
const [password, setPassword] = useState('');
const [repeatPassword, setRepeatPassword] = useState('');
const [ownerPicture, setOwnerPicture] = useState('');
const [mail, setMail] = useState('');
const [error, setError] = useState('');
const [success, setSuccess] = useState('');
const [loading, setLoading] = useState(false);

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

const handleSubmit = async (e) => {
  e.preventDefault();
  setError('');
  setSuccess('');

  if (!validateForm()) return;

  setLoading(true);
  
  try {
    const response = await axios.post('https://nc15-petdocs-api.onrender.com/owner/', {
      nick,
      password,
      owner_picture: ownerPicture,
      mail
    });

    setSuccess('Registro Exitoso!');
    console.log(response.data);
  } catch (error) {
    setError('Fallo el Registro, intente nuevamente.');
  } finally {
    setLoading(false);
  }
};

return (
  <div className="register-container">
    <div >
      <img src={imgRegistro}/>
    </div>
    <div >
    <h3 class="fs-1">Registrate</h3>
    <p>Si ya estas registrado, inicia sesion <a href="#" class="link-warning">acá</a></p>

    <form onSubmit={handleSubmit}>
      <div>
        <label>Usuario:</label>
        <input
          type="text"
          value={nick}
          onChange={(e) => setNick(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Repetir Password:</label>
        <input
          type="password"
          value={repeatPassword}
          onChange={(e) => setRepeatPassword(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Imagen de usuario (opcional):</label>
        <input
          type="text"
          value={ownerPicture}
          onChange={(e) => setOwnerPicture(e.target.value)}
        />
      </div>
      <div>
        <label>Email (opcional):</label>
        <input
          type="email"
          value={mail}
          onChange={(e) => setMail(e.target.value)}
        />
      </div>
      <button type="submit" disabled={loading}>
        {loading ? 'Enviando datos...' : 'Registro'}
      </button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {success && <p style={{ color: 'green' }}>{success}</p>}
    </form>

    </div>
    </div>
  );
};

export default Register;