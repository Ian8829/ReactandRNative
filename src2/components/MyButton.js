import React, { Component } from 'react';

export default class MyButton extends Component {
  onClick() {
    console.log('Clicked?');
  }

  render() {
    return(
      <button onClick={this.onClick}>
        Click!
        {this.props.children}
      </button>
    );
  }
}