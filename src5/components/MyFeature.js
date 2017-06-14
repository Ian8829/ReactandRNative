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

  // update the state of comp with new title value
  // by using 'set' to create a new map
  onChangeTitle = e => {
    this.data = this.data.set(
      'title',
      e.target.value
    );
  }

  onChangeSummary = e => {
    this.data = this.data.set(
      'summary',
      e.target.value
    );
  }

  onClickAdd = () => {
    this.data = this.data.update(
      'articles',
      a => a.push(fromJS({
        id: cuid(),
        title: this.data.get('title'),
        summary: this.data.get('summary'),
        display: 'none'
      }))
    )
      .set('title', '')
      .set('summary', '');
  }

  onClickRemove = id => {
    const index = this.data
      .get('articles')
      .findIndex(
        a => a.get('id') === id
      );

    this.data = this.data
      .update(
        'articles',
        a => a.delete(index)
      );
  }

  onClickToggle = id => {
    const index = this.data
      .get('articles')
      .findIndex(
        a => a.get('id') === id
      );

    this.data = this.data
      .update(
        'articles',
        articles => articles.update(
          index,
          a => a.set(
            'display',
            a.get('display') ? '' : 'none'
          )
        )
      )
  }



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