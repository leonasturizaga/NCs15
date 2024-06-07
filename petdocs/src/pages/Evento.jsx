import axios from 'axios';
import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';
import "./css/Evento.css";

const baseURL = "https://ncs15-petdocs-api.onrender.com/events/";
// const { nick } = useContext(UserContext);

export default function Evento() {
  const [evento, setEvento] = React.useState(null);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    axios.get(`${baseURL}`).then((response) => {
      setEvento(response.data);
      console.log(response.data);
    }).catch(error => {
      console.log(error);
      setError(error);
    });
  }, []);

  function createEvento() {
    axios
      .post(baseURL, {
        pet_name: " ",
        title: " ",
        description: " ",
        startdate: "	",
        enddate: " ",
        url: " ",
      })
      .then((response) => {
        setEvento(response.data);
        console.log("Evento creado!");
      });
      
  }

  


if (error) return "Error!"
if (!evento) return "El evento no existe!"

return (
  <div className="container-evento" >
    <h1 className="evento-title" >Eventos</h1>
    <form className="evento-form" action="">
      <div className="row">
        <div className="col-25">
          <label className="evento-label"
            htmlFor="pet_name">Mascota</label>
        </div>
        <div className="col-75">
          <input className="evento-input"
            type="text"
            name="pet_name"
            id="pet_id"
            defaultValue={evento.pet_name} />
        </div>
      </div>
      <div className="row">
        <div className="col-25">
          <label className="evento-label"
            htmlFor="title">Titulo del Evento</label>
        </div>
        <div className="col-75">
          <input className="evento-input"
            type="text"
            name="title"
            id="title"
            defaultValue={evento.title}
            required/>
        </div>
      </div>
      <div className="row">
        <div className="col-25">
          <label className="evento-label"
            htmlFor="description">Descripcion</label>
        </div>
        <div className="col-75">
          <input className="evento-input"
            type="text" name="title"
            id="title"
            defaultValue={evento.description} 
            required/>
        </div>
      </div>
      <div className="row">
        <div className="col-25">
          <label className="evento-label"
            htmlFor="startdate">Fecha de Inicio</label>
        </div>
        <div className="col-75">
          <input className="evento-input"
            type="date"
            name="startdate"
            id="startdate"
            defaultValue={evento.startdate} />
        </div>
      </div>
      <div className="row">
        <div className="col-25">
          <label className="evento-label"
            htmlFor="enddate">Fecha de Finalizacion</label>
        </div>
        <div className="col-75">
          <input className="evento-input"
            type="date"
            name="enddate"
            id="enddate"
            defaultValue={evento.enddate} />
        </div>
      </div>
      <div className="row">
        <div className="col-25">
          <label className="evento-label"
            htmlFor="url">Archivos</label>
        </div>
        <div className="col-75">
          <input className="evento-input"
            type="url"
            name="url"
            id="url"
            defaultValue={evento.url}
            placeholder="archivos jpg, png" />
        </div>
      </div>
      <div className="evento-btns">
        <button className="evento-btn" onClick={createEvento}>Crear Evento</button>

      </div>
    </form>
  </div>
);

}
