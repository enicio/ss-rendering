import React from 'react';
// import logo from '../assets/header/logo.svg'

import CustomHamburgerMenu from './CustomHamburgerMenu';

import ModalF from './modal';

import './header.css'

function Header() {
  const [modalIsOpen,setIsOpenHeader] = React.useState(false);
  const [hamburgerMenu, setHamburgerMenu] = React.useState(false)

 function openModalHeader(isOpen) {
    setIsOpenHeader(isOpen);
  }

  function toggleHamburgerMenu() {
    setHamburgerMenu(!hamburgerMenu)
    console.log(hamburgerMenu)
  }

  return(
    <>
      <header className="header">
        <img
          onClick={() => toggleHamburgerMenu()}
          className="header__menu__hamburger"
          src="assets/image/hamburger.svg"
          alt="Menu hamburger"
        />
        <img
          className="header__logo"
          src='assets/header/logo.svg'
          alt="logo"
        />
        <nav className="header__menu">
          <p>How it works </p>
          <p>About Us</p>
        </nav>
        <button
          onClick={ () => openModalHeader(true)}
          className="header__button">
            Get Started
        </button>
      </header>
      {(modalIsOpen)
        ?<ModalF openModal={openModalHeader} />
        : ''
      }
      {(hamburgerMenu)
        ?<CustomHamburgerMenu functions={{ toggleHamburgerMenu, openModalHeader }}  />
        : ''
      }
    </>
  );
}

export default Header;