import './css/Footer.css';
import { Link } from 'react-router-dom';
// import ImagenLogo from "../assets/LogoPetDocs.png";
import ImagenInstagram from "../assets/iconoInstagram-alfa.png";
import ImagenWhatsapp from "../assets/iconoWhatsapp-alfa.png";
import ImagenMail from "../assets/iconoMail-alfa.png";
import Nosotros from './../pages/Nosotros';

const Footer = ({ onBrandClick, onQuienesClick }) => {
  // const Footer = () => {
  return (
    <div className="container-footer">
      <div id="brand-y-redes">
        <div className="brand-footer">
          <a href="#" onClick={onBrandClick}>
            PetDocs
          </a>
        </div>

        <div className="redes-footer">
          <div className="rs-footer">
            <a href="#/" title="Instagram">
              <img src={ImagenInstagram} alt="Instagram" />
            </a>
          </div>
          <div className="rs-footer">
            <a href="#/" title="Whatsapp">
              <img src={ImagenWhatsapp} alt="Whatsapp" />
            </a>
          </div>
          <div className="rs-footer">
            <a href="#/" title="Mail">
              <img src={ImagenMail} alt="Mail" />
            </a>
          </div>
        </div>
      </div>

      <div id="links-y-copy">
        <div className="links-footer">
            <span>
            {/* <Link to="/Nosotros" > <p >Nosotros</p> </Link>  <p>&copy; 2024 PetDocs</p> */}
                <a href="#" onClick={onQuienesClick}>Quiénes somos</a>
                {"|"}
                <a href="#/">Política de privacidad</a>
                {"|"}
                <a href="#/">Política de cookies</a>
            </span>
        </div>

        <div className="copy-footer">
          <p>&copy; 2024 PetDocs</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

// https://www.instagram.com/
// https://web.whatsapp.com/
// mailto:petdocs@example.com
