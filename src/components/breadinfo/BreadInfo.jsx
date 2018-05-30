import React, { Component } from 'react';

import Quantity from '../quantity/Quantity';
import InfoBar from '../infobar/InfoBar';

import './breadinfo.css';

class Breadinfo extends Component {
  setActive = () => {
    this.props.setActive(this.props.index);
  };
  render() {
    const { automaat, items } = this.props;
    const { broden } = automaat;
    const aantalWit = broden.filter(brood => brood.soort === 'wit').length;
    const aantalGrof = broden.filter(brood => brood.soort === 'grof').length;
    const aantalBruin = broden.filter(brood => brood.soort === 'bruin').length;
    return (
      <div className="white" onClick={this.setActive}>
        <h2>{automaat.adres}</h2>
        <h5>{automaat.omschrijving}</h5>
        {automaat.broden.length && (
          <div className="all_bread">
            <Quantity sort="Wit" quantity={aantalWit} />
            <Quantity sort="Grof" quantity={aantalGrof} />
            <Quantity sort="Bruin" quantity={aantalBruin} />
          </div>
        )}
        {this.props.activeBreadinfo && (
          <InfoBar
            vendor={this.props.vendor}
            items={items}
            automaat={automaat}
            straat={this.props.straat}
            laatsteLevering={this.props.laatsteLevering}
            volgendeLevering={this.props.volgendeLevering}
          />
        )}
      </div>
    );
  }
}

export default Breadinfo;
