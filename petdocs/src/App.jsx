//******************************** opcion 2 ******************** */
import React from 'react';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Context
import { UserProvider } from './context/UserContext';

// Components
import Header from "./components/Header";
import Caracteristicas from "./components/Caracteristicas";
import Hero from "./components/Hero";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Register from "./pages/Register"; 
import Login from "./pages/Login";
import PetCard from "./pages/PetCard"; 
import PetForm from "./pages/PetForm";
import Evento from "./pages/EventoForm";
import Nosotros from "./pages/Nosotros";
import Home from "./pages/Home";
import OwnerCard from "./pages/OwnerCard";


// Images
import pathLogo from "./assets/LogoPetDocs.png";

const App = () => {
  return (
    <UserProvider>
      <Router>
        <Header brandName={"PetDocs"} pathLogo={pathLogo} navItems={["Inicio", "Nosotros"]} />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/pet-form" element={<PetForm />} />
          <Route path="/pet-card" element={<PetCard />} />
          <Route path="/evento" element={<Evento />} />
          <Route path="/home" element={<Home/>} />
          <Route path="/nosotros" element={<Nosotros/>} />
          <Route path="/owner-card" element={<OwnerCard />} />
          <Route path="/" element={
            <>
              <Hero />
              <Caracteristicas />
              <Nosotros/>
              <Banner />
            </>
          } />
        </Routes>
        <Footer />
      </Router>
    </UserProvider>
  );
}

export default App;
