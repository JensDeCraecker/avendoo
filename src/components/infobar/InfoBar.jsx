import React, { Component } from 'react';

import BigInfo from '../biginfo/BigInfo';
import SmallInfo from '../smallinfo/SmallInfo';
import Button from '../button/Button';
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
        <h2>Lange Nieuwstraat</h2>
        <div className="all">
          <BigInfo sort="Wit" price="€1,5" />
          <BigInfo sort="Grof" price="€1,5" />
          <BigInfo sort="Bruin" price="€1,5" />
        </div>
        <div className="all_info">
          <SmallInfo updated="Laatst aangevuld" new="Dinsdag 7 mei 2018" />
          <SmallInfo updated="Nieuw brood verwacht" new="Dinsdag 8 mei 2018" />
        </div>
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