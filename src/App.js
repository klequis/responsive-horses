import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import iHorses1x from './horses.1x.jpg'
import iHorses2x from './horses.2x.jpg'

class App extends Component {
  render() {
    return (
      <div>
        <img
          src={iHorses1x}
          alt='two horses'
          srcset={`${iHorses2x} 2x`}
        />
      </div>
    );
  }
}

export default App;
