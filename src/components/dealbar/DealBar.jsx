import React, { Component } from 'react';

import Button from '../button/Button';
import BigInfo from '../biginfo/BigInfo';
import PopUp from '../popup/PopUp';
import SmallInfo from '../smallinfo/SmallInfo';

import './dealbar.css';

class DealBar extends Component {
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
    const { automaat } = this.props;
    return (
      <div className="dealbar">
        <h2>{this.props.actie}</h2>
        <h3> {this.props.adres}</h3>
        <div className="all">
          <BigInfo sort="Wit" automaat={automaat} />
          <BigInfo sort="Grof" automaat={automaat} />
          <BigInfo sort="Bruin" automaat={automaat} />
        </div>
        <SmallInfo updated="Geldig tot" new={this.props.geldigTot} />
        <section className="google dealgoogle">{/* <GoogleMapsContainer automaat={automaat} /> */}</section>
        <Button onClickCallback={this.togglePopup} className="melding"> Melding </Button>
        {this.state.showPopup && (
          <PopUp text="Melding doorgeven" closePopup={this.togglePopup} className="test">
            <Button> INTREKKEN </Button>
            <p onClick={this.togglePopup}>ANNULEREN</p>
          </PopUp>
        )}
      </div>
    );
  }
}

export default DealBar;
