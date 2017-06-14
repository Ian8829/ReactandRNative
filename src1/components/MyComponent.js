import React, { Component } from 'react';

export default class MyComponent extends Component {
    state = {
      first: 'loading...',
      second: 'loading...',
      third: 'loading...',
    };

    render() {
        const { state } = this;

        return (
            <ul>
                {Object.keys(state).map(i => (
                    <li key={i}>
                        <strong>{i}: </strong>{state[i]}
                    </li>
                ))}
            </ul>
        );
    }
}