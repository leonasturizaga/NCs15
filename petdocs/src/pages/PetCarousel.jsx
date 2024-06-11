// import axios from 'axios';
// import React, { useContext, useEffect, useState } from 'react';
// import { Carousel } from 'react-bootstrap';
// import { UserContext } from '../context/UserContext';
// // import 'bootstrap/dist/css/bootstrap.min.css';
// import './css/PetCarousel.css';
// import ImagenPetcard from "../assets/pet-card.png";

// const PetCarousel = () => {
//     const { nick } = useContext(UserContext);
//     const [pets, setPets] = useState([]);

//     useEffect(() => {
//         const fetchPets = async () => {
//             try {
//                 const response = await axios.get(`https://ncs15-petdocs-api.onrender.com/owner/${nick}/pets/`);
//                 setPets(response.data.slice(0, 5)); // Fetch first 5 pets
//             } catch (error) {
//                 console.error('Error fetching pets:', error);
//             }
//         };
//         fetchPets();
//     }, [nick]);

//     if (pets.length === 0) return "No existe dicha mascota! :( ";

//     return (
//         <Carousel className="container-carousel">
//             {pets.map((pet) => (
//                 <Carousel.Item key={pet.id}>
//                     <div className="card-carousel">
//                         {/* <img src={ImagenPetcard} alt="carouselCard" /> */}
//                         <div className="carouselPet_picture">
//                             <img src={pet.pet_picture} alt="imagen_de_mascota" />
//                         </div>
//                         <div className="carouselcontent">
//                             <h3>{pet.name}</h3>
//                             <label>Nacimiento</label>
//                             <input
//                                 type="text"
//                                 name="dob"
//                                 value={pet.dob}
//                                 readOnly
//                             />
//                             <label>Especie</label>
//                             <input
//                                 type="text"
//                                 name="category"
//                                 value={pet.category}
//                                 readOnly
//                             />
//                             <label>Raza</label>
//                             <input
//                                 type="text"
//                                 name="breed"
//                                 value={pet.breed}
//                                 readOnly
//                             />
//                         </div>
//                     </div>
//                 </Carousel.Item>
//             ))}
//         </Carousel>
//     );
// };

// export default PetCarousel;
