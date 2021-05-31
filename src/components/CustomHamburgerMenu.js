import React from 'react';
import CustomHamburgerMenu from './CustomGetStartedButton';

import './header.css'

function customHamburgerMenu(props) {
  const { toggleHamburgerMenu } = props;
const style = {
  position: 'absolute',
  zIndex: '100',
  width: '100%',
  height: '100vh',
  backgroundColor: 'burlywood',
  top: '0',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  alignItems: 'center',
}

  return(
    <div className="custom__hamburger__menu" style={ style }>
      <p>kombi</p>
      <p>Fusca</p>
      <p>Opala</p>
      {/* <button onClick={ () => toggleHamburgerMenu() } >X</button> */}
      <CustomHamburgerMenu toggleHamburgerMenu={ toggleHamburgerMenu }  />
    </div>
  );
}

export default customHamburgerMenu;
