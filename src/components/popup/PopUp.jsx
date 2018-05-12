import React, { Component } from 'react';

import './popup.css';
import cross from '../../assets/images/cross.svg';

import Toggler from '../toggler/Toggler';
import Button from '../button/Button';
import SendPopUp from '../sendpopup/SendPopUp';

class PopUp extends Component {
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
      <div className="popup">
        <div className="popup_inner">
          <h2>{this.props.text}</h2>
          <img src={cross} alt="close" className="close" onClick={this.props.closePopup} />
          <label htmlFor="probleem" className="probleem">
            Probleem
          </label>
          <textarea type="text" />
          <label htmlFor="defect" className="defect">
            Defect
          </label>
          <section>
            <Toggler />
          </section>
          <Button onClickCallback={this.togglePopup}> Verzenden </Button>
          {this.state.showPopup && <SendPopUp text="Verzonden" closePopup={this.togglePopup} className="test" />}
        </div>
      </div>
    );
  }
}

export default PopUp;
