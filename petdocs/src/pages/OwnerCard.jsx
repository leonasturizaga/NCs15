// import axios from 'axios';
// import React, { useContext, useEffect, useState } from 'react';
// import { UserContext } from '../context/UserContext';
// import './css/OwnerCard.css';
// import DefaultOwnerImage from "../assets/owner-card.png";

// const OwnerCard = () => {
//     const { nick } = useContext(UserContext);
//     const [owner, setOwner] = useState(null);
//     const [newPassword, setNewPassword] = useState('');
//     const [newMail, setNewMail] = useState('');
//     const [ownerPicture, setOwnerPicture] = useState(null);
//     const [message, setMessage] = useState('');
//     const [messageColor, setMessageColor] = useState('');

//     useEffect(() => {
//         const fetchOwner = async () => {
//             try {
//                 const response = await axios.get(`https://ncs15-petdocs-api.onrender.com/owner/${nick}/`);
//                 setOwner(response.data);
//             } catch (error) {
//                 console.error('Error fetching owner data:', error);
//             }
//         };
//         fetchOwner();
//     }, [nick]);

//     const handleUpdate = async (event) => {
//         event.preventDefault();
//         try {
//             await axios.put(`https://ncs15-petdocs-api.onrender.com/owner/${nick}/`, {
//                 password: newPassword || owner.password,
//                 mail: newMail || owner.mail,
//             });

//             if (ownerPicture) {
//                 const formData = new FormData();
//                 formData.append('owner_picture', ownerPicture);
//                 await axios.post(`https://ncs15-petdocs-api.onrender.com/owner_picture/${nick}/`, formData, {
//                     headers: {
//                         'Content-Type': 'multipart/form-data',
//                     },
//                 });
//             }

//             setMessage('Profile updated successfully!');
//             setMessageColor('green');
//         } catch (error) {
//             console.error('Error updating profile:', error);
//             setMessage('Error updating profile. Please try again.');
//             setMessageColor('red');
//         }
//     };

//     const handleDelete = async () => {
//         try {
//             await axios.delete(`https://ncs15-petdocs-api.onrender.com/owner/${nick}/`);
//             setMessage('Account deleted successfully!');
//             setMessageColor('green');
//             // Implement logout or redirect logic here
//         } catch (error) {
//             console.error('Error deleting account:', error);
//             setMessage('Error deleting account. Please try again.');
//             setMessageColor('red');
//         }
//     };

//     if (!owner) return "Loading owner data...";

//     return (
//         <div className="container-ownercard">
//             <div className="card-owner">
//                 <img src={DefaultOwnerImage} alt="ownercard" />
//                 <div className="owner_picture">
//                     <img src={owner.owner_picture || DefaultOwnerImage} alt="owner_image" />
//                 </div>

//                 <form className="ownerform" onSubmit={handleUpdate}>
//                     <h3>{nick}</h3>
//                     <label>Email</label>
//                     <input
//                         type="email"
//                         name="mail"
//                         value={newMail}
//                         placeholder={owner.mail}
//                         onChange={(e) => setNewMail(e.target.value)}
//                     />
//                     <label>Password</label>
//                     <input
//                         type="password"
//                         name="password"
//                         value={newPassword}
//                         placeholder="••••••••"
//                         onChange={(e) => setNewPassword(e.target.value)}
//                     />
//                     <label>Upload Picture</label>
//                     <input
//                         type="file"
//                         name="owner_picture"
//                         accept="image/jpeg, image/png"
//                         onChange={(e) => setOwnerPicture(e.target.files[0])}
//                     />
//                     <div>
//                     <button type="button" className="btn-registrate" onClick={handleDelete}>Delete Account</button>
//                     <button type="submit" className="btn-login">Update</button>
//                     </div>


//                 </form>
//                 {message && <p style={{ color: messageColor }}>{message}</p>}
//             </div>
//         </div>
//     );
// };

// export default OwnerCard;

//**************************************** opcion2 ************************* */
// import axios from 'axios';
// import React, { useContext, useEffect, useState } from 'react';
// import { UserContext } from '../context/UserContext';
// import './css/OwnerCard.css';
// import DefaultOwnerImage from "../assets/owner-card.png";

// const OwnerCard = () => {
//     const { nick } = useContext(UserContext);
//     const [owner, setOwner] = useState(null);
//     const [newPassword, setNewPassword] = useState('');
//     const [originalPassword, setOriginalPassword] = useState('');
//     const [newMail, setNewMail] = useState('');
//     const [ownerPicture, setOwnerPicture] = useState(null);
//     const [message, setMessage] = useState('');
//     const [messageColor, setMessageColor] = useState('');

//     useEffect(() => {
//         const fetchOwner = async () => {
//             try {
//                 const response = await axios.get(`https://ncs15-petdocs-api.onrender.com/owner/${nick}/`);
//                 setOwner(response.data);
//             } catch (error) {
//                 console.error('Error fetching owner data:', error);
//             }
//         };
//         fetchOwner();
//     }, [nick]);

