import React from 'react';
import { render } from 'react-dom';

import UserListContainer from './components/userListContainer';

render(
  <UserListContainer/>,
  document.querySelector('.container');
);