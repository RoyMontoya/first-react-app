import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// Components
import Image from './components/Image';
import Input from './components/Input';

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

      </div>
    );
  }
}

export default App;
