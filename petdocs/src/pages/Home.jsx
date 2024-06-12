//***************** opcion 2 ********************* */
// src/pages/Home.jsx
import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';
import Caracteristicas from '../components/Caracteristicas';
import OwnerCard from './OwnerCard';
import OwnerPets from './OwnerPets';

const Home = () => {
  const { nick } = useContext(UserContext);

  return (
    <div>
      <div className='home-container'>
        <div>
          <h3 className="title-h3">PetDocs Home</h3>
        </div>

        <Caracteristicas />
        <OwnerPets />
        <OwnerCard />

      </div>
    </div>
  );
};

export default Home;
