import React, { Component } from 'react';

export default class MyFeature extends Component {


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