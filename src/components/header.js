import React from 'react';
// import logo from '../assets/header/logo.svg'

import ModalF from './modal';

import './header.css'

function Header() {
  const [modalIsOpen,setIsOpenHeader] = React.useState(false);

 function openModalHeader(isOpen) {
    setIsOpenHeader(isOpen);
  }

  return(
    <>
    <header className="header">
      <img className="header__logo" src='assets/header/logo.svg' alt="logo"/>
      <nav className="header__menu">
        <p>How it works </p>
        <p>About Us</p>
      </nav>
      <button onClick={ () => openModalHeader(true)} className="header__button">Get Started</button>
    </header>
    {(modalIsOpen)?<ModalF openModal={openModalHeader} />: ''}
    </>
  );
}

export default Header;