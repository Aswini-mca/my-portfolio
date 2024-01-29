import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {

  const [isMenuOpen, setMenuOpen] = useState(false);

  // Function to toggle the menu state
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  // Function to close the menu
  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <nav className='navbar navbar-expand-lg bg-light fixed-top'>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Aswini
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded={isMenuOpen ? 'true' : 'false'}
            aria-label="Toggle navigation"
            onClick={toggleMenu}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`}
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav mb-2 mb-lg-0 ms-auto">
              <li className="nav-item">
                <Link
                  className='nav-link'
                  aria-current="page"
                  to="/"
                  onClick={closeMenu}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className='nav-link'
                  aria-current="page"
                  to="/about"
                  onClick={closeMenu}>
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className='nav-link'
                  to="/skills"
                  onClick={closeMenu}>
                  Skills
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className='nav-link'
                  to="/projects"
                  onClick={closeMenu}>
                  Projects
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className='nav-link'
                  to="/certificates"
                  onClick={closeMenu}>
                  Certificates
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar