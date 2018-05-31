import React, { Component } from 'react';

import Quantity from '../quantity/Quantity';
import DealBar from '../dealbar/DealBar';

import './dealsbreadinfo.scss';

class DealsBreadinfo extends Component {
  setActive = () => {
    this.props.setActive(this.props.index);
  };
  render() {
    const { aanbiedingen } = this.props.aanbiedingen;
    const { automaat } = this.props;

    return (
      <div className="white" onClick={this.setActive}>
        <h2>{this.props.actie}</h2>
        <h5>{aanbiedingen[this.props.index].adres}</h5>
        <div className="all_bread">
          <Quantity sort="Wit" />
          <Quantity sort="Grof" />
          <Quantity sort="Bruin" />
        </div>
        {this.props.activeBreadinfo && (
          <DealBar automaat={automaat} actie={this.props.actie} geldigTot={this.props.geldigTot} adres={aanbiedingen[this.props.index].adres} />
        )}
      </div>
    );
  }
};

export default DealsBreadinfo;
