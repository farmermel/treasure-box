import React from 'react';
import '../styles/Header.scss';

export default class Header extends React.Component {
  render() {
    return (
      <header className="Header">
        <h1>Treasure Box</h1>
        <div className="post-wrap"> 
          <input placeholder="Title"
                 value={ this.props.data.title } 
                 onChange={ (e) => this.props.onChange(e, 'title') } />
          <textarea placeholder="Treasure description" 
                    value={ this.props.data.body }
                    onChange={ (e) => this.props.onChange(e, 'body') } />
          <button onClick={ () => this.props.submitTreasure() }
                  className="submit">Cache</button>
        </div>
      </header>
    )
  }
}