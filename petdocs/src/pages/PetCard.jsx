// src/pages/PetCard.jsx
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import './css/PetCard.css';
import ImagenPetcard from "../assets/pet-card.png";
import { Link } from 'react-router-dom';

const PetCard = () => {
    const { id } = useParams();
    const [pet, setPet] = useState(null);

    useEffect(() => {
        const fetchPet = async () => {
            try {
                const response = await axios.get(`https://ncs15-petdocs-api.onrender.com/pet/${id}`);
                setPet(response.data);
            } catch (error) {
                console.error('Error fetching pet data:', error);
            }
        };
        fetchPet();
    }, [id]);

    if (!pet) return ". . .";

    return (
        <div className="container-petcard">
            <div className="card-pet">
                <img src={ImagenPetcard} alt="petcard" />
                <div className="pet_picture">
                    <img src={pet.pet_picture} alt="imagen_de_mascota" />
                </div>

                <form className="petform">
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
                    <a type="button" > <Link to="/agenda">Ver Mas </Link></a>
                </form>
            </div>
        </div>
    );
};

export default PetCard;
