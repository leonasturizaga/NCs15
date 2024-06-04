import React, { useState } from 'react';
// import Input from '../components/Input';
import './css/login.css';
import imgLogin from '../assets/portada-login.png'

const Login = () => {
  const [nick, setNick] = useState('');
  const [password, setPassword] = useState('');

  const handleNickChange = (e) => {
    setNick(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); 
  
    const formData = {
      nick: nick,
      password: password
    };
  
    try {
      const response = await fetch("https://ncs15-petdocs-api.onrender.com/validate_owner/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        const responseData = await response.json();
        localStorage.setItem("user", JSON.stringify(responseData.user));
          setTimeout(() => {
            window.location.href = "/";
          }, 1000);
      } else {
        console.error("Error al iniciar sesión");
      }
    } catch (error) {
      console.error("Error en la solicitud:", error);
    }
  };
  
  

  return (
    <div className="container">
      <div className="image-container">
        <img src={imgLogin}/>
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
        <button type="submit" className='btn-login'>Enviar</button>
      </form>
      </div>
    </div>
  );
}

export default Login;