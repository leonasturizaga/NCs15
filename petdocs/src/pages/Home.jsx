// src/pages/Home.jsx
import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';
import Caracteristicas from '../components/Caracteristicas';
import PetCard from './PetCard';
import PetCarousel from './PetCarousel';
import OwnerCard from './OwnerCard';

const Home = () => {
  const { nick } = useContext(UserContext);

  return (
    <div className="home-container">
      <div>
        <h3 className="title-h1">Bienvenido {nick}</h3>
      </div>
      <div>
      <Caracteristicas />      
      <OwnerCard />
      <PetCarousel />      
      </div>



    </div>
  );
};

export default Home;
