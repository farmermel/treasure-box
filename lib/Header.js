import React from 'react';
import '../styles/Header.scss';

export default class Header extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <header className="Header"> Header! 
        <input placeholder="Submit treasure" />
        <button>Cache</button>
      </header>
    )
  }
}