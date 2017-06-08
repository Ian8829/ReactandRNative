import React, { Component } from 'react';
import { render } from 'react-dom';
import MyComponent from "./components/MyComponent";

const myComponent = render(
    <MyComponent/>,
    document.querySelector('.container')
);

setTimeout(() => {
    myComponent.setState({
        first: 'done!'
    })
}, 1000);

setTimeout(() => {
    myComponent.setState({
        second: 'done!'
    })
}, 2000);

setTimeout(() => {
    myComponent.setState({
        third: 'done!'
    })
}, 3000);