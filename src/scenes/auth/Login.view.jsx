import React, { Component } from 'react';
import UpperBar from '../../components/upperbar/UpperBar';

import NavBar from '../../components/navbar/NavBar';

import './Login.style.css';

class View extends Component {
  render() {
    return (
      <div className="view">
        <NavBar />
        <UpperBar />
        <div className="blue" />
      </div>
    );
  }
}

export default View;
