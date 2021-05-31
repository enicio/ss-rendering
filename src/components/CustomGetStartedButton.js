import React from 'react';


function ButtonGetStarted(props) {
  const { toggleHamburgerMenu, openModalHeader } = props.functions;
  // console.log(props)
const style = {
  width: '272px',
  height: '48px',

  background: '#FFD74F',
  boxShadow: '1px 3px 11px -3px rgba(255, 231, 150, 0.45)',
  borderRadius: '4px',
  border: 'none',

  fontFamily: 'Open Sans',
  fontStyle: 'normal',
  fontWeight: 'bold',
  fontSize: '14px',
  lineHeight: '19px',
  /* identical to box height */

  textAlign: 'center',
  letterSpacing: '-0.02em',

  color: '#6F48EC',
}

  return(
    <button onClick={ () => { toggleHamburgerMenu(); openModalHeader(true);} }
      style={ style } >Get Started
    </button>
  );
}

export default ButtonGetStarted;