// //import { useState } from 'react'
import React from 'react';
// import Hero from './components/Hero'
// import './App.css'

function App() {
  return (
    <>
      <div>
        <PetCard />
      </div>
      
    </>
  )
}

export default App

// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Header from './components/Header';

// import imagePath from "./assets/LogoPetDocs.png";
// import "bootstrap/dist/css/bootstrap.css";
// import "bootstrap/dist/js/bootstrap.min.js";

// import Navbar from './components/Navbar';
// import Hero from './components/Hero';
// import Body from './components/Body';
// import Footer from './components/Footer';
// import Register from './components/Register';
// import Login from './components/Login';
import PetCard from './pages/PetCard';
import './App.css';


// let items = ["Inicio", "Nosotros"];

// const App = () => (

//   <Router>
//     <div className="App">
   
//       <Header brandName={"PetDocs"} imageSrcPath={imagePath} navItems={items} />     
//       <Navbar />
//       <Routes>
//         <Route path="/" element={
//           <>
//             <Hero />
//             <Body />
//           </>
//         } />
//         <Route path="/register" element={<Register />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/petcard" element={<PetCard />} />
//       </Routes>
//       <Footer />
//     </div>
//   </Router>
// );

// export default App;
