import React, { Component } from 'react';

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
    return (
      <div className="infobar">
        <h2>{this.props.straat}</h2>
        <section className="all">
          <BigInfo sort="Wit" price="€1,5" />
          <BigInfo sort="Grof" price="€1,5" />
          <BigInfo sort="Bruin" price="€1,5" />
        </section>
        <section className="all_info">
          <SmallInfo updated="Laatst aangevuld" new="test" />
          <SmallInfo updated="Nieuw brood verwacht" new="Dinsdag 8 mei 2018" />
        </section>
        <section className="google">
          <GoogleMapsContainer />
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
