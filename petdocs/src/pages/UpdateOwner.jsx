
//******************** opicion 2 ************************ */

import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../context/UserContext';
// import './css/UpdateOwner.css';
import DefaultOwnerImage from "../assets/owner-card.png";

const UpdateOwner = () => {
    const { nick } = useContext(UserContext);
    const [owner, setOwner] = useState(null);
    const [currentPassword, setCurrentPassword] = useState('');
    const [newMail, setNewMail] = useState('');
    const [ownerPicture, setOwnerPicture] = useState(null);
    const [message, setMessage] = useState('');
    const [messageColor, setMessageColor] = useState('');

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
    }, [nick]);

    const handleUpdate = async (event) => {
        event.preventDefault();

        if (currentPassword !== owner.password) {
            setMessage('Current password is incorrect');
            setMessageColor('red');
            return;
        }

        try {
            const updateData = { mail: newMail };

            if (newMail) {
                await axios.put(`https://ncs15-petdocs-api.onrender.com/update_owner/${nick}/`, updateData);
            }

            if (ownerPicture) {
                const formData = new FormData();
                formData.append('file', ownerPicture);
                await axios.post(`https://ncs15-petdocs-api.onrender.com/owner_picture/${nick}/`, formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                });
            }

            setMessage('Profile updated successfully!');
            setMessageColor('green');
        } catch (error) {
            console.error('Error updating profile:', error);
            setMessage('Error updating profile. Please try again.');
            setMessageColor('red');
        }
    };

    if (!owner) return "Loading owner data...";

    return (
        <div className="container-updateowner">
            <div className="card-updateowner">
                <img src={DefaultOwnerImage} alt="ownercard" />
                <div className="owner_picture">
                    <img src={owner.owner_picture || DefaultOwnerImage} alt="owner_image" />
                </div>

                <form className="updateownerform" onSubmit={handleUpdate}>
                    <h3>{nick}</h3>
                    <label>Current Password</label>
                    <input
                        type="password"
                        name="currentPassword"
                        value={currentPassword}
                        placeholder="Current Password"
                        onChange={(e) => setCurrentPassword(e.target.value)}
                        required
                    />
                    <label>New Email</label>
                    <input
                        type="email"
                        name="mail"
                        value={newMail}
                        placeholder={owner.mail}
                        onChange={(e) => setNewMail(e.target.value)}
                    />
                    <label>Upload Picture</label>
                    <input
                        type="file"
                        name="owner_picture"
                        accept="image/jpeg, image/png"
                        onChange={(e) => setOwnerPicture(e.target.files[0])}
                    />
                    <button type="submit" className="btn-update">Update</button>
                </form>
                {message && <p style={{ color: messageColor }}>{message}</p>}
            </div>
        </div>
    );
};

export default UpdateOwner;
