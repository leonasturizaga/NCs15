//Hay un breve delay al scrollear, con el cambio de colores.

import React, { useState, useEffect } from "react";
import "./css/Header.css";
// import { Link } from "react-router-dom"; <-- otro manejo para links.

function Header({ brandName, pathLogo, navItems }) {
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [scrolled, setScrolled] = useState(false);

  const handleToggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  // Handles the click event of each nav item. It sets the selected index and collapses the navbar.
  const handleNavItemClicked = (index) => {
    setSelectedIndex(index);
    setIsCollapsed(true); // Collapse the navbar after a nav item is clicked
  };

  //Esto es para manejar el cambio de color del navbar al hacer scroll.
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) { //ADECUAR LUEGO.
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar fixed-top navbar-expand-md navbar-light shadow ${scrolled ? 'navbar-custom-bg-color' : 'bg-white'}`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img
            src={pathLogo}
            width="90"
            height="60"
            className="d-inline-block align-center rounded"
            // alt={"Logo de " + brandName}
            alt={`Logo de ${brandName}`}
          />
          {/* <span id="brandText" className="fw-bolder fs-4 navbar-text">{brandName}</span> */}
        </a>
        <button
          // className="navbar-toggler btn btn-toggle btn-outline-light"
          className="navbar-toggler"
          type="button"
          onClick={handleToggleCollapse}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* con lo sgte, se podría prescindir de usar ul incluso */}
        {/* <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-item nav-link active" href="#">Home <span className="sr-only">(current)</span></a>
            <a className="nav-item nav-link" href="#">Features</a>
            <a className="nav-item nav-link" href="#">Pricing</a>
            <a className="nav-item nav-link disabled" href="#">Disabled</a>
          </div>
        </div> */}

        <div className={`collapse justify-content-end navbar-collapse ${isCollapsed ? '' : 'show'}`}>
          <ul className="navbar-nav align-items-center mr-auto mb-2 mb-md-1">
            {navItems.map((item, index) => (
              <li
                key={item}
                className="nav-item"
                onClick={() => handleNavItemClicked(index)}
              >
                <a className={`nav-link ${selectedIndex === index ? 'active fw-bold' : ''} ${scrolled ? 'navbar-custom-text-color' : ''}`} href="#">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;