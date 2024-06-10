// src/components/Header.jsx
import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import "./css/Header.css";

const Header = ({ brandName, pathLogo, navItems }) => {
  const { nick } = useContext(UserContext);

  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  const handleToggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  // Handles the click event of each nav item. It sets the selected index and collapses the navbar.
  const handleNavItemClicked = (index, path) => {
    setSelectedIndex(index);
    setIsCollapsed(true); // Collapse the navbar after a nav item is clicked
    navigate(path); // Navigate to the corresponding path
  };

  // This handles the color change of the navbar on scroll.
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) { // Adjust this value as needed
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
        <a className="navbar-brand" onClick={() => handleNavItemClicked(0, '/')}>
          <img
            src={pathLogo}
            width="90"
            height="60"
            className="d-inline-block align-center rounded"
            alt={`Logo de ${brandName}`}
          />
        </a>
        <button
          className={`navbar-toggler ${scrolled ? 'navbar-custom-toggler' : ''}`}
          type="button"
          onClick={handleToggleCollapse}
          aria-label="Toggle navigation"
        >
          <span className={`navbar-toggler-icon ${scrolled ? 'navbar-custom-toggler-icon' : ''}`}></span>
        </button>

        <div className={`collapse justify-content-end navbar-collapse ${isCollapsed ? '' : 'show'}`}>
          <ul className="navbar-nav align-items-center mr-auto mb-2 mb-md-1">
            <li>
            <p className='text-banner'>Nick: {nick}</p>
            </li>
            {navItems.map((item, index) => (
              <li
                key={item}
                className="nav-item"
                onClick={() => handleNavItemClicked(index, index === 0 ? '/' : '/nosotros')}
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