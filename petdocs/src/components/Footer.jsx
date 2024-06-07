import './css/Footer.css';
import { Link } from 'react-router-dom';

import ImagenInstagram from "../assets/iconoInstagram-alfa.png";
import ImagenWhatsapp from "../assets/iconoWhatsapp-alfa.png";
import ImagenMail from "../assets/iconoMail-alfa.png";

const Footer = () => {
  return (
    <div className="container-footer">
      <div id="brand-y-redes">
        <div className="brand-footer">
          <Link to="/">
            PetDocs
          </Link>
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
                <Link to="/nosotros">Quiénes somos</Link>
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