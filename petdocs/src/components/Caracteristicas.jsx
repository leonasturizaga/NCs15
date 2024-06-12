import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';
import "./css/Caracteristicas.css";
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

//Images
import pathYellowCircle from "../assets/yellow_circle_.png";
import pathOrangeCircle from "../assets/orange_circle_.png";
import pathRedCircle from "../assets/red_circle_.png";
import pathPaw from "../assets/paw-icon2.png";
import pathAgenda from "../assets/icon_agenda.png";
import pathPen from "../assets/icon_lapiz.png";

let cards = [
  {
    id: "yellowCard",
    title: "Añadir mascota",
    link: "/pet-form",
    background: pathYellowCircle,
    icon: pathPen,
  },
  {
    id: "orangeCard",
    title: "Ver mascota",
    link: "/owner-pets",
    background: pathOrangeCircle,
    icon: pathPaw,
  },
  {
    id: "redCard",
    title: "Crear recordatorio",
    link: "/evento-form",
    background: pathRedCircle,
    icon: pathAgenda,
  },
];

const Caracteristicas = () => {
  // Clases image-overlay y overlay-image no parecen hacer nada.
  const { nick } = useContext(UserContext);
  return (
    <div className="cardsContainer">
      {cards.map((data, index) => (
        // <Link to={data.link} key={index}>
        <Link to={nick ? data.link : "/login"} key={index}>
          <div className="card" key={index}>
          {/* <div className={`card card-border 
          ${data.id == "yellowCard" ? 'yellow-border' : 
            data.id == "orangeCard" ? 'orange-border' : 
            data.id == "redCard" ? 'red-border' : ''}`} key={index}> */}
            <div className="image-overlay imageContainer">
              <img
                src={data.background}
                //Cambiar el className usado en caso que se quiera ver más claro el fondo del círculo rojo (habilitar su correspondiente estilo también).
                // className={`card-img-top ${data.id === "redCard" ? 'card-back-opacity' : ''}`}
                className="card-img-top"
                alt="Background"
              />
              <div className="icon-and-text">
                <img
                  src={data.icon}
                  className="overlay-image imageIcon"
                  alt="Icon"
                />
                <h5 className="card-title">{data.title}</h5>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
  }
  export default Caracteristicas;