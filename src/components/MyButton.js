import React from 'react';

export default ({text, disabled}) => (
  <button disabled={disabled}>{text}</button>
);