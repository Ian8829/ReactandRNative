import React, { Component } from 'react';
import { render } from 'react-dom';
import MyContainer from "./components/MyContainer";

render(
  <MyContainer/>,
  document.querySelector('.container')
);