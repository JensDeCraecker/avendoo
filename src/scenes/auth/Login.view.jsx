import React, { Component } from 'react';

import NavBar from '../../components/navbar/NavBar';

import './Login.style.css';

class View extends Component {
  render() {
    return (
      <div className="view">
        <div className="red" />
        <NavBar />
        <div className="blue" />
      </div>
    );
  }
}

export default View;