//     const validateForm = () => {
//         const emailRegex = /^(?=.*[@])[a-zA-Z0-9._%+-]{3,60}$/;
//         const passwordRegex = /^(?=.*[A-Z])[a-zA-Z0-9]{8,12}$/;

//         if (!emailRegex.test(mail)) {
//           setError('El email debe contener "@", letras, numeros, solo "._%+-" como caracteres especiales. Entre 3 y 20 caracteres y no contener espacios.');
//           return false;
//         }
//         if (!passwordRegex.test(password)) {
//           setError('La contraseña debe tener entre 8 y 12 caracteres, contener solo letras y números e incluir al menos una letra mayúscula.');
//           return false;
//         }
//         if (password !== repeatPassword) {
//           setError('Las contraseñas no coinciden.');
//           return false;
//         }
//         return true;
//       };

//     const handleUpdate = async (event) => {
//         event.preventDefault();
//         if (newPassword && originalPassword !== owner.password) {
//             setMessage('Password original incorrecto');
//             setMessageColor('red');
//             return;
//         }

//         if (!validateForm()) return;

//         try {
//             const updateData = { mail: newMail };
//             if (newMail) updateData.mail = newMail;
//             if (newPassword) updateData.password = newPassword;

//             if (Object.keys(updateData).length > 0) {
//                 if (newMail) {
//                     await axios.put(`https://ncs15-petdocs-api.onrender.com/update_owner/${nick}/`, updateData);
//                 }
//             }

//             if (ownerPicture) {
//                 const formData = new FormData();
//                 formData.append('file', ownerPicture);
//                 await axios.post(`https://ncs15-petdocs-api.onrender.com/owner_picture/${nick}/`, formData, {
//                     headers: {
//                         'Content-Type': 'multipart/form-data',
//                     },
//                 });
//             }

//             setMessage('Perfil elimiando!');
//             setMessageColor('green');
//             navigate('/home'); // Navigate to Root page on successful Delete
//         } catch (error) {
//             console.error('Error updating profile:', error);
//             setMessage('Error al procesar los datos. Intente nuevamente.');
//             setMessageColor('red');
//         }
//     };

//     const handleDelete = async () => {
//         try {
//             await axios.delete(`https://ncs15-petdocs-api.onrender.com/owner/${nick}/`);
//             setMessage('Perfil eliminado!');
//             setMessageColor('green');
//             navigate('/'); // Navigate to Root page on successful Delete
//         } catch (error) {
//             console.error('Error deleting account:', error);
//             setMessage('Error al eliminar el perfil. Intente nuevamente.');
//             setMessageColor('red');
//         }
//     };

//     if (!owner) return "...";

//     return (
//         <div className="container-ownercard">
//             <div className="card-owner">
//                 <img src={DefaultOwnerImage} alt="ownercard" />
//                 <div className="owner_picture">
//                     <img src={owner.owner_picture || DefaultOwnerImage} alt="owner_image" />
//                 </div>

//                 <form className="ownerform" onSubmit={handleUpdate}>
//                     <h3>{nick}</h3>
//                     <label>Email</label>
//                     <input
//                         type="email"
//                         name="mail"
//                         value={newMail}
//                         placeholder={owner.mail}
//                         onChange={(e) => setNewMail(e.target.value)}
//                     />
//                     <label>Original Password</label>
//                     <input
//                         type="password"
//                         name="originalPassword"
//                         value={originalPassword}
//                         placeholder="••••••••"
//                         onChange={(e) => setOriginalPassword(e.target.value)}
//                     />
//                     <label>New Password</label>
//                     <input
//                         type="password"
//                         name="password"
//                         value={newPassword}
//                         placeholder="••••••••"
//                         onChange={(e) => setNewPassword(e.target.value)}
//                     />
//                     <label>Upload Picture</label>
//                     <input
//                         type="file"
//                         name="owner_picture"
//                         accept="image/jpeg, image/png"
//                         onChange={(e) => setOwnerPicture(e.target.files[0])}
//                     />
//                     <div>
//                         <button type="button" className="btn-delete" onClick={handleDelete}>Delete Account</button>
//                         <button type="submit" className="btn-update">Update</button>
//                     </div>
//                 </form>
//                 {message && <p style={{ color: messageColor }}>{message}</p>}
//             </div>
//         </div>
//     );
// };

// export default OwnerCard;



//*************************** opcion 3************* */
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';
import './css/OwnerCard.css';
import DefaultOwnerImage from "../assets/owner-card.png";
import { Modal, Button, Form } from 'react-bootstrap';

