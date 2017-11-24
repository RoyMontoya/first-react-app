import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// Components
import Image from './components/Image';
import Input from './components/Input';

class App extends Component {
  render() {
    return (
      <div >
        <Image id={1} src=""></Image>
        <Input id={2} type="text"></Input>
      </div>
    );
  }
}

export default App;
