import React from 'react';

import NavBar from '../../components/navbar/NavBar';
import UpperBar from '../../components/upperbar/UpperBar';
import BlueBar from '../../components/bluebar/BlueBar';

const Deal = props => {
  return (
    <div className="view">
      <NavBar />
      <UpperBar />
      <BlueBar />
      <p> Deal </p>
    </div>
  );
};

export default Deal;
