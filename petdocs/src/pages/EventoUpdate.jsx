// import axios from 'axios';
// import React, { useContext } from 'react';
// import { UserContext } from '../context/UserContext';
// import "./css/Evento.css";

// const baseURL = "https://ncs15-petdocs-api.onrender.com/events";
// const { nick } = useContext(UserContext);
// export default function EventoUpdate() {
//   const [evento, setEvento] = React.useState(null);
//   const [error, setError] = React.useState(null);

// React.useEffect(() => {
//     axios.get(`${baseURL}/1`).then((response) => {
//       setEvento(response.data);
//       console.log(response.data);
//     }).catch(error => {
//       console.log(error);
//       setError(error);
//     });
//   }, []);

// function updateEvento() {
//     axios
//       .put(`${baseURL}/1`, {
//         title: evento.title,
//         description: evento.description,
//         pet_name: evento.pet_name,
//         startdate: evento.startdate,
//         enddate: evento.enddate,
//         url: evento.url,
//       })
//       .then((response) => {
//         setEvento(response.data);
//         alert("Registro modificado!");
//         // window.location.href = "index.html";
//       });
//   }

//   function deleteEvento() {
//     axios
//       .delete(`${baseURL}/1`)
//       .then(() => {
//         alert("Este evento ha sido borrado!");
//         setEvento(null)
//       });
//   }

//   if (error) return "Error!"
//   if (!evento) return "El evento no existe!"

//   return (
//     <div className="container-evento" >
//       <h1 className="evento-title" >Eventos</h1>
//       <form className="evento-form" action="">
//         <div className="row">
//           <div className="col-25">
//             <label className="evento-label"
//               htmlFor="pet_name">Mascota</label>
//           </div>
//           <div className="col-75">
//             <input className="evento-input"
//               type="text"
//               name="pet_name"
//               id="pet_id"
//               defaultValue={evento.pet_name} />
//           </div>
//         </div>
//         <div className="row">
//           <div className="col-25">
//             <label className="evento-label"
//               htmlFor="title">Titulo del Evento</label>
//           </div>
//           <div className="col-75">
//             <input className="evento-input"
//               type="text"
//               name="title"
//               id="title"
//               defaultValue={evento.title} 
//               required/>
//           </div>
//         </div>
//         <div className="row">
//           <div className="col-25">
//             <label className="evento-label"
//               htmlFor="description">Descripcion</label>
//           </div>
//           <div className="col-75">
//             <input className="evento-input"
//               type="text" name="title"
//               id="title"
//               defaultValue={evento.description} 
//               required/>
//           </div>
//         </div>
//         <div className="row">
//           <div className="col-25">
//             <label className="evento-label"
//               htmlFor="startdate">Fecha de Inicio</label>
//           </div>
//           <div className="col-75">
//             <input className="evento-input"
//               type="datetime"
//               name="startdate"
//               id="startdate"
//               defaultValue={evento.startdate} />
//           </div>
//         </div>
//         <div className="row">
//           <div className="col-25">
//             <label className="evento-label"
//               htmlFor="enddate">Fecha de Finalizacion</label>
//           </div>
//           <div className="col-75">
//             <input className="evento-input"
//               type="datetime"
//               name="enddate"
//               id="enddate"
//               defaultValue={evento.enddate} />
//           </div>
//         </div>
//         <div className="row">
//           <div className="col-25">
//             <label className="evento-label"
//               htmlFor="url">Archivos</label>
//           </div>
//           <div className="col-75">
//             <input className="evento-input"
//               type="url"
//               name="url"
//               id="url"
//               defaultValue={evento.url}
//               placeholder="archivos jpg, png" />
//           </div>
//         </div>
//         <div className="evento-btns">
//           <button className="evento-btn1" onClick={updateEvento}>Modificar</button>
//           <button className="evento-btn2" onClick={deleteEvento}>Borrar</button>
//         </div>
//       </form>
//     </div>
//   );
// }


//****************version 2 *************** */
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
            <label className='evento-label'>Titulo</label>
          </div>
          <div className='col-75'>
            <input className="evento-input" type="text" id="title" defaultValue={evento.title} required />
          </div>
        </div>
        <div className="row">
          <div className="col-25">
            <label className='evento-label'>Descripcion</label>
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
            <label className='evento-label'>Fecha de Finalizacion</label>
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
          <button className='evento-btn2' type="button" onClick={handleDelete}>Borrar</button>
        </div>
      </form>
      <p id="response-message">{responseMessage}</p>
    </div>
  );
};

export default EventoUpdate;
