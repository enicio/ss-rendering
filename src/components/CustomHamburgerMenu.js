import React from 'react';
import ButtonGetStarted from './CustomGetStartedButton';

import './header.css'

function customHamburgerMenu(props) {
  const { toggleHamburgerMenu, openModalHeader } = props.functions;

const style = {
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
  fontFamily: 'Open Sans',
  fontStyle: 'normal',
  fontWeight: 'normal',
  fontSize: '21px',
  lineHeight: '29px',
  textAlign: 'center',
  letterSpacing: '-0.02em',
  color: '#FFFFFF',
}

  return(
    <div className="custom__hamburger__menu" style={ style }>
      <div className="custom__hamburger__menu__header" style={ header__hamburger } >
        <img className="header__logo" src='assets/header/logo.svg' alt="logo"/>
        <button onClick={ () => toggleHamburgerMenu() } >X</button>
      </div>
      <nav style={ nav } className="header__menu">
        <p>How it works </p>
        <p>About Us</p>
      </nav>
      <ButtonGetStarted functions={ {toggleHamburgerMenu, openModalHeader} }  />
    </div>
  );
}

export default customHamburgerMenu;
