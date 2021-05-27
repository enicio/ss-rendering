import React from 'react';
// import logo from '../assets/header/logo.svg'

import './header.css'

function Header() {
  return(
    <header className="header">
      <img className="header__logo" src='assets/logo.svg' alt="logo"/>
      <nav className="header__menu">
        <p>How it works </p>
        <p>About Us</p>
      </nav>
      <button className="header__button">Get Started</button>
    </header>
  );
}

export default Header;