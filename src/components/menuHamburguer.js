import React, { useState} from 'react';
import { slide as Menu } from 'react-burger-menu';

function MenuHamburger(props) {
const [ menuOpen , setMenuOpen ] = useState(false);
console.log(menuOpen)

const styles = {
  bmMenuWrap: {
    width: '250px',
    height: '100vh',
  },
  bmOverlay: {
    width: '250px',
    height: '100vh',
  }
};

function handleStateChange (state) {
  setMenuOpen(state)
}

// This can be used to close the menu, e.g. when a user clicks a menu item
function closeMenu () {
  console.log('close menu', menuOpen)
  setMenuOpen(false)
}

// This can be used to toggle the menu, e.g. when using a custom icon
// Tip: You probably want to hide either/both default icons if using a custom icon
// See https://github.com/negomi/react-burger-menu#custom-icons
function toggleMenu () {
  setMenuOpen(!menuOpen);
}


  return(
    <Menu isOpen={ menuOpen }
          customBurgerIcon={ <img src="assets/image/hamburger.svg" alt="hamburger menu" /> }
          // width={ '100%' }
          styles= { styles }
          noTransition
          itemListElement="div"
          onStateChange={() => handleStateChange(menuOpen) }
    >
        <p>How it works </p>
        <p>About Us</p>
        <p onClick={ () => toggleMenu()}>close</p>
        <button onClick={ () => { props.openModal(true); toggleMenu() }} className="pop_header__button" >Get Started</button>
      </Menu>
  );
}

export default MenuHamburger;
