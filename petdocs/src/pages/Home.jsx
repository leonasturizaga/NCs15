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
  const cards = [
    {
      id: 'yellowCard',
      title: 'Añadir mascota',
      link: '',
      background: 'path/to/yellow_circle.png',
      icon: 'path/to/lapiz.png',
    },
    {
      id: 'orangeCard',
      title: 'Ver mascota',
      link: '',
      background: 'path/to/orange_circle.png',
      icon: 'path/to/paw.png',
    },
    {
      id: 'redCard',
      title: 'Crear recordatorio',
      link: '',
      background: 'path/to/red_circle.png',
      icon: 'path/to/agenda.png',
    },
  ];

  return (
    <div>



    <Banner />
    <PetCard />


    </div>

  );
};

export default Home;
