import React from 'react';
import Treasure from './Treasure.js';
import '../styles/Treasures.scss';

export default class Treasures extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="Treasures">
      <input type="search" placeholder="Search" className="search" />
        {
          this.props.treasures.map( (treasure, index) => {
            return <Treasure details={ this.props.treasures[index] }
                             deleteCard={ this.props.deleteCard }
                             vote={ this.props.vote }
                             index={ index }
                             key={ index } />
          })
        }
      </div>

    )
  }
}