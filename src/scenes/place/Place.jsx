import React from 'react';

import UpperBar from '../../components/upperbar/UpperBar';
import NavBar from '../../components/navbar/NavBar';
import BlueBar from '../../components/bluebar/BlueBar';
import WhereBar from '../../components/wherebar/WhereBar';

import '../auth/Login.style.css';

const Place = props => {
  return (
    <div className="view">
      <NavBar />
      <UpperBar />
      <BlueBar />
      <WhereBar />
    </div>
  );
};

export default Place;
