import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';
import Caracteristicas from '../components/Caracteristicas';
import OwnerCard from './OwnerCard';
import OwnerPets from './OwnerPets';
import CalendarComponent from '../components/Calendar';
import PetCarousel from './PetCarousel';


const Home = () => {
  const { nick } = useContext(UserContext);

  return (
    <div>
      <div className='home-container'>
        <div>
          <h3 className="title-h3">Mi perfil</h3>
        </div>

        <Caracteristicas />
        {/* <OwnerPets /> */}
        <PetCarousel />
        <CalendarComponent nick={nick} />
        <OwnerCard />

      </div>
    </div>
  );
};

export default Home;
