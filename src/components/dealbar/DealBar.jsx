import React, { Component } from 'react';

import Button from '../button/Button';

import './dealbar.css';

class DealBar extends Component {
  render() {
    return (
      <div className="dealbar">
        <h2>2e brood gratis</h2>
        <h3>Bakker De Craecker</h3>
        <Button onClickCallback={this.togglePopup}> Melding </Button>
      </div>
    );
  }
}

export default DealBar;
