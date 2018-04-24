import React from 'react';

import UpperBar from '../../components/upperbar/UpperBar';
import NavBar from '../../components/navbar/NavBar';

import '../auth/Login.style.css';

const Place = props => {
  return (
    <div className="view">
      <NavBar />
      <UpperBar />
      <div className="blue" />
      <p> waar? </p>
    </div>
  );
};

export default Place;
