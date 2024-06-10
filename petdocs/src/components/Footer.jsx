import './css/Footer.css';
import ImagenInstagram from "../assets/iconoInstagram-alfa.png";
import ImagenWhatsapp from "../assets/iconoWhatsapp-alfa.png";
import ImagenPin from "../assets/pinubicacion.png";
import ImagenPDIcon from "../assets/PetDocsIcon.png";
import ImagenCR from "../assets/copyrightIcon.webp";
import { Link } from 'react-router-dom';



const Footer = () => {
    return (

        <div className="container-footer">
            <div className="redes-footer">
                <div className="rs-footer">
                    <a href="https://www.instagram.com/petdocsapp?igsh=MTNkcTZuZG1mbGlwcw=="><img src={ImagenInstagram} alt="instagram" /> petdocsapp</a>
                </div>
                <div className="rs-footer">
                     <p> <img src={ImagenWhatsapp} alt="Whatsapp" /> +54-9-11-8765-9123</p>
                </div>
                <div className="rs-footer">
                  <p>  <img src={ImagenPin} alt="ubicacion" /> Cucha Cucha 1701 - CABA </p>
                </div>
            </div>
            <div className="footer-derechos">
                <div className="footer-cr">
                    <p><img src={ImagenCR} alt="copyright" /> 2024 - Todos los derechos reservados</p>
                </div>
            </div>
            <div className="brand-footer">
                <div>
                    <Link to="/" className='footer-brand'>
                    <img src={ImagenPDIcon} alt="" /> PetDocs
                    </Link>
                    {/* <a className='footer-brand' href="#"> <img src={ImagenPDIcon} alt="" /> PetDocs</a> */}
                </div>
                <div>
                    <a className='footer-mail' href="mailto:info@petdocs.com">info@petdocs.com</a>
                </div>
            </div>            
        </div>
    )};
export default Footer
