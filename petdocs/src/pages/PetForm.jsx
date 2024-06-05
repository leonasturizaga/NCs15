import axios from "axios";
import React from "react";
import ImagenPetcard from "../assets/pet-card.png";

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
        <div>
            <img src={ImagenPetcard} alt="petcard"/>
            <h1>Guarda los datos de tu Mascota</h1>
            <form action="">
                <label htmlFor="petname">Nombre</label>
                <input
                    type="text"
                    name="petname"
                    value=" "
                />
                <label htmlFor="dob">Nacimiento</label>
                <input
                    type="date"
                    name="dob"
                    value=" "
                />
                <label htmlFor="category">Especie</label>
                <input
                    type="text"
                    name="category"
                    value=" "
                />
                <label htmlFor="breed">Raza</label>
                <input
                    type="text"
                    name="breed"
                    value=" "
                />
                <label htmlFor="chip">Raza</label>
                <input
                    type="radio"
                    name="chip-yes"
                    id="chip-yes"
                />
                <input
                    type="radio"
                    name="chip-no"
                    id="chip-no"
                    defaultValue={"chip-no"}
                />
                <label htmlFor="photo">Agregar Foto</label>
                <input
                    type="file"
                    src=""
                    alt="archivo_imagen"
                    placeholder="Archivos: jpg, png"
                />
                <button onClick={createPet}>Create Pet</button>
            </form>
        </div>
    );
}