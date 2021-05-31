import React from 'react';
import { slide as Menu } from 'react-burger-menu';

function MenuHamburger() {
const styles = {
  bmMenuWrap: {
    width: '65px',
    height: '65px',
  },
  'bm-overlay': {
    width: '65px',
    height: '65px',
  },
  'react-burger-menu-btn': {
    width: '65px',
    height: '65px',
  }

}

  return(
    <Menu isOpen={ false }
          customBurgerIcon={ <img src="assets/image/hamburger.svg" alt="hamburger menu" /> }
          width={ '100%' }
          className={ "my-menu" }
          styles= { styles }
          pageWrapId={ "main" }
    >
       <p>How it works </p>
        <p>About Us</p>
      </Menu>
  );
}

export default MenuHamburger;
