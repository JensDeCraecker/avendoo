import React from 'react';

import NavBar from '../../components/navbar/NavBar';
import UpperBar from '../../components/upperbar/UpperBar';
import DealBar from '../../components/dealbar/DealBar';

const Deal = props => {
  return (
    <div className="view">
      <NavBar />
      <UpperBar />
      <div className="blue" />
      <DealBar />
    </div>
  );
};

export default Deal;
