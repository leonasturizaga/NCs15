// src/pages/OwnerPets.jsx
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../context/UserContext';
import ImagenPetcard from "../assets/pet-card.png";
import { Link } from 'react-router-dom';
import './css/OwnerPets.css';
import '../components/Calendar';

const OwnerPets = () => {
    const { nick } = useContext(UserContext);
    const [pets, setPets] = useState([]);

    useEffect(() => {
        const fetchPets = async () => {
            try {
                const response = await axios.get(`https://ncs15-petdocs-api.onrender.com/owner/${nick}/pets/`);
                setPets(response.data);
            } catch (error) {
                console.error('Error fetching pets:', error);
            }
        };
        fetchPets();
    }, [nick]);

    if (pets.length === 0) return "No existe dicha mascota! :( ";

    return (
        <div className='container-ownerpets'>
            <div className='ownerpets-title'>
                <h3 >Mis mascotas</h3>
            </div>
            <div className='card-ownerpets'>
                {pets.map((pet) => (
                    <div className='card-ownerpetsrow' key={pet.id}>
                        <div className='ownerpets_picture'>
                            <img src={pet.pet_picture} alt="imagen_de_mascota" />
                        </div>
                        <div>
                            <form className='ownerpetsform'>
                                <h3>{pet.name}</h3>
                                <label>Nacimiento</label>
                                <input
                                    type="text"
                                    name="dob"
                                    value={pet.dob}
                                    readOnly
                                />
                                <label>Especie</label>
                                <input
                                    type="text"
                                    name="category"
                                    value={pet.category}
                                    readOnly
                                />
                                <label>Raza</label>
                                <input
                                    type="text"
                                    name="breed"
                                    value={pet.breed}
                                    readOnly
                                />

                                <a type="button"><Link to={`/pet/${pet.id}`}>Ver Mascota</Link></a>
                                <a type="button"><Link to="/agenda">Ver Calendario</Link></a>
                                {/* <button className='btn-vermascota'>Ver Mascota</button>
                            <button className="btn-vercalendario">Ver Calendario</button> */}

                            </form>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default OwnerPets;
