import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <div>
        {this.props.name}
      </div>
    );
  }
}

export default Header;
