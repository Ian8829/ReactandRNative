import React, { Component } from 'react';
import { render } from 'react-dom';
import MyList from "./components/MyList";

render(
  <MyList/>,
  document.querySelector('.container')
);