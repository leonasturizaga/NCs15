import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './css/Evento.css';

const EventoUpdate = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [evento, setEvento] = useState(null);
  const [ownerPets, setOwnerPets] = useState([]);
  const [responseMessage, setResponseMessage] = useState('');

  useEffect(() => {
    axios.get(`https://ncs15-petdocs-api.onrender.com/events/${id}`)
      .then(response => {
        setEvento(response.data);
      })
      .catch(error => {
        console.error('Error al obtener el evento:', error);
      });

    axios.get('https://ncs15-petdocs-api.onrender.com/owner_pet/')
      .then(response => {
        setOwnerPets(response.data);
      })
      .catch(error => {
        console.error('Error al obtener propietarios y mascotas:', error);
      });
  }, [id]);

  const handleUpdate = (e) => {
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

    axios.put(`https://ncs15-petdocs-api.onrender.com/events/${id}/`, eventData)
      .then(response => {
        setResponseMessage('Evento actualizado con éxito!');
        console.log('Evento actualizado:', response.data);
        navigate('/agenda'); // Navigate to home or any other page after deletion
      })
      .catch(error => {
        setResponseMessage('Error al actualizar el evento');
        console.error('Error al actualizar el evento:', error);
      });
  };

  const handleDelete = () => {
    axios.delete(`https://ncs15-petdocs-api.onrender.com/events/${id}/`)
      .then(() => {
        alert('Evento borrado con éxito!');
        navigate('/agenda'); // Navigate to home or any other page after deletion
      })
      .catch(error => {
        console.error('Error al borrar el evento:', error);
      });
  };

  if (!evento) return 'El evento no existe!';

  return (
    <div className='container-evento'>
      <div className="evento-title">
        <h3>Actualizar Evento</h3>
      </div>
      <form className='evento-form' id="evento-form" onSubmit={handleUpdate}>
        <div className="row">
          <div className="col-25">
            <label className='evento-label'>Mascota</label>
          </div>
          <div className="col-75">
            <select id="owner_pet" className='evento-select' defaultValue={evento.pet}>
              {ownerPets.map(owner_pet => (
                <option key={owner_pet.pet_id} value={owner_pet.pet_id}>
                  {`${owner_pet.owner_nick} / ${owner_pet.pet_id}`}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="row">
          <div className="col-25">
            <label className='evento-label'>Título</label>
          </div>
          <div className='col-75'>
            <input className="evento-input" type="text" id="title" defaultValue={evento.title} required />
          </div>
        </div>
        <div className="row">
          <div className="col-25">
            <label className='evento-label'>Descripción</label>
          </div>
          <div className="col-75">
            <textarea className='evento-textarea' id="description" defaultValue={evento.description} required />
          </div>
        </div>
        <div className="row">
          <div className="col-25">
            <label className='evento-label'>Fecha de Inicio</label>
          </div>
          <div className="col-75">
            <input className='evento-input' type="datetime-local" id="startdate" defaultValue={evento.startdate} required />
          </div>
        </div>
        <div className="row">
          <div className="col-25">
            <label className='evento-label'>Fecha de Finalización</label>
          </div>
          <div className="col-75">
            <input className='evento-input' type="datetime-local" id="enddate" defaultValue={evento.enddate} required />
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
          <button className='evento-btn1' type="submit">Modificar</button>
          <button className='evento-btn2' type="button" onClick={handleDelete}>Eliminar</button>
        </div>
      </form>
      <p id="response-message">{responseMessage}</p>
    </div>
  );
};

export default EventoUpdate;
