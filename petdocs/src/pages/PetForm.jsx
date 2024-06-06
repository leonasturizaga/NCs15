import axios from "axios";
import React from "react";
import ImagenPetcard from "../assets/pet-card.png";
import './css/PetForm.css';


const baseURL = "https://ncs15-petdocs-api.onrender.com/pet";

export default function PetForm() {
    const [pet, setPet] = React.useState(null);

    React.useEffect(() => {
        axios.get(`${baseURL}/1`).then((response) => {
            setPet(response.data);
        });
    }, []);

    function createPet() {
        axios
            .post(baseURL, {
                petname: " ",
                dob: " ",
                category: "	",
                breed: " ",
                chip: " ",
            })
            .then((response) => {
                setPet(response.data);
            });
    }

    if (!pet) return "No hay registro guardado!"

    return (
        <div className="hero">
            <div className="container-hero">
                <div className="hero-img-container">
                    <img src={ImagenPetcard} alt="petcard" />
                    </div>

                    <div className="hero-info" >
                    <h1 h3 className="title-h1">Guarda los datos de tu Mascota</h1>
                    <form action="">
                        <div>
                        <label htmlFor="petname">Nombre</label>
                        <input
                            type="text"
                            name="petname"
                            value=" "
                        />
                        </div>
                        <div>
                        <label htmlFor="dob">Nacimiento</label>
                        <input
                            type="date"
                            name="dob"
                            value=" "
                        />
                        </div>
                        <div>
                        <label htmlFor="category">Especie</label>
                        <input
                            type="text"
                            name="category"
                            value=" "
                        />
                        </div>
                        <div>
                        <label htmlFor="breed">Raza</label>
                        <input
                            type="text"
                            name="breed"
                            value=" "
                        />                        
                        </div>
                        <div>
                        <label >Chip
                        <label htmlFor="chip" type="radio">
   
                        <input
                            name="chipGroup"
                            type="radio"
                            // name="chip-yes"
                            id="chip-yes"
                        />Si</label>
                        <label htmlFor="chip" type="radio">
                        <input
                            name="chipGroup"
                            type="radio"
                            // name="chip-no"
                            id="chip-no"
                            defaultValue={"chip-no"}
                        />No</label>
                        </label>
                        </div>
                        

                        <div>
                        <label htmlFor="photo">Agregar Foto</label>
                        <input
                            type="file"
                            src=""
                            alt="archivo_imagen"
                            placeholder="Archivos: jpg, png"
                        />
                        </div>
                        <button onClick={createPet} className="btn-login">Create Pet</button>
                    </form>
                </div>
            </div>
        </div>
    );
}