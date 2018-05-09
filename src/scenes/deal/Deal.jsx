import React from 'react';

import NavBar from '../../components/navbar/NavBar';
import UpperBar from '../../components/upperbar/UpperBar';
import BlueBar from '../../components/bluebar/BlueBar';
import DealBar from '../../components/dealbar/DealBar';

const Deal = props => {
  return (
    <div className="view">
      <NavBar />
      <UpperBar />
      <BlueBar />
      <DealBar />
    </div>
  );
};

export default Deal;
