import React, { Component } from 'react';
import UpperBar from '../../components/upperbar/UpperBar';

import './Login.style.css';

class View extends Component {
  render() {
    return (
      <div className="view">
        <UpperBar />
        <div className="green" />
        <div className="blue" />
      </div>
    );
  }
}

export default View;
