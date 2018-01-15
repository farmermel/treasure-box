import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Treasure.scss';

let value = ['token', 'trinket', 'gold', 'heirloom'];

export default class Treasure extends React.Component {
  render() {
    return (
      <article className="Treasure">
        <div className="card-title-wrap">
          <h3>{ this.props.details.title }</h3>
          <button onClick={ () => this.props.deleteCard(this) }
                  className="delete">X</button>
        </div>
        <p>{ this.props.details.body }</p>
        <div>
          <button onClick={ () => this.props.vote(this, 'upvote') }
                  className="upvote">Upvote</button>
          <button onClick={ () => this.props.vote(this, 'downvote') }
                  className="downvote">Downvote</button>
          <p className="value">Value: { value[this.props.details.rating] }</p>
        </div>
      </article>
    );
  }
}

Treasure.propTypes = {
  details: PropTypes.object,
  deleteCard: PropTypes.func,
  vote: PropTypes.func
};