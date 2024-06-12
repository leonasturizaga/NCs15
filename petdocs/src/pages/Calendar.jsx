//***************** opcion 2 ********************* */
// src/pages/Home.jsx
import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';
import Caracteristicas from '../components/Caracteristicas';
import CalendarComponent from '../components/Calendar';

const Home = () => {
  const { nick } = useContext(UserContext);

  return (
    <div>
      <div className='home-container'>
        <div>
          <h3 className="title-h3">Agenda</h3>
        </div>
        <Caracteristicas />
        <CalendarComponent nick={nick} />
      </div>
    </div>
  );
};

export default Home;
