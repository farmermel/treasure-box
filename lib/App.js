import React from 'react';
import Header from './Header.js';
import Treasures from './Treasures.js';
import '../styles/App.scss';


export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      treasures: []
    }

    this.submitTreasure = this.submitTreasure.bind(this);
    this.deleteCard = this.deleteCard.bind(this);
  }

  submitTreasure(userInput) {
    let treasures = this.state.treasures;

    treasures.push(userInput)
    this.setState({
      treasures: treasures
    })

  }

  deleteCard(index) {
    let treasures = this.state.treasures;

    treasures.splice(index, 1);
    this.setState({
      treasures: treasures
    })
  }

  render() {
    console.log(this.state)
    return (
      <div className="App">
        <Header submitTreasure={ this.submitTreasure } />
        <Treasures treasures={ this.state.treasures }
                   deleteCard={ this.deleteCard } />
      </div>
    )
  }
}