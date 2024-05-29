import './css/Hero.css';
import ImagenHero from '../assets/PetDocs_foto2.png';
const Hero = () => {

    return (

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
                    <h1 className="title-h1" >Bienvenido a</h1>
                    <h2 className="title-h2"  >PetDocs</h2>
                </div>
                <p>"Todo el historial de tu mascota a un paso de distancia."</p>
                <div className="hero-btns">
                    <button className="btn-registrate">Registrate</button>
                    <button className="btn-login">Iniciar Sesion</button>
                </div>
            </div>
        </div>


    );

}

export default Hero