// import axios from "axios";
// import React from "react";
// import ImagenPetcard from "../assets/pet-card.png";
// import './css/PetForm.css';


// const baseURL = "https://ncs15-petdocs-api.onrender.com/pet";

// export default function PetForm() {
//     const [pet, setPet] = React.useState(null);

//     React.useEffect(() => {
//         axios.get(`${baseURL}/1`).then((response) => {
//             setPet(response.data);
//         });
//     }, []);

//     function createPet() {
//         axios
//             .post(baseURL, {
//                 petname: " ",
//                 dob: " ",
//                 category: "	",
//                 breed: " ",
//                 chip: " ",
//             })
//             .then((response) => {
//                 setPet(response.data);
//             });
//     }

//     if (!pet) return "No hay registro guardado!"

//     return (
//         <div className="hero">
//             <div className="container-hero">
//                 <div className="hero-img-container">
//                     <img src={ImagenPetcard} alt="petcard" />
//                     </div>

//                     <div className="hero-info" >
//                     <h1 h3 className="title-h1">Guarda los datos de tu Mascota</h1>
//                     <form action="">
//                         <div>
//                         <label htmlFor="petname">Nombre</label>
//                         <input
//                             type="text"
//                             name="petname"
//                             value=" "
//                         />
//                         </div>
//                         <div>
//                         <label htmlFor="dob">Nacimiento</label>
//                         <input
//                             type="date"
//                             name="dob"
//                             value=" "
//                         />
//                         </div>
//                         <div>
//                         <label htmlFor="category">Especie</label>
//                         <input
//                             type="text"
//                             name="category"
//                             value=" "
//                         />
//                         </div>
//                         <div>
//                         <label htmlFor="breed">Raza</label>
//                         <input
//                             type="text"
//                             name="breed"
//                             value=" "
//                         />                        
//                         </div>
//                         <div>
//                         <label >Chip
//                         <label htmlFor="chip" type="radio">
   
//                         <input
//                             name="chipGroup"
//                             type="radio"
//                             // name="chip-yes"
//                             id="chip-yes"
//                         />Si</label>
//                         <label htmlFor="chip" type="radio">
//                         <input
//                             name="chipGroup"
//                             type="radio"
//                             // name="chip-no"
//                             id="chip-no"
//                             defaultValue={"chip-no"}
//                         />No</label>
//                         </label>
//                         </div>
                        

//                         <div>
//                         <label htmlFor="photo">Agregar Foto</label>
//                         <input
//                             type="file"
//                             src=""
//                             alt="archivo_imagen"
//                             placeholder="Archivos: jpg, png"
//                         />
//                         </div>
//                         <button onClick={createPet} className="btn-login">Create Pet</button>
//                     </form>
//                 </div>
//             </div>
//         </div>
//     );
// }



//*************** opcion 1 ******************* */

// src/pages/PetForm.jsx
import { useContext } from 'react';
import { UserContext } from '../context/UserContext';
import axios from "axios";
import { useLocation } from 'react-router-dom';
import React, { useState, useEffect } from "react";
import ImagenPetcard from "../assets/pet-card.png";
import './css/PetForm.css';

const PetForm = () => {
    const { nick } = useContext(UserContext);
    const [pet, setPet] = useState({
        name: "",
        category: "",
        dob: "",
        chip: false,
        breed: "",
        pet_picture: null // Changed to null to handle file input properly
    });

    const baseURLpost = `https://ncs15-petdocs-api.onrender.com/owner/${nick}/new_pet`;

    const handleChange = (e) => {
        const { name, value, type, checked, files } = e.target;
        if (type === 'file') {
            setPet(prevState => ({
                ...prevState,
                [name]: files[0]
            }));
        } else {
            setPet(prevState => ({
                ...prevState,
                [name]: type === 'checkbox' ? checked : value
            }));
        }
    };

    const createPet = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('name', pet.name);
        formData.append('category', pet.category);
        formData.append('dob', pet.dob);
        formData.append('chip', pet.chip);
        formData.append('breed', pet.breed);
        formData.append('pet_picture', pet.pet_picture);
console.log(formData);
        try {
            const response = await axios.post(baseURLpost, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                },
                
            });
            setPet({
                name: "",
                category: "",
                dob: "",
                chip: false,
                breed: "",
                pet_picture: null
            });
        } catch (error) {
            console.error('Error creating pet:', error);
        }
    };

    return (
        <div className="hero">
            <div className="container-hero">
                <div className="hero-img-container">
                    <img src={ImagenPetcard} alt="petcard" />
                </div>
                <div className="hero-info">
                    <h3 className="title-h1">Guarda los datos de tu Mascota {nick}</h3>
                    <form onSubmit={createPet}>
                        <div>
                            <label htmlFor="petname">Nombre</label>
                            <input
                                type="text"
                                name="name"
                                value={pet.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="dob">Nacimiento</label>
                            <input
                                type="date"
                                name="dob"
                                value={pet.dob}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="category">Especie</label>
                            <input
                                type="text"
                                name="category"
                                value={pet.category}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="breed">Raza</label>
                            <input
                                type="text"
                                name="breed"
                                value={pet.breed}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div>
                            <label>Chip</label>
                            <label htmlFor="chip-yes">
                                <input
                                    name="chip"
                                    type="radio"
                                    value={true}
                                    checked={pet.chip === true}
                                    onChange={() => setPet(prevState => ({ ...prevState, chip: true }))}
                                    // required
                                /> Si
                            </label>
                            <label htmlFor="chip-no">
                                <input
                                    name="chip"
                                    type="radio"
                                    value={false}
                                    checked={pet.chip === false}
                                    onChange={() => setPet(prevState => ({ ...prevState, chip: false }))}
                                    // required
                                /> No
                            </label>
                        </div>
                        <div>
                            <label htmlFor="pet_picture">Agregar Foto</label>
                            <input
                                type="file"
                                name="pet_picture"
                                onChange={handleChange}
                                // required
                            />
                        </div>
                        <button type="submit" className="btn-login">Create Pet</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default PetForm;