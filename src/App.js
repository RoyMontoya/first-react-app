import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// Components
import Image from './components/Image';
import Input from './components/Input';

class App extends Component {
  // constructor(){
  //   super();
  //
  //   this.state = { inputType: 'text'}
  //
  //   this.onClickChild = this.onClickChild.bind(this)
  // }
  //
  // onClickChild(e){
  //   alert(0)
  //   this.setState({inputType: 'number'});
  // }
  constructor(){
    super();

    this.state = {
      label: "0"
    };

    this.onClickButton = this.onClickButton.bind(this);
  }

  onClickButton(e){
    if(e.target.id == "b1"){
      this.setState({ label: "uno"});
    }else if(e.target.id == "b2"){
      this.setState({ label: "dos"});
    }else{
      this.setState({ label: "tres"});
    }
  }

  render() {
    return (
      <div >
        {/* <Image id={1} src="" onClickChild = {this.onClickChild}></Image>
        <Input id={2} type= {this.state.inputType}></Input> */}

        <button id = "b1" onClick = {this.onClickButton}>Click 1</button>
        <button id = "b2" onClick = {this.onClickButton}>Click 2</button>
        <button id = "b3" onClick = {this.onClickButton}>Click 3</button>
        <label className="App-label">{this.state.label}</label>
      </div>
    );
  }
}

export default App;
