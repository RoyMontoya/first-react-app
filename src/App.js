import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
        text: "Hola mundo",
        text2: "Estoy aprendiendo React.js"
    };
    this.onClick = this.onClick.bind(this)
  }

  onClick(e){
    this.setState({text2: "El valor cambio"});
  }


  render() {
    return (
      <div >
          <h2 onClick = {this.onClick}>{this.state.text}</h2>
          <h4>{this.state.text2}</h4>
      </div>
    );
  }
}

export default App;
