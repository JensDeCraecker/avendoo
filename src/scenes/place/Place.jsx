import React from 'react';

import './place.css';

import UpperBar from '../../components/upperbar/UpperBar';
import NavBar from '../../components/navbar/NavBar';
import WhereBar from '../../components/wherebar/WhereBar';

import '../auth/Login.style.css';

const Place = props => {
  return (
    <div className="view">
      <NavBar />
      <UpperBar />
      <div className="blue" />
      <WhereBar />
    </div>
  );
};

export default Place;
