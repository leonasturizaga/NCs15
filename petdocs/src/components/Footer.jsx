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
                   <a href="https://www.instagram.com/petdocsapp"> <img src={ImagenInstagram} alt="Instagram" /></a>
                </div>
                <div className="rs-footer">
                   <a href="https://web.whatsapp.com/"> <img src={ImagenWhatsapp} alt="Whatsapp" /></a>
                </div>
                <div className="rs-footer">
               <a href="mailto:petdocs@example.com"><img src={ImagenMail} alt="Mail" /></a>
                </div>
            </div>
        </div>
    )
}

export default Footer
