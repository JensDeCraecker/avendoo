import React, { Component } from 'react';

import Button from '../button/Button';

// import './dealbar.css';

class DealBar extends Component {
  render() {
    return (
      <div className="dealbar">
        <h2>Lange Nieuwstraat</h2>
        <Button onClickCallback={this.togglePopup}> Melding </Button>
      </div>
    );
  }
}

export default DealBar;
