// src/pages/Home.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Caracteristicas from '../components/Caracteristicas';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import PetCard from '../pages/PetCard';
import Register from './Register';
import Login from './Login';
import Footer from '../components/Footer';



const Home = () => {
  return (
    <div>


<Caracteristicas />
<PetCard />
    </div>

  );
};

export default Home;
