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
    }

    this.onChange = this.onChange.bind(this);
    this.submitTreasure = this.submitTreasure.bind(this);
    this.deleteCard = this.deleteCard.bind(this);
    this.vote = this.vote.bind(this);
  }

  onChange(e, input) {
    let stateObject = {
      [input]: e.target.value
    }

    this.setState(stateObject, () => this.onSearch(input));
  }

  onSearch(input) {
    if(input === 'search') {
      let treasures = this.state.treasures;
      let searchInput = this.state.search;
      let treasuresToRender = treasures.filter( treasure => {
        return treasure.body.includes(searchInput) 
          || treasure.title.includes(searchInput);
      })

      this.setState({
        treasuresToRender: treasuresToRender
      })
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
      id: id
    }

    treasures.push(input);
    treasuresToRender.push(input);
    this.setState({
      title: '',
      body: '',
      treasures: treasures,
      treasuresToRender: treasuresToRender
    })
  }

  deleteCard(card) {
    let treasures = this.state.treasures;
    let treasuresToRender = this.state.treasuresToRender;
    let id = card.props.details.id;

    for (let i=0; i < treasures.length; i++) {
      if (treasures[i].id === id) {
        treasures.splice(i, 1);
      }
      // if (treasuresToRender[i] && treasuresToRender[i].id === id) {
      //   treasuresToRender.splice(i, 1);
      // }
    }

    this.setState({
      treasures: treasures,
      treasuresToRender: treasures
    })
  }

  vote(card, vote) {
    let index = card.props.index;
    let treasures = this.state.treasures;

    if (vote === 'upvote' && treasures[index].rating < 3) {
      treasures[index].rating++;
    } else if (vote === 'downvote' && treasures[index].rating > 0) {
      treasures[index].rating--;
    }
    this.setState({
      treasures: treasures
    });
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