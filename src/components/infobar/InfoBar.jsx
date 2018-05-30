import React, { Component } from 'react';
import moment from 'moment';

import BigInfo from '../biginfo/BigInfo';
import SmallInfo from '../smallinfo/SmallInfo';
import Button from '../button/Button';
import GoogleMapsContainer from '../googlemapscontainer/GoogleMapsContainer';
import PopUp from '../popup/PopUp';

import './infobar.css';

class InfoBar extends Component {
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
    const laatsteLevering = moment(this.props.automaat.laatsteLevering).format('DD/MM/YYYY');
    const volgendeLevering = moment(this.props.automaat.volgendeLevering).format('DD/MM/YYYY');
    const { automaat, items } = this.props;
    return (
      <div className="infobar">
        <h2>{this.props.automaat.adres}</h2>
        <section className="all">
          <BigInfo automaat={automaat} />
          <BigInfo automaat={automaat} />
          <BigInfo automaat={automaat} />
        </section>
        <section className="all_info">
          <SmallInfo updated="Laatst aangevuld" new={laatsteLevering} />
          <SmallInfo updated="Nieuw brood verwacht" new={volgendeLevering} />
        </section>
        <section className="google">
          <GoogleMapsContainer automaat={automaat} />
        </section>
        <Button onClickCallback={this.togglePopup}> Melding </Button>
        {this.state.showPopup && (
          <PopUp text="Melding aangeven" closePopup={this.togglePopup} className="test">
            <Button> INTREKKEN </Button>
            <p onClick={this.togglePopup}>ANNULEREN</p>
          </PopUp>
        )}
      </div>
    );
  }
}

export default InfoBar;
