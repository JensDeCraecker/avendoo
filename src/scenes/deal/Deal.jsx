import React from 'react';

import NavBar from '../../components/navbar/NavBar';
import UpperBar from '../../components/upperbar/UpperBar';
import DealsBluebar from '../../components/dealsbluebar/DealsBluebar';
import DealBar from '../../components/dealbar/DealBar';

const Deal = props => {
  return (
    <div className="view">
      <NavBar />
      <UpperBar />
      <DealsBluebar />
      <DealBar />
    </div>
  );
};

export default Deal;
