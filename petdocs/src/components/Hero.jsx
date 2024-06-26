// import React from 'react';
// import './css/Hero.css';
// import ImagenHero from '../assets/PetDocs_foto2.png';

// const Hero = ({ onRegisterClick,onLoginClick }) => {

//     return (
//         <div className="hero">
//             <div className="container-hero">
//                 <div className="hero-img-container">
//                     <img
//                         src={ImagenHero}
//                         className="hero-img"
//                         alt="familia_con_mascota"
//                     />
//                 </div>
//                 <div className="hero-info">
//                     <div className="hero-title">
//                         <h1 className="title-h1" >Bienvenido a</h1>
//                         <h2 className="title-h2"  >PetDocs</h2>
//                     </div>
//                     <p>"Todo el historial de tu mascota a un paso de distancia."</p>
//                     <div className="hero-btns">
//                         <button className="btn-registrate" onClick={onRegisterClick}>Regístrate</button>
//                         <button className="btn-login" onClick={onLoginClick}>Iniciar Sesión</button>
//                     </div>
//                 </div>
//             </div>
//         </div>

//     );

// };

// export default Hero;

// *************** opcion 1 ***************
// src/components/Hero.jsx
import React from 'react';
import { useContext } from 'react';
import { UserContext } from '../context/UserContext';
import { Link } from 'react-router-dom';
import './css/Hero.css';
import ImagenHero from '../assets/PetDocs_foto2.png';

const Hero = () => {
    const { nick } = useContext(UserContext);
    return (
        <div className="hero">
            <div className="container-hero">
                <div className="hero-img-container">
                    <img
                        src={ImagenHero}
                        className="hero-img"
                        alt="familia_con_mascota"
                    />
                </div>
                <div className="hero-info">
                    <div className="hero-title">
                        <h1 className="title-h1">Bienvenido a</h1>
                        <h2 className="title-h2">PetDocs</h2>
                    </div>
                    <p>"Todo el historial de tu mascota a un paso de distancia."</p>
                    <div className="hero-btns">
                        <Link to="/register">
                            <button className="btn-registrate">Regístrate</button>
                        </Link>
                        <Link to="/login">
                            <button className="btn-login">Iniciar Sesión</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;



