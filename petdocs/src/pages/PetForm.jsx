//********************************** version 2 ************* */
import { useContext, useState } from 'react';
import { UserContext } from '../context/UserContext';
import axios from "axios";
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

    const baseURLpost = `https://ncs15-petdocs-api.onrender.com/owner/${nick}/new_pet/`;

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
        formData.append('file', pet.pet_picture);
        try {
            const response = await axios.post(baseURLpost, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
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
        <div>
            <div className="container-petform">
                <div className="petform-info">
                    <span className="petform-title">
                        <img src={ImagenPetcard} alt="petcard" />
                        <h3>Guarda los datos de tu Mascota</h3>
                    </span>
                    <form className='pf-form' onSubmit={createPet}>
                        <div className='row-pf'>
                            <div className="pf-col-25">
                                <label className='petform-label' htmlFor="petname">Nombre</label>
                            </div>
                            <div className="pf-col-75">
                                <input
                                    className='petform-input'
                                    type="text"
                                    name="name"
                                    value={pet.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>
                        <div className='row-pf'>
                            <div className="pf-col-25">
                            <label className='petform-label' htmlFor="dob">Nacimiento</label>
                            </div>
                            <div className="pf-col-75">
                                <input
                                    className='petform-input'
                                    type="date"
                                    name="dob"
                                    value={pet.dob}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>
                        <div className='row-pf'>
                            <div className="pf-col-25">
                                <label className='petform-label' htmlFor="category">Especie</label>
                            </div>
                            <div className="pf-col-75">
                                <input
                                    className='petform-input'
                                    type="text"
                                    name="category"
                                    value={pet.category}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>
                        <div className='row-pf'>
                            <div className="pf-col-25">
                                <label className='petform-label' htmlFor="breed">Raza</label>
                            </div>
                            <div className="pf-col-75">
                                <input
                                    className='petform-input'
                                    type="text"
                                    name="breed"
                                    value={pet.breed}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>
                        <div className='row-pf'>
                            <div className="pf-col-25">
                                <label htmlFor="chip-yes" className='petform-label' >Chip</label>
                            </div>
                            <div className="pf-col-75">
                                <input className='radio'
                                    name="chip"
                                    type="radio"
                                    value={true}
                                    checked={pet.chip === true}
                                    onChange={() => setPet(prevState => ({ ...prevState, chip: true }))}
                                /> Si
                                
                                <input
                                className='radio'
                                    name="chip"
                                    type="radio"
                                    value={false}
                                    checked={pet.chip === false}
                                    onChange={() => setPet(prevState => ({ ...prevState, chip: false }))}
                                /> No
                            </div>
                        </div>

                        <div className='row-pf'>
                            <div className="pf-col-25">
                                <label className='petform-label' htmlFor="pet_picture">Agregar Foto</label>
                            </div>
                            <div className="pf-col-75">
                                <input
                                    className='petform-input'
                                    type="file"
                                    name="pet_picture"
                                    accept="jpg,png"
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className='pf-button'>
                        <button type="submit" className="button-pf">Crear Mascota</button>
                        </div>
                    </form>

                </div>
            </div >
        </div >
    );
};

export default PetForm;
