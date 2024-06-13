import React, { useState } from 'react';
import { useContext } from 'react';
import { UserContext } from '../context/UserContext';
import { Link } from 'react-router-dom';
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
    <div className="hero">
      <div className="container-register">
        <div className="register-img-container">
          <img src={imgRegistro} />
        </div>
        <div className="register-info" >
          <h3 className="title-register-h3">Registrate</h3>
          <p>¿Ya estas registrado? Inicia sesión <Link to="/Login">&nbsp; acá!</Link></p>
          <form className='register-form' onSubmit={handleSubmit}>
            <div>
              <label className='register-label'>Usuario:</label>
              <input className='register-input' type="text" value={nick} onChange={(e) => setNick(e.target.value)} required />
            </div>
            <div>
              <label className='register-label'>Password:</label>
              <input className='register-input' type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            </div>
            <div>
              <label className='register-label'>Repetir Password:</label>
              <input className='register-input' type="password" value={repeatPassword} onChange={(e) => setRepeatPassword(e.target.value)} required /><br></br>
            </div>
            <div className='register-btns'>
              <button type="submit" className="btn-register">Regístrate</button>
              {error && <p style={{ color: 'red' }}>{error}</p>}
              {success && <p style={{ color: 'green' }}>{success}</p>}
            </div>

          </form>
          <p id="registerResponseMessage" style={{ color: responseColor }}>{responseMessage}</p>

        </div>
      </div>
    </div>
  );
};

export default Register;

