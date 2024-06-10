// import axios from "axios";
// import React from "react";
// import './css/PetCard.css';
// import ImagenPetcard from "../assets/pet-card.png";

// const client = axios.create({
//     baseURL: "https://ncs15-petdocs-api.onrender.com/pet",
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
//                     <a type="button" href="#">Ver Mas</a>
//                 </form>
//             </div>
//         </div>
//     );
// }

//**************************** version 2 ************* */
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../context/UserContext';
import './css/PetCard.css';
import ImagenPetcard from "../assets/pet-card.png";

const PetCard = () => {
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
        <div>
            {pets.map((pet) => (
                <div className="card-pet" key={pet.id}>
                    <img src={ImagenPetcard} alt="petcard" />
                    <div>
                        <img src={pet.pet_picture} alt="imagen_de_mascota" />
                    </div>

                    <form >
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
                        <a type="button" href="#">Ver Mas</a>
                        {/* falta el ruteo a Ver Mas */}
                    </form>
                </div>
            ))}
        </div>
    );
};

export default PetCard;
