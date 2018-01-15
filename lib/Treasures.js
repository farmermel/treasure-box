import React from 'react';
import Treasure from './Treasure.js';
import PropTypes from 'prop-types';
import '../styles/Treasures.scss';

export default class Treasures extends React.Component {

  render() {
    return (
      <div className="Treasures">
      <input type="search"
             placeholder="Search"
             value={ this.props.search }
             onChange={ (e) => this.props.onChange(e, 'search') }
             className="search" />
        {
          this.props.treasures.map( (treasure, index) => {
            return (<Treasure details={ this.props.treasures[index] }
                             deleteCard={ this.props.deleteCard }
                             vote={ this.props.vote }
                             index={ index }
                             key={ index } />);
          })
          
        }
      </div>

    );
  }
}

Treasures.propTypes = {
  search: PropTypes.string,
  onChange: PropTypes.func,
  treasures: PropTypes.array,
  deleteCard: PropTypes.func,
  vote: PropTypes.func
};