import React, { Component } from 'react';

import Button from '../button/Button';
import BigInfo from '../biginfo/BigInfo';

import './dealbar.css';

class DealBar extends Component {
  render() {
    return (
      <div className="dealbar">
        <h2>2e brood gratis</h2>
        <h3>Bakker De Craecker</h3>
        <div className="all">
          <BigInfo sort="Wit" price="€1,5" />
          <BigInfo sort="Grof" price="€1,5" />
          <BigInfo sort="Bruin" price="€1,5" />
        </div>
        <Button onClickCallback={this.togglePopup}> Melding </Button>
      </div>
    );
  }
}

export default DealBar;
