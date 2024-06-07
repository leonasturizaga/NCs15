import './css/Footer.css';
import { Link } from 'react-router-dom';
// import ImagenLogo from "../assets/LogoPetDocs.png";
import ImagenInstagram from "../assets/iconoInstagram-alfa.png";
import ImagenWhatsapp from "../assets/iconoWhatsapp-alfa.png";
import ImagenMail from "../assets/iconoMail-alfa.png";
import Nosotros from './../pages/Nosotros';


const Footer = () => {
    return (

        <div className="container-footer">            
            <div className="brand-footer">
                <a href="#">PetDocs</a>   
            </div>            
            <div className="copy-footer">
                <Link to="/Nosotros" > <p >Nosotros</p> </Link>  <p>&copy; 2024 PetDocs</p>
               
            </div>
            <div className="redes-footer">
                <div className="rs-footer">
                   <a href="#/"> <img src={ImagenInstagram} alt="Instagram" /></a>
                </div>
                <div className="rs-footer">
                   <a href="#/"> <img src={ImagenWhatsapp} alt="Whatsapp" /></a>
                </div>
                <div className="rs-footer">
               <a href="#/"><img src={ImagenMail} alt="Mail" /></a>
                </div>
            </div>
            <div className="break"></div>

        </div>
    )
}

export default Footer

// https://www.instagram.com/
// https://web.whatsapp.com/
// mailto:petdocs@example.com