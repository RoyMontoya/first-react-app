import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  getBox(number){
    return (
      <div>
        <h2>
        {"Hola soy la caja numero # ".concat(number)}
        </h2>
      </div>
    )
  }


  render() {
    return (
      <div >
          {this.getBox(1)}
          {this.getBox(2)}
      </div>
    );
  }
}

export default App;
