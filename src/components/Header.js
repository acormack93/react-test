import React, { Component } from 'react';
import './Header.css'

class Header extends Component {


  handleClick() {
    window.open("https://cormackwiddop.com",'_blank');
  }

  render() {
    return (
      <div className="Header">
        <h1>{this.props.appName}</h1>
        <div>Written by: <span> </span>
          <b testid='author-link' onClick={this.handleClick}>
            Alex Cormack-Widdop
          </b>
        </div>
      </div>
    );
  }
}

export default Header