import React from 'react';

import NavBar from '../../components/navbar/NavBar';
import UpperBar from '../../components/upperbar/UpperBar';
import BlueBar from '../../components/bluebar/BlueBar';
import InfoBar from '../../components/infobar/InfoBar';

const Bread = props => {
  return (
    <div className="view">
      <NavBar />
      <UpperBar />
      <BlueBar />
      <InfoBar />
    </div>
  );
};

export default Bread;
