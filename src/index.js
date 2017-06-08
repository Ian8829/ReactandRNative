import React, { Component } from 'react';
import { render } from 'react-dom';

import MyComponent from './components/MyComponent';

const myComponent = render(
  <MyComponent/>,
    document.querySelector('.container')
);

