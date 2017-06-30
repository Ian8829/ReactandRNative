import React from 'react';
import { Map as ImmutableMap } from 'immutable';

const ErrorMessage = ({ error }) =>
  ImmutableMap()
    .set(null, null)
    .get(
      error,
      (<strong>{error}</strong>)
    );

const LoadingMessage = ({ loading }) =>
  ImmutableMap()
    .set(null, null)
    .get(
      loading,
      (<em>{loading}</em>)
    );

export default ({
                  error,
                  loading,
                  users
                }) => (
  <section>
    <ErrorMessage error={error}/>
    <LoadingMessage loading={loading}/>
    <ul>
      {users.map(i => (
        <li key={i.id}>{i.name}</li>
      ))}
    </ul>
  </section>
);