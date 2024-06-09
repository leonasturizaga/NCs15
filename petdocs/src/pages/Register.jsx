// src/components/Register.jsx
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
      <div className="container-hero">
        <div className="hero-img-container">
          <img src={imgRegistro} />
        </div>
        <div className="hero-info" >
          <h3 className="title-h1">Registrate</h3>
          <p>¿Yá estas registrado? Inicia sesión <Link to="/Login">&nbsp; acá!</Link></p>
          <form onSubmit={handleSubmit}>
            <div>
              <label>Usuario:</label>
              <input type="text" value={nick} onChange={(e) => setNick(e.target.value)} required />
            </div>
            <div>
              <label>Password:</label>
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            </div>
            <div>
              <label>Repetir Password:</label>
              <input type="password" value={repeatPassword} onChange={(e) => setRepeatPassword(e.target.value)} required /><br></br>
            </div>
            <div>
              <button type="submit" className="btn-login">Regístrate</button>
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



// //************************  opcion 1 adicionando modal para update ***************** */
// import React, { useState } from 'react';
// import { useContext } from 'react';
// import { UserContext } from '../context/UserContext';
// import { Link } from 'react-router-dom';
// import axios from 'axios';
// import { Modal, Button, Form } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './css/register.css';
// import imgRegistro from '../assets/portada-registro.png';

// const Register = () => {
//   const [nick, setNick] = useState('');
//   const [password, setPassword] = useState('');
//   const [repeatPassword, setRepeatPassword] = useState('');
//   const [ownerPicture, setOwnerPicture] = useState(null);
//   const [mail, setMail] = useState('');
//   const [error, setError] = useState('');
//   const [success, setSuccess] = useState('');
//   const [responseMessage, setResponseMessage] = useState('');
//   const [responseColor, setResponseColor] = useState('');
//   const [showModal, setShowModal] = useState(false);

//   const validateForm = () => {
//     const nickRegex = /^[a-zA-Z0-9]{3,20}$/;
//     const passwordRegex = /^(?=.*[A-Z])[a-zA-Z0-9]{8,12}$/;

//     if (!nickRegex.test(nick)) {
//       setError('El nombre de usuario debe tener entre 3 y 20 caracteres y no contener espacios.');
//       return false;
//     }
//     if (!passwordRegex.test(password)) {
//       setError('La contraseña debe tener entre 8 y 12 caracteres, contener solo letras y números e incluir al menos una letra mayúscula.');
//       return false;
//     }
//     if (password !== repeatPassword) {
//       setError('Las contraseñas no coinciden.');
//       return false;
//     }
//     return true;
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     setError('');
//     setSuccess('');
//     setResponseMessage('');

//     if (!validateForm()) return;

//     try {
//       const response = await axios.post('https://ncs15-petdocs-api.onrender.com/create_owner/', {
//         nick,
//         password,
//       });
//       if (response.data.error) {
//         setResponseMessage(response.data.error);
//         setResponseColor('red');
//       } else {
//         setResponseMessage('Registration successful');
//         setResponseColor('green');
//         setNick(nick); // Set the nick in context
//         // navigate('/home'); // Navigate to Home page on successful login
//         setShowModal(true);
//       }
//     } catch (error) {
//       console.error('Error:', error);
//       setResponseMessage('An error occurred. Please try again.');
//       setResponseColor('red');
//     }
//   };

//   const handleEmailSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.put(`https://ncs15-petdocs-api.onrender.com/owner/${nick}/`, { mail });
//       if (ownerPicture) {
//         const formData = new FormData();
//         formData.append('owner_picture', ownerPicture);
//         await axios.post(`https://ncs15-petdocs-api.onrender.com/owner_picture/${nick}/`, formData, {
//           headers: {
//             'Content-Type': 'multipart/form-data',
//           },
//         });
//       }
//       setResponseMessage('Email and picture updated successfully');
//       setResponseColor('green');
//       setShowModal(false);
//     } catch (error) {
//       console.error('Error:', error);
//       setResponseMessage('An error occurred. Please try again.');
//       setResponseColor('red');
//     }
//   };

//   return (
//     <div className="hero">
//       <div className="container-hero">
//         <div className="hero-img-container">
//           <img src={imgRegistro} alt="Registro" />
//         </div>
//         <div className="hero-info">
//           <h3 className="title-h1">Registrate</h3>
//           <p>¿Ya estás registrado? Inicia sesión <Link to="/Login">&nbsp; acá!</Link></p>
//           <form onSubmit={handleSubmit}>
//             <div>
//               <label>Usuario:</label>
//               <input type="text" value={nick} onChange={(e) => setNick(e.target.value)} required />
//             </div>
//             <div>
//               <label>Password:</label>
//               <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
//             </div>
//             <div>
//               <label>Repetir Password:</label>
//               <input type="password" value={repeatPassword} onChange={(e) => setRepeatPassword(e.target.value)} required /><br />
//             </div>
//             <div>
//               <button type="submit" className="btn-login">Regístrate</button>
//               {error && <p style={{ color: 'red' }}>{error}</p>}
//               {success && <p style={{ color: 'green' }}>{success}</p>}
//             </div>
//           </form>
//           <p id="registerResponseMessage" style={{ color: responseColor }}>{responseMessage}</p>
//         </div>
//       </div>
      
//       <Modal show={showModal} onHide={() => setShowModal(false)}>
//         <Modal.Header closeButton>
//           <Modal.Title>Complete Your Registration</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <Form onSubmit={handleEmailSubmit}>
//             <Form.Group>
//               <Form.Label>Email:</Form.Label>
//               <Form.Control
//                 type="email"
//                 value={mail}
//                 onChange={(e) => setMail(e.target.value)}

//               />
//             </Form.Group>
//             <Form.Group>
//               <Form.Label>Owner Picture:</Form.Label>
//               <Form.Control
//                 type="file"
//                 accept="image/jpeg,image/png"
//                 onChange={(e) => setOwnerPicture(e.target.files[0])}
//               />
//             </Form.Group>
//             <Button variant="primary" type="submit">Submit</Button>
//           </Form>
//         </Modal.Body>
//       </Modal>
//     </div>
//   );
// };

// export default Register;
