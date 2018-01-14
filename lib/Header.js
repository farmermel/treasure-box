import React from 'react';
import '../styles/Header.scss';

export default class Header extends React.Component {
  constructor() {
    super();

    this.state = {
      title: '',
      body: ''
    }
  }

  onChange(e, input) {
    let stateObject = {
      [input]: e.target.value
    }
    this.setState(stateObject)
  }

  render() {
    return (
      <header className="Header">
        <h1>Treasure Box</h1>
        <div className="post-wrap"> 
          <input placeholder="Title" onChange={ (e) => this.onChange(e, 'title') } />
          <textarea placeholder="Treasure description" 
                    onChange={ (e) => this.onChange(e, 'body') } />
          <button onClick={ () => this.props.submitTreasure(this.state) }
                  className="submit">Cache</button>
        </div>
      </header>
    )
  }
}