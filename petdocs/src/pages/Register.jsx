import React, { useState } from 'react';
import Input from '../components/Input';
import './css/register.css';
import imgRegistro from '../assets/portada-registro.png'

const Register = () => {
  const [nick, setNick] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');

  const handleNickChange = (e) => {
    setNick(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleRepeatPasswordChange = (e) => {
    setRepeatPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); 

    let regxp = /^([a-zA-Z0-9-]){1,16}$/;
    const errors = [];

    //Verificación de contraseña
    if (password !== repeatPassword) {
      errors.push('Las contraseñas no coinciden');
    } else {
      if(password.length < 8) {
        errors.push('Contraseña débil');
      } else if(password.length > 12) {
        errors.push('Contraseña muy larga');
      } else if (!regxp.test(password)) {
        errors.push('Contraseña no válida');
      }
    }

    //Verificación de usuario
    if(nick.length < 3) {
      errors.push('El usuario debe contener un mínimo de 3 caracteres');
    } else if(nick.length > 20) {
      errors.push('El usuario puede contener un máximo de 20 caracteres');
    } else if (!regxp.test(nick)) {
      errors.push('Usuario no válido');
    }

    if (errors.length > 0) {
      errors.forEach(error => alert(error));
      return;
    } 

    const formData = {
      nick : nick,
      password: password
    };
    
    console.log('Datos enviados:', formData);

    const sendLoginRequest = async () => {
      try {
        const response = await fetch('https://ncs15-petdocs-api.onrender.com/create_owner/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData)
        });

        if (response.ok) {
          console.log('Login exitoso');
        } else {
          console.error('Error en el login');
        }
      } catch (error) {
        console.error('Error en la solicitud:', error);
      }
    };
    sendLoginRequest();
  };

  return (
    <div className="container">
      <div className="image-container">
        <img src={imgRegistro}/>
      </div>
      <div className="form-container">
      <form onSubmit={handleSubmit}>
        <Input
          label="Usuario"
          type="user"
          value={nick}
          onChange={handleNickChange}
          className='inputs'
        />
        <Input
          label="Contraseña"
          type="password"
          value={password}
          onChange={handlePasswordChange}
          className='inputs'
        />
        <Input 
          label="Repetir Contraseña"
          type="password"
          value={repeatPassword}
          onChange={handleRepeatPasswordChange}
          className='inputs'
        />
        <button type="submit" className='btn-register'>Enviar</button>
      </form>
      </div>
    </div>
  );
}

export default Register;