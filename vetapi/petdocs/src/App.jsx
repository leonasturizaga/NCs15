// //import { useState } from 'react'
// import Hero from './components/Hero'
// import './App.css'

// function App() {
//   return (
//     <>
//       <div>
//         <Hero />
//       </div>
      
//     </>
//   )
// }

// export default App

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';

import imagePath from "./assets/logo-with-name.jpeg";
// import "bootstrap/dist/css/bootstrap.css";
// import "bootstrap/dist/js/bootstrap.min.js";

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Body from './components/Body';
import Footer from './components/Footer';
import Register from './components/Register';
import Login from './components/Login';
import './App.css';


let items = ["Inicio", "Nosotros"];

const App = () => (

  <Router>
    <div className="App">
   
      <Header brandName={"PetDocs"} imageSrcPath={imagePath} navItems={items} />
      {/* <p>{repeatLoremIpsum(10)}</p> */}

      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <Body />
          </>
        } />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

      </Routes>
      <Footer />
    </div>
  </Router>
);

export default App;
