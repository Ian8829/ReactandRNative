import React, { Component } from 'react';
import { fromJS } from 'immutable';

import { users } from './api';
import UserList from './userList';

export default class UserListContainer extends Component {
  state = {
    data: fromJS({
      error: null,
      loading: 'loading...',
      users: []
    })
  };

  // Getter for 'Immutable.js' state data..
  get data() {
    return this.state.data;
  }

  // Setter for 'Immutable.js' state data..
  set data(data) {
    this.setState({ data });
  }

  // fetching a list of users from mock API
  componentDidMount() {
    users().then(
      result => {
        this.data = this.data
          .set('loading', null)
          .set('error', null)
          .set('users', fromJS(result.users));
      },
      error => {
        this.data = this.data
          .set('loading', null)
          .set('error', error);
      }
    );
  }

  render() {
    return (
      <UserList {...this.data.toJS()}/>
    );
  }
}

