import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <div id="header-body">
        <h1 >{this.props.name}</h1>
      </div>
    );
  }
}

export default Header;
