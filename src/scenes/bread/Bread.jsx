import React from 'react';

import NavBar from '../../components/navbar/NavBar';
import UpperBar from '../../components/upperbar/UpperBar';

const Bread = props => {
  return (
    <div className="view">
      <NavBar />
      <UpperBar />
      <div className="blue" />
      <p> brood </p>
    </div>
  );
};

export default Bread;
