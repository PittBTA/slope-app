import React, { Component } from 'react';
import './App.css';
import Map from './Map.js';
import Input from './Input.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Input></Input>
        <Map></Map>
      </div>
    );
  }
}

export default App;