const OwnerCard = () => {
    const { nick, setNick } = useContext(UserContext);
    const navigate = useNavigate();
    const [owner, setOwner] = useState(null);
    const [newPassword, setNewPassword] = useState('');
    const [originalPassword, setOriginalPassword] = useState('');
    const [newMail, setNewMail] = useState('');
    const [ownerPicture, setOwnerPicture] = useState(null);
    const [message, setMessage] = useState('');
    const [messageDel, setMessageDel] = useState('');
    const [messageColor, setMessageColor] = useState('');
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        const fetchOwner = async () => {
            try {
                const response = await axios.get(`https://ncs15-petdocs-api.onrender.com/owner/${nick}/`);
                setOwner(response.data);
            } catch (error) {
                console.error('Error fetching owner data:', error);
            }
        };
        fetchOwner();
    }, [nick,ownerPicture,newMail]);

    const validateForm = () => {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        const passwordRegex = /^(?=.*[A-Z])[a-zA-Z0-9]{8,12}$/;

        if (newMail && !emailRegex.test(newMail)) {
            setMessage('El email debe contener "@", letras, números y solo "._%+-" como caracteres especiales.');
            setMessageColor('red');
            return false;
        }
        if (newPassword && !passwordRegex.test(newPassword)) {
            setMessage('La contraseña debe tener entre 8 y 12 caracteres, contener solo letras y números e incluir al menos una letra mayúscula.');
            setMessageColor('red');
            return false;
        }
        return true;
    };

    const handleUpdate = async (event) => {
        event.preventDefault();

        if (newPassword && originalPassword !== owner.password) {
            setMessage('Password original incorrecto');
            setMessageColor('red');
            return;
        }

        if (!validateForm()) return;

        try {
            const updateData = {};
            if (newMail) updateData.mail = newMail;
            if (newPassword) updateData.password = newPassword;

            if (Object.keys(updateData).length > 0) {
                await axios.put(`https://ncs15-petdocs-api.onrender.com/update_owner/${nick}/`, updateData);
            }

            if (ownerPicture) {
                const formData = new FormData();
                formData.append('file', ownerPicture);
                const response = await axios.post(`https://ncs15-petdocs-api.onrender.com/owner_picture/${nick}/`, formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                });
                setNick(nick);
                // setOwner(prevOwner => ({ ...prevOwner, owner_picture: response.data.owner_picture }));
                // updateData.owner_picture = response.data.owner_picture;
            }

            setMessage('Perfil actualizado correctamente!');
            setMessageColor('green');

        } catch (error) {
            console.error('Error updating profile:', error);
            setMessage('Error al procesar los datos. Intente nuevamente.');
            setMessageColor('red');
        }
    };

    const handleDelete = async () => {
        try {
            await axios.delete(`https://ncs15-petdocs-api.onrender.com/owner/${nick}/`);
            setMessageDel('Perfil eliminado!');
            setMessageColor('green');
            setNick(null); // Clear UserContext data
            navigate('/'); // Navigate to Root page on successful Delete
        } catch (error) {
            console.error('Error deleting account:', error);
            setMessageDel('Error al eliminar el perfil. Intente nuevamente.');
            setMessageColor('red');
        }
    };

    if (!owner) return "...";

    return (
        <div className="container-ownercard">
            <div className="card-owner">
                <img src={DefaultOwnerImage} alt="ownercard" />
                <div className="owner_picture">
                    <img src={owner.owner_picture || DefaultOwnerImage} alt="owner_image" />
                    <div className="hero-btns">
                        <button type="button" className="btn-registrate" onClick={() => setShowModal(true)}>Eliminar Perfil</button>
                     </div>
                     {messageDel && <p style={{ color: messageColor }}>{messageDel}</p>}
                </div>

                <form className="ownerform" onSubmit={handleUpdate}>
                    <h3>{nick}</h3>
                    <label>Email</label>
                    <input
                        type="email"
                        name="mail"
                        value={newMail}
                        placeholder={owner.mail}
                        onChange={(e) => setNewMail(e.target.value)}
                    />
                    <label>Original Password</label>
                    <input
                        type="password"
                        name="originalPassword"
                        value={originalPassword}
                        placeholder="••••••••"
                        onChange={(e) => setOriginalPassword(e.target.value)}
                    />
                    <label>New Password</label>
                    <input
                        type="password"
                        name="password"
                        value={newPassword}
                        placeholder="••••••••"
                        onChange={(e) => setNewPassword(e.target.value)}
                    />
                    <label>Upload Picture</label>
                    <input
                        type="file"
                        name="owner_picture"
                        accept="image/jpeg, image/png"
                        onChange={(e) => setOwnerPicture(e.target.files[0])}
                    /><br></br>
                    <div>
                        <button type="submit" className="btn-login">Modificar</button>
                        {message && <p style={{ color: messageColor }}>{message}</p>}
                    </div>
                </form>

                
            </div>
            <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Eliminar perfil</Modal.Title>
                </Modal.Header>
                <Modal.Body className="hero-btns">

                    <div>¿Esta seguro que quiere eliminar su perfil?</div>
                    <button type="submit" className="btn-registrate" onClick={handleDelete}>Si</button>
                    <button type="submit" className="btn-login" onClick={() => setShowModal(false)}>No</button>

                </Modal.Body>
            </Modal>
        </div>
    );
};

export default OwnerCard;
