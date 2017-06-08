import React from 'react';
import { render } from 'react-dom';

import MyComponent from './components/MyComponent';

render((
    <MyComponent>
        <MyComponent.First />
        <MyComponent.Second />
    </MyComponent>
),
    document.querySelector('.container')
);