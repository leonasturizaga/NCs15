//***************** opcion 2 ********************* */
// src/pages/Agenda.jsx
import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext';
import Caracteristicas from '../components/Caracteristicas';
import CalendarComponent from '../components/Calendar';
import EventoUpdate from './EventoUpdate';

const Agenda = () => {

  const { nick } = useContext(UserContext);
  const navigate = useNavigate();

  const handleSelectEvent = (event) => {
    navigate(`/evento-update/${event.id}`);
  };

  return (
    <div>
      <div className='home-container'>
        <div>
          <h3 className="title-h3">Agenda</h3>
        </div>
        <Caracteristicas />
        <CalendarComponent nick={nick} onSelectEvent={handleSelectEvent} />
      </div>
    </div>
  );
};

export default Agenda;
