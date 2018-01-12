import React from 'react';
import '../styles/Treasure.scss';

export default class Treasure extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <article className="Treasure">
        <div className="card-title-wrap">
          <h3>{ this.props.details.title }</h3>
          <button onClick={ () => this.props.deleteCard(this) }>X</button>
        </div>
        <p>{ this.props.details.body }</p>
        <div>
          <button>Upvote</button>
          <button>Downvote</button>
          <button>Quality</button>
        </div>
      </article>
    )
  }
}