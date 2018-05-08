import React from 'react';

import UpperBar from '../../components/upperbar/UpperBar';
import NavBar from '../../components/navbar/NavBar';
import BlueBar from '../../components/bluebar/BlueBar';

import '../auth/Login.style.css';

const Place = props => {
  return (
    <div className="view">
      <NavBar />
      <UpperBar />
      <BlueBar />
      <p> waar? </p>
    </div>
  );
};

export default Place;
