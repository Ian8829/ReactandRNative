import React, { Component } from 'react';
import { render } from 'react-dom';

import MyComponent from './components/MyComponent';

const myComponent = render(
  <MyComponent/>,
    document.querySelector('.container')
);

setTimeout(() => {
    myComponent.setState({
        heading: 'React Awesome??',
        content: 'Yes?'
    });
}, 3000);