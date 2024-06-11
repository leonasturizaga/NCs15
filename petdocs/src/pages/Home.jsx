//***************** opcion 2 ********************* */
// src/pages/Home.jsx
import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';
import Caracteristicas from '../components/Caracteristicas';
// import PetCarousel from './PetCarousel';
import OwnerCard from './OwnerCard';
// import Calendar from '../components/Calendar';
// import CalendarComponent from '../components/Calendar';

const Home = () => {
  const { nick } = useContext(UserContext);

  return (
    <div>
      <div>
        <h3 className="title-h1">PetDocs home</h3>
        <p className='text-banner'>Bienvenido {nick}!</p>
      </div>
      <Caracteristicas />
      <OwnerCard />
      {/* <CalendarComponent nick={nick} /> */}
      {/* <PetCarousel /> */}
    </div>
  );
};

export default Home;
