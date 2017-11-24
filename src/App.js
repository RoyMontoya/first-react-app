import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// Components
import Image from './components/Image';
import Input from './components/Input';

class App extends Component {
  constructor(){
    super();

    this.state = { inputType: 'text'}

    this.onClickChild = this.onClickChild.bind(this)
  }

  onClickChild(e){
    alert(0)
    this.setState({inputType: 'number'});
  }


  render() {
    return (
      <div >
        <Image id={1} src="" onClickChild = {this.onClickChild}></Image>
        <Input id={2} type= {this.state.inputType}></Input>
      </div>
    );
  }
}

export default App;
