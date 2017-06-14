import React, { Component } from 'react';
// Utility for constructing unique IDs
import cuid from 'cuid';
// For building immutable component state
import { fromJS } from 'immutable';

export default class MyFeature extends Component {
  state = {
    data: fromJS({
      articles: [
        {
          id: cuid(),
          title: 'Article 1',
          summary: 'Article 1 Summary',
          display: 'none'
        },
        {
          id: cuid(),
          title: 'Article 2',
          summary: 'Article 2 Summary',
          display: 'none'
        },
        {
          id: cuid(),
          title: 'Article 3',
          summary: 'Article 3 Summary',
          display: 'none'
        },{
          id: cuid(),
          title: 'Article 4',
          summary: 'Article 4 Summary',
          display: 'none'
        },
      ],
      title: '',
      summary: ''
    })
  };

  // Getter for 'Immutable.js" state data..
  get data() {
    return this.state.data;
  }

  // Setter for 'Immutable.js" state data..
  set data(data) {
    this.setState({data})
  }

  render() {
    const { articles, title, summary }
    = this.data.toJS();

    return(
      <section>
        <header>
          <h1>Articles</h1>
          <input
            plcaeholder="Title"
            value={title}
            onChange={this.onChangeTitle}
          />
          <input
            placeholder="Sumamry"
            value={summary}
            onChange={this.onChangeSummary}
          />
          <button
            onClick={this.onClickAdd}
          >
            Add
          </button>
        </header>
        <article>
          <ul>
            {articles.map(i => (
              <li key={i.id}>
                <a
                  href="#"
                  onClick={this.onClickToggle.bind(null, i.id)}
                >
                  {i.title}
                </a>
                &nbsp;
                <a
                  href="#"
                  onClick={this.onClickRemove.bind(null, i.id)}
                >
                  X
                </a>
                <p style={{display: i.display}}>
                  {i.summary}
                </p>
              </li>
            ))}
          </ul>
        </article>
      </section>
    );
  }
}