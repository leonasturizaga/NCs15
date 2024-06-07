
// // src/App.jsx
// import React, { useState } from 'react';
// import "bootstrap/dist/css/bootstrap.css";
// import "bootstrap/dist/js/bootstrap.min.js";

// //  import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


// // Components
// import Header from "./components/Header";
// import Caracteristicas from "./components/Caracteristicas";
// import Hero from "./components/Hero";
// import Banner from "./components/Banner";
// import Footer from "./components/Footer";
// import Register from "./pages/Register"; 
// import Login from "./pages/Login";
// import PetCard from "./pages/PetCard"; 
// import Nosotros from './pages/Nosotros';

// // Images
// import pathLogo from "./assets/LogoPetDocs.png";

// function App() {
//   const [currentPage,setCurrentPage] = useState("home");

//   // Handler to show the Register component
//   const handleRegisterClick = () => {
//     setCurrentPage("Register");
//   };
//   // Handler to show the Login component
//   const handleLoginClick = () => {
//     setCurrentPage("Login");
//   };

//   const handleHomeClick = () => {
//     setCurrentPage("home");
//   };

//   const handleNosotrosClick = () => {
//     setCurrentPage("nosotros");
//   };

//   // Navbar buttons
//   let items = ["Inicio", "Nosotros"];
//   let itemsActions = [handleHomeClick, handleNosotrosClick];

//   return (
//     <>
//       <Header brandName={"PetDocs"} pathLogo={pathLogo} navItems={items} navActions={itemsActions} />

//       {currentPage === "Login" && <Login />}
//       {currentPage === "Register" && <Register />}
//       {currentPage === "nosotros" && <Nosotros />}
//       {currentPage === "home" && (
//         <>
//           <Hero onLoginClick={handleLoginClick} onRegisterClick={handleRegisterClick} />
//           <Caracteristicas />
//           <Banner />
//           <PetCard />
//         </>
//       )}

//       <Footer />

//       {/* <Router>
//       <Switch>
//         <Route path="./pages/Register" component={Register} />
//         <Route path="./pages/Login" component={Login} />
//       </Switch>
//     </Router> */}
//     </>



// );
// }

// export default App;



//********************** opcion 1 ********** */

// src/App.jsx
import React, { useState } from 'react';
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
import Evento from "./pages/Evento";
import Nosotros from "./pages/Nosotros";
import Home from "./pages/Home";

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
        <Route path="/" element={
          <>
            <Hero />
            <Caracteristicas />
            <Banner />
            <PetCard />
          </>
        } />
      </Routes>
      
      <Footer />
    </Router>
    </UserProvider>  
  );
}

export default App;
