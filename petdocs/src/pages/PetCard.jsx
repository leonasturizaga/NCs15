// import axios from "axios";
// import React from "react";
// import './css/PetCard.css';
// import ImagenPetcard from "../assets/pet-card.png";
// import { Link } from 'react-router-dom';
// const client = axios.create({
//     baseURL: "https://ncs15-petdocs-api.onrender.com/pet/",
// });

// export default function PetCard() {
//     const [pet, setPet] = React.useState(null);

//     React.useEffect(() => {
//         async function getPet() {
//             const response = await client.get("/3");
//             setPet(response.data);
//             console.log(response);
//         }
//         getPet();
//     }, []);

//     if (!pet) return "No existe dicha mascota! :( "

//     return (
//         <div className="container-petcard">
//             <div className="card-pet">
//                 <img src={ImagenPetcard} alt="petcard" />
//                 <div className="pet_picture">
//                     <img src={pet.pet_picture} alt="imagen_de_mascota" />
//                 </div>

//                 <form className="petform">
//                     <h3>{pet.name}</h3>
//                     <label>Nacimiento</label>
//                     <input
//                         type="text"
//                         name="dob"
//                         value={pet.dob}
//                         plaintext='true'
//                         readOnly
//                     />
//                     <label>Especie</label>
//                     <input
//                         type="text"
//                         name="category"
//                         value={pet.category}
//                         plaintext='true'
//                         readOnly
//                     />
//                     <label>Raza</label>
//                     <input
//                         type="text"
//                         name="breed"
//                         value={pet.breed}
//                         plaintext='true'
//                         readOnly
//                     />
//                     <a type="button" > <Link to="/OwnerPets">Ver Mas </Link></a>
//                 </form>
//             </div>
//         </div>
//     );
// }

// //**************************** version 3 ************* */
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

    if (!pet) return "No existe dicha mascota! :( ";

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
                    <a type="button" > <Link to="/calendar">Ver Mas </Link></a>
                </form>
            </div>
        </div>
    );
};

export default PetCard;
