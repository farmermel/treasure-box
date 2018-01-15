import React from 'react';
import Header from './Header.js';
import Treasures from './Treasures.js';
import '../styles/App.scss';

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      title: '',
      body: '',
      search: '',
      treasures: [],
      treasuresToRender: []
    };

    this.onChange = this.onChange.bind(this);
    this.submitTreasure = this.submitTreasure.bind(this);
    this.deleteCard = this.deleteCard.bind(this);
    this.vote = this.vote.bind(this);
  }

  onChange(e, input) {
    let stateObject = {
      [input]: e.target.value
    };

    this.setState(stateObject, () => this.onSearch(input));
  }

  onSearch(input) {
    if (input === 'search') {
      let treasures = this.state.treasures;
      let searchInput = this.state.search;
      let treasuresToRender = treasures.filter( treasure => {
        return treasure.body.includes(searchInput) 
          || treasure.title.includes(searchInput);
      });

      this.setState({ treasuresToRender })
    }
  }

  submitTreasure() {
    let treasures = this.state.treasures;
    let treasuresToRender = this.state.treasuresToRender;
    let id = Date.now();
    let input = {
      title: this.state.title,
      body: this.state.body,
      rating: 0,
      id
    }

    treasures.push(input);
    treasuresToRender.push(input);
    this.setState({
      title: '',
      body: '',
      treasures,
      treasuresToRender
    });
  }

  deleteCard(card) {
    let treasures = this.state.treasures;
    let id = card.props.details.id;

    for (let i = 0; i < treasures.length; i++) {
      if (treasures[i].id === id) {
        treasures.splice(i, 1);
      }
    }

    this.setState({
      treasures
    }, () => this.onSearch('search'));
  }

  vote(card, vote) {
    let id = card.props.details.id;
    let treasures = this.state.treasures;

    for (let i = 0; i < treasures.length; i++) {
      let currentTreasure = treasures[i];

      if (vote === 'upvote' 
          && currentTreasure.id === id 
          && currentTreasure.rating < 3) {
        currentTreasure.id === id && treasures[i].rating++;

      } else if (vote === 'downvote' 
        && currentTreasure.id === id 
        && currentTreasure.rating > 0) {
        treasures[i].rating--;
      }
    }
    this.setState({ treasures }, () => this.onSearch('search'));
  }

  render() {
    return (
      <div className="App">
        <Header onChange={ this.onChange }
                submitTreasure={ this.submitTreasure }
                data={ this.state } />
        <Treasures treasures={ this.state.treasuresToRender }
                   search={ this.state.search }
                   onChange={ this.onChange }
                   onSearch={ this.onSearch }
                   deleteCard={ this.deleteCard }
                   vote={ this.vote } />
      </div>
    )
  }
}