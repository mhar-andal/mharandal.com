import React, { Component } from 'react';

export default class Header extends Component {
  render() {
    const insideStyles = {
      background: 'white',
      padding: 20,
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%,-50%)'
    };
    return (
      <div className="header">
        <div className="header header-background-image" />
        <div style={insideStyles}>
          <div>Mhar Andal</div>
          <div>Mhar Andal</div>
        </div>
      </div>
    );
  }
}
