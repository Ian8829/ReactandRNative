import React from 'react';
import { render } from 'react-dom';

// An array that we want to render as a list..
const array = [
    'First',
    'Second',
    'Third'
];

// An object that we want to render as a list...
const object = {
    first: 1,
    second: 2,
    third: 3
};

render((
    <section>
        <h1>Array</h1>
        <ul>
            {array.map(i => (
                <li key={i}>{i}</li>
            ))}
        </ul>

        <h1>Object</h1>
        <ul>
            {Object.keys(object).map(i => (
                <li key={i}>
                    <strong>{i}: </strong>{object[i]}
                </li>
            ))}
        </ul>
    </section>
    ),
    document.querySelector('.container')
);
