import React from "react";
import "./css/Caracteristicas.css";
import { Link } from 'react-router-dom';

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
    link: "/pet-card",
    background: pathOrangeCircle,
    icon: pathPaw,
  },
  {
    id: "redCard",
    title: "Crear recordatorio",
    link: "/evento",
    background: pathRedCircle,
    icon: pathAgenda,
  },
];

const Caracteristicas = () => {
  // Clases image-overlay y overlay-image no parecen hacer nada.
  return (
    <div className="cardsContainer">
      {cards.map((data, index) => (
        <a href={data.link}>
          {/* <div className="card" key={index}> */}
          <div className={`card card-border 
          ${data.id == "yellowCard" ? 'yellow-border' : 
            data.id == "orangeCard" ? 'orange-border' : 
            data.id == "redCard" ? 'red-border' : ''}`} key={index}>
            <div className="image-overlay imageContainer">
              <img
                src={data.icon}
                className="overlay-image imageIcon"
                alt="Icon"
              />
              <h5 className="card-title">{data.title}</h5>
            </div>
          </div>
        </a>
    ))}
  </div>
);
}
export default Caracteristicas;