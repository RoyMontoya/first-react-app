import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Image extends Component{
  render(){
    return(
      <div>
        <p>{"id: " + this.props.id}</p>
        <img src= {this.props.src}></img>
      </div>
    );
  }

}

Image.PropTypes = {
  id: PropTypes.number.isRequired,
  src: PropTypes.string.isRequired
}

export default Image;
