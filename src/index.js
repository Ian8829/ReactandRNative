import React, { Component } from 'react';
import { render as renderJSX } from 'react-dom';
import MyButton from "./components/MyButton";
import MyList from "./components/MyList";

const appState = {
    disabled: false,
    text: 'My Button',
    items: [
        'First',
        'Second',
        'Third'
    ]
};

function render(props) {
    renderJSX((
        <main>
            <MyButton
                disabled={props.disabled}
                text={props.text}
            />
            <MyList
                items={props.items}
            />
        </main>
    ),
    document.querySelector('.container')
    );
}

render(appState);

setTimeout(() => {
    appState.disabled = true;
    appState.items.splice(0, 2);
    render(appState);
}, 2000);

setTimeout(() => {
    appState.items.push('Fourth...');
    render(appState);
}, 4000);