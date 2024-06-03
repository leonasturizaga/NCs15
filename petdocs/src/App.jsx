import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.min.js";

// Componentes
import Header from "./components/Header";
import Caracteristicas from "./components/Caracteristicas";
import Hero from "./components/Hero";
import Banner from "./components/Banner";
import Footer from "./components/Footer";

// Imágenes
import pathLogo from "./assets/logo-with-name.jpeg";
import pathYellowCircle from "./assets/yellow_circle_.png";
import pathOrangeCircle from "./assets/orange_circle_.png";
import pathRedCircle from "./assets/red_circle_.png";
import pathPaw from "./assets/paw-icon2.png";
import pathAgenda from "./assets/icon_agenda.png";
import pathPen from "./assets/icon_lapiz.png";

function App() {
  //Botones para el navbar.
  let items = ["Inicio", "Nosotros"];

  let cards = [
    {
      id: "yellowCard",
      title: "Añadir mascota",
      link: "",
      background: pathYellowCircle,
      icon: pathPen,
    },
    {
      id: "orangeCard",
      title: "Ver mascota",
      link: "",
      background: pathOrangeCircle,
      icon: pathPaw,
    },
    {
      id: "redCard",
      title: "Crear recordatorio",
      link: "",
      background: pathRedCircle,
      icon: pathAgenda,
    },
  ];

  return (
    <>
      <Header brandName={"PetDocs"} pathLogo={pathLogo} navItems={items} />
	  
  	  <Hero />

      <Caracteristicas cardData={cards} />
	  
	    <Banner />
	  
	    <Footer />
	  
	    {/* <div>
        <Hero />        
      </div>
      <div>
        <Banner />
      </div>
      <div>
        <Footer />
      </div> */}
    </>
  );
}

export default App;