import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import "./css/Evento.css"

const EventoForm = () => {
  const [ownerPets, setOwnerPets] = useState([]);
  const [responseMessage, setResponseMessage] = useState('');
  const navigate = useNavigate();
  useEffect(() => {
    axios.get('https://ncs15-petdocs-api.onrender.com/owner_pet/')
      .then(response => {
        setOwnerPets(response.data);
      })
      .catch(error => {
        console.error('Error al obtener propietarios y mascotas:', error);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const ownerPetId = document.getElementById('owner_pet').value;
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const startdate = document.getElementById('startdate').value;
    const enddate = document.getElementById('enddate').value;
    const url = document.getElementById('url').value;

    const eventData = {
      pet: ownerPetId,
      title: title,
      description: description,
      startdate: startdate,
      enddate: enddate,
      url: url
    };

    axios.post('https://ncs15-petdocs-api.onrender.com/events/', eventData)
      .then(response => {
        setResponseMessage('Evento creado con éxito!');
        console.log('Evento creado:', response.data);
        navigate('/agenda'); // Navigate to home or any other page after deletion
      })
      .catch(error => {
        setResponseMessage('Error al crear el evento');
        console.error('Error al crear el evento:', error);
      });
  };

  return (
    <div className='container-evento'>
      <div className="evento-title">
        <h3>Crea tu Evento</h3>
      </div>
      <form className='evento-form' id="evento-form" onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-25">
            <label className='evento-label'>Mascota</label>
          </div>
          <div className="col-75">
            <select id="owner_pet" className='evento-select'>
              {ownerPets.map(owner_pet => (
                <option key={owner_pet.pet_id} value={owner_pet.pet_id}>
                  {`${owner_pet.owner_nick} / ${owner_pet.pet_id}`}
                </option>
              ))}
            </select>
          </div>
        </div><div className="row">
          <div className="col-25">
            <label className='evento-label'>Titulo</label>
          </div>
          <div className='col-75'>
            <input className="evento-input" type="text" id="title"/>
          </div>
        </div>
        <div className="row">
          <div className="col-25">
            <label className='evento-label'>Descripción</label>
          </div>
          <div className="col-75">
            <textarea className='evento-textarea' id="description" />
          </div>
        </div>
        <div className="row">
          <div className="col-25">
            <label className='evento-label'>Fecha de Inicio</label>
          </div>
          <div className="col-75">
            <input className='evento-input' type="datetime-local" id="startdate" required />
          </div>
        </div>
        <div className="row">
          <div className="col-25">
            <label className='evento-label'>Fecha de Finalización</label>
          </div>
          <div className="col-75">
            <input className='evento-input' type="datetime-local" id="enddate" required />
          </div>
        </div>
        <div className="row">
          <div className="col-25">
            <label className='evento-label'>Archivos</label>
          </div>
          <div className="col-75">
            <input className='evento-input' type="file" id="url" accept='jpg,png' placeholder="Archivos jpg, png" />
          </div>
        </div>
        <div className="evento-btns">
          <button className='evento-btn2' type="submit">Crear evento</button>
        </div>
      </form>
      <p id="response-message">{responseMessage}</p>
    </div>
  );
};

export default EventoForm;