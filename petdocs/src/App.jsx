
// src/App.jsx
import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.min.js";

//  import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


// Components
import Header from "./components/Header";
import Caracteristicas from "./components/Caracteristicas";
import Hero from "./components/Hero";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Register from "./pages/Register"; 
import Login from "./pages/Login";
import PetCard from "./pages/PetCard"; 

// Images
import pathLogo from "./assets/LogoPetDocs.png";

function App() {
  const [currentPage,setCurrentPage] = useState("home");

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

  return (
    <>
      <Header brandName={"PetDocs"} pathLogo={pathLogo} navItems={items} />

      {currentPage === "Login" && <Login />}
      {currentPage === "Register" && <Register />}
      {currentPage === "home" && (
        <>
          <Hero onLoginClick={handleLoginClick} onRegisterClick={handleRegisterClick} />
          <Caracteristicas />
          <Banner />
          <PetCard />
        </>
      )}

      <Footer />

      {/* <Router>
      <Switch>
        <Route path="./pages/Register" component={Register} />
        <Route path="./pages/Login" component={Login} />
      </Switch>
    </Router> */}
    </>



);
}

export default App;
