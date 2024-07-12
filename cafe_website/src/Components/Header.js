import React from 'react';
import './Header.css';
import logo from '../assets/logo.png';

function Header() {
  return (
    <header className="header">
      <img src={logo} alt="Sip & Play Logo" className="logo" />
      <nav className="nav">
        <button className="nav-button">Menu</button>
        <button className="nav-button">Games</button>
        <button className="nav-button">Events</button>
      </nav>
    </header>
  );
}

export default Header;