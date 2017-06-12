import React, { Component } from 'react';
import { render } from 'react-dom';
import MyButton from "./components/MyButton";

render(
  <MyButton/>,
  document.querySelector('.container')
);