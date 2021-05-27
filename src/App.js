import React from 'react';
import Header from './components/header'
import Details from './components/details';
import Content from './components/content';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="delails_left">
        <Details />
        <img className="delails_left_woman" src='./assets/image/image.png' alt="woman writing" />
      </div>
      <Content />
      <Details />
    </div>
  );
}

export default App;
