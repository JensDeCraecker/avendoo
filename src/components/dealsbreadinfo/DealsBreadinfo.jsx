import React from 'react';

import Quantity from '../quantity/Quantity';

import './dealsbreadinfo.scss';

const DealsBreadinfo = props => {
  return (
    <div className="white">
      <h2>{props.actie}</h2>
      <h5>Geldig tot: {props.geldigTot}</h5>
      <div className="all_bread">
        <Quantity sort="Wit" />
        <Quantity sort="Grof" />
        <Quantity sort="Bruin" />
      </div>
    </div>
  );
};

export default DealsBreadinfo;
