import React from 'react';

const MyButton = ({text, disabled}) => (
  <button disabled={disabled}>{text}</button>
);

MyButton.defaultProps = {
  text: 'My Button',
  disabled: false
};

export default MyButton;