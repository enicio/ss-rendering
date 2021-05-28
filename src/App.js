import React from 'react';
import Header from './components/header'
import Details from './components/details';
import Content from './components/content';



import './App.css';

function App() {
  return (
    <div className="App">

      <Header/>
      <div className="main" id="main">
        <div className="delails_left">
          <Details />
          <img className="delails_left_woman" src='./assets/image/image.png' alt="woman writing" />
          <img className="shapeamarelo" src='./assets/image/shape-3.svg' alt="woman writing" />
        </div>
        <Content />
        <div className="details-right">
          <Details />
        </div>
      </div>
    </div>
  );
}

export default App;
