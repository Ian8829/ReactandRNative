import React, { Component } from 'react';

export default class ArticleList extends Component {
  render() {
    const {
      articles,
      onClickToggle,
      onClickRemove
    } = this.props;

    return(
      <ul>
        {articles.map(i => (
          <li key={i.id}>
            <a
              href="#"
              onClick={onClickToggle.bind(null, i.id)}
            >
              {i.title}
            </a>
            &nbsp;
            <a
              href="#"
              onClick={onClickRemove.bind(null, i.id)}
            >
              X
            </a>
            <p style={{ display: i.display }}>
              {i.summary}
            </p>
          </li>
        ))}
      </ul>
    );
  }
}