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
    }, [nick, ownerPicture, newMail]);

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
        <div >
            <div className='container-ownercard' >

                <div className="card-owner">
                    <div className="owner_picture">
                        <img src={owner.owner_picture || DefaultOwnerImage} alt="owner_image" />
                        <div className="hero-btns">
                            <button type="button" className="btn-eliminar" onClick={() => setShowModal(true)}>Eliminar Perfil</button>
                        </div>
                        {messageDel && <p style={{ color: messageColor }}>{messageDel}</p>}
                    </div>

                    <form className="ownerform" onSubmit={handleUpdate}>
                        <h3>{nick}</h3>
                        <label>mail</label>
                        <input
                            type="email"
                            name="mail"
                            value={newMail}
                            placeholder={owner.mail}
                            onChange={(e) => setNewMail(e.target.value)}
                        />
                        <label>Contraseña Original</label>
                        <input
                            type="password"
                            name="originalPassword"
                            value={originalPassword}
                            placeholder="••••••••"
                            onChange={(e) => setOriginalPassword(e.target.value)}
                        />
                        <label>Contraseña nueva</label>
                        <input
                            type="password"
                            name="password"
                            value={newPassword}
                            placeholder="••••••••"
                            onChange={(e) => setNewPassword(e.target.value)}
                        />
                        <label>Cargar imagen</label>
                        <input
                            type="file"
                            name="owner_picture"
                            accept="image/jpeg, image/png"
                            onChange={(e) => setOwnerPicture(e.target.files[0])}
                        /><br></br>
                        <div>
                            <button type="submit" className="btn-modificar">Modificar</button>
                            {message && <p style={{ color: messageColor }}>{message}</p>}
                        </div>
                    </form>
                    
                </div>
            </div>
            <Modal show={showModal} onHide={() => setShowModal(false)} className="card-owner">
                <div className="ownermodal">
                <Modal.Header closeButton>
                    <h5><Modal.Title>Eliminar perfil</Modal.Title></h5>
                </Modal.Header>
                <Modal.Body >

                    <div> <p>¿Esta seguro que quiere eliminar su perfil?</p></div>
                    <div>
                    <button type="submit" className="btn-eliminar" onClick={handleDelete}>Si</button>
                    <button type="submit" className="btn-modificar" onClick={() => setShowModal(false)}>No</button>
                    </div>
                </Modal.Body>
                </div>
            </Modal>
        </div>
    );
};

export default OwnerCard;