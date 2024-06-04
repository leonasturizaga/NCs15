
// src/App.jsx
import React, { useState } from 'react';
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.min.js";

// Components
import Header from "./components/Header";
import Caracteristicas from "./components/Caracteristicas";
import Hero from "./components/Hero";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Register from "./components/Register"; 
import Login from "./components/Login";
import PetCard from './pages/PetCard'; 

// Images
import pathLogo from "./assets/LogoPetDocs.png";
import pathYellowCircle from "./assets/yellow_circle_.png";
import pathOrangeCircle from "./assets/orange_circle_.png";
import pathRedCircle from "./assets/red_circle_.png";
import pathPaw from "./assets/paw-icon2.png";
import pathAgenda from "./assets/icon_agenda.png";
import pathPen from "./assets/icon_lapiz.png";

function App() {
  const [currentPage, setCurrentPage] = useState("home");

  // Handler to show the Register component
  const handleRegisterClick = () => {
    setCurrentPage("Register");
  };
  // Handler to show the Login component
  const handleLoginClick = () => {
    setCurrentPage("Login");
  };

  // Navbar buttons
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

      {currentPage === "Login" && <Login />}
      {currentPage === "Register" && <Register />}
      {currentPage === "home" && (
        <>
          <Hero onLoginClick={handleLoginClick} onRegisterClick={handleRegisterClick} />
          <Caracteristicas cardData={cards} />
          <Banner />
        </>
      )}

      <Footer />
      <PetCard />
    </>

);
}

export default App;
