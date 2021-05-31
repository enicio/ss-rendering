import React from 'react';


function ButtonGetStarted(props) {
  const { toggleHamburgerMenu } = props;
const style = {
  width: '165px',
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
    <button onClick={ () => toggleHamburgerMenu() }  style={ style } >Get Started</button>
  );
}

export default ButtonGetStarted;