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
<<<<<<< HEAD
import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';
=======
import React from 'react';
import { useContext } from 'react';
import { UserContext } from '../context/UserContext';
// import { useLocation } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';
>>>>>>> bc9bf644c69cda11509cafef2fbff7997a4c45d6
import Caracteristicas from '../components/Caracteristicas';
import PetCard from './PetCard';

const Home = () => {
  const { nick } = useContext(UserContext);

  return (
    <div>
      <div>
        <h3 className="title-h1">PetDocs home</h3>
        <p className='text-banner'>Bienvenido {nick}!</p>
      </div>
      <Caracteristicas />
      <PetCard />
    </div>
  );
};

export default Home;
