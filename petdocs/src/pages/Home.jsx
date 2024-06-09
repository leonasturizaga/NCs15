// // src/pages/Home.jsx
// import React from 'react';
// import { useLocation } from 'react-router-dom';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import { Link } from 'react-router-dom';
// import Caracteristicas from '../components/Caracteristicas';
// import Hero from '../components/Hero';
// import Banner from '../components/Banner';
// import PetCard from '../pages/PetCard';
// import Register from './Register';
// import Login from './Login';
// import Footer from '../components/Footer';



// const Home = () => {
//   const location = useLocation();
//   const { nick } = location.state || {};  
//   return (
//     <div>
//       <div>
//       <h3 className="title-h1">PetDocs home</h3>
//       <p className='text-banner'>Bienvenido {nick}!</p>
//       </div>

//       <Caracteristicas />
//       <PetCard />
//     </div>

//   );
// };

// export default Home;


//***************** opcion 2 ********************* */
// src/pages/Home.jsx
import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';
import Caracteristicas from '../components/Caracteristicas';
import PetCard from './PetCard';
import PetCarousel from './PetCarousel';
import OwnerCard from './OwnerCard';
import UpdateOwner from './UpdateOwner';

const Home = () => {
  const { nick } = useContext(UserContext);

  return (
    <div>
      <div>
        <h3 className="title-h1">Bienvenido {nick}</h3>
      </div>
      {/* <UpdateOwner /> */}
      <Caracteristicas />      
      <OwnerCard />
      {/* <PetCarousel /> */}


    </div>
  );
};

export default Home;
