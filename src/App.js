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
     selectValue : "Mexico"
   };

   this.onChange = this.onChange.bind(this);
 }


onChange(event){
  this.setState({selectValue: event.target.value})
}

  render() {
    return (
      <div >
        <select onChange = {this.onChange} value = {this.state.selectValue}>
            <option value= "Mexico">Mexico</option>
            <option value= "USA">USA</option>
            <option value= "Chile">Chile</option>
            <option value= "Argentina">Argentina</option>

        </select>
      </div>
    );
  }
}

export default App;
