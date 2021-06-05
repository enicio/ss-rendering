import React from 'react';
import ButtonGetStarted from './CustomGetStartedButton';

import './header.css'

function customHamburgerMenu(props) {
  const { toggleHamburgerMenu, openModalHeader } = props.functions;

const customHamburgerMenu = {
  position: 'absolute',
  zIndex: '100',
  width: '100%',
  height: '100vh',
  top: '0',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  alignItems: 'center',
  background: '#200E64',
  opacity: 0.95
}

const header__hamburger = {
    position: 'absolute',
    top: '15px',
    width: '100%',
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
}

const nav = {
  display: "flex",
  flexDirection: "column",
}
const a = {
  textDecoration: "none",
  fontFamily: 'Open Sans',
  fontStyle: 'normal',
  fontWeight: 'normal',
  fontSize: '21px',
  lineHeight: '29px',
  textAlign: 'center',
  letterSpacing: '-0.02em',
  color: '#FFFFFF',
  marginBottom: "25px",
}

const closeButton = {
  marginLeft: '30%',
  background: 'transparent',
  border: 'none'
}

  return(
    <div className="custom__hamburger__menu" style={ customHamburgerMenu }>
      <div className="custom__hamburger__menu__header" style={ header__hamburger } >
        <img className="header__logo" src='assets/header/logo.svg' alt="logo"/>
        <button style={ closeButton } onClick={ () => toggleHamburgerMenu() } >
          <img src="assets/image/btn--close.svg" alt="close button" />
        </button>
      </div>
      <nav style={ nav } className="header__menu">
        <a style={ a } href="/">How it works</a>
        <a style={ a } href="/">About Us</a>
      </nav>
      <ButtonGetStarted functions={ {toggleHamburgerMenu, openModalHeader} }  />
    </div>
  );
}

export default customHamburgerMenu;
