import React from 'react';

import NavBar from '../../components/navbar/NavBar';
import UpperBar from '../../components/upperbar/UpperBar';

const Deal = props => {
  return (
    <div className="view">
      <NavBar />
      <UpperBar />
      <div className="blue" />
      <p> Deal </p>
    </div>
  );
};

export default Deal;
