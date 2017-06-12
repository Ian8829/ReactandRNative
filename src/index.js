import React from 'react';
import { render as renderJSX } from 'react-dom';

import MyButton from './components/MyButton';

function render({first, second}) {
  renderJSX((
    <main>
      <MyButton
        text={first.text}
        disabled={first.disabled}
      />
      <MyButton
        text={second.text}
        disabled={second.disabled}
      />
    </main>
  ),
  document.querySelector('.container')
  )
}

render({
  first: {
    text: 'First Button',
    disabled: true
  },
  second: {
    text: 'Second Button',
    disabled: false
  }
});