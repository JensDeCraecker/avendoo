import React from 'react';

import Quantity from '../quantity/Quantity';

import './breadinfo.css';

const Breadinfo = props => {
  return (
    <div className="white">
      <h2>{props.straat}</h2>
      <h5>{props.bakker}</h5>
      <div className="all_bread">
        <Quantity sort="Wit" quantity={props.wit_quantity} />
        <Quantity sort="Grof" quantity={props.grof_quantity} />
        <Quantity sort="Bruin" quantity={props.bruin_quantity} />
      </div>
    </div>
  );
};

export default Breadinfo;
