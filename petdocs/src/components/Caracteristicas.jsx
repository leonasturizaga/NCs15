import React from "react";
import "./css/Caracteristicas.css";

const Caracteristicas = ({ cardData }) => {
  // Clases image-overlay y overlay-image no parecen hacer nada.
  return (
    <div className="cardsContainer">
      {cardData.map((data, index) => (
        <a href={data.link}>
          <div className="card" key={index}>
            <div className="image-overlay imageContainer">
              <img
                src={data.background}
                className={`card-img-top ${data.id === "redCard" ? 'card-back-opacity' : ''}`}
                // className="card-img-top"
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
        </a>
      ))}
    </div>
  );
}

export default Caracteristicas;