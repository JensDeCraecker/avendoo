import React, { Component } from 'react';

import './sendpopup.css';
import cross from '../../assets/images/cross.svg';

class SendPopUp extends Component {
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
      <div className="sendpopup">
        <div className="sendpopup_inner">
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130.2 130.2">
            <circle className="path circle" fill="none" stroke="#28394f" strokeWidth="6" strokeMiterlimit="10" cx="65.1" cy="65.1" r="62.1" />
            <polyline className="path check" fill="none" stroke="#4a4a4a" strokeWidth="6" strokeLinecap="round" strokeMiterlimit="10" points="100.2,40.2 51.5,88.8 29.8,67.5 " />
          </svg>
          <p className="success">Verzonden!</p>

          <img src={cross} alt="close" className="close" onClick={this.props.closePopup} />
        </div>
      </div>
    );
  }
}

export default SendPopUp;
