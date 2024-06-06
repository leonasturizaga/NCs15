import './css/Footer.css';
// import ImagenLogo from "../assets/LogoPetDocs.png";
import ImagenInstagram from "../assets/iconoInstagram-alfa.png";
import ImagenWhatsapp from "../assets/iconoWhatsapp-alfa.png";
import ImagenMail from "../assets/iconoMail-alfa.png";


const Footer = () => {
    return (

        <div className="container-footer">            
            <div className="brand-footer">
                <a href="/home">PetDocs</a>   
            </div>     
            <div className="">
                <p ><a href="/Nosotros">Nosotros</a> </p>
                <p>2024&#169;</p>  
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
            <div className="copy-footer">
                <p>&copy; 2024 PetDocs</p>
            </div>
        </div>
    )
}

export default Footer

// https://www.instagram.com/
// https://web.whatsapp.com/
// mailto:petdocs@example.com