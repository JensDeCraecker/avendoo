import React, { Component } from 'react';

import Quantity from '../quantity/Quantity';
import InfoBar from '../infobar/InfoBar';

import './breadinfo.css';

class Breadinfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPopup: false,
    };
  }
  togglePopup = () => {
    this.setState({
      showPopup: !this.state.showPopup,
    });
  };
  render() {
    console.log(this.props.items.items.length);
    return (
      <div className="white" onClick={this.togglePopup}>
        <h2>{this.props.straat}</h2>
        <h5>{this.props.bakker}</h5>
        <div className="all_bread">
          <Quantity sort="Wit" quantity={this.props.wit_quantity} />
          <Quantity sort="Grof" quantity={this.props.grof_quantity} />
          <Quantity sort="Bruin" quantity={this.props.bruin_quantity} />
        </div>
        {this.state.showPopup && (
          <InfoBar vendor={this.props.vendor} items={this.props.items} straat={this.props.straat} laatsteLevering={this.props.laatsteLevering} volgendeLevering={this.props.volgendeLevering} />
        )}
      </div>
    );
  }
}

export default Breadinfo;
