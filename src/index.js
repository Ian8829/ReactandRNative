// import React, { Component } from 'react';
// import { render } from 'react-dom';
// import MyContainer from "./components/MyContainer";
//
// render(
//   <MyContainer/>,
//   document.querySelector('.container')
// );

import React from 'react';

export default React.createClass({
  onClick() {
    console.log('clicked',
      `${this.props.children}`);
  },

  render() {
    return(
      <button onClick={this.onClick}>
        {this.props.children}
      </button>
    );
  }
});