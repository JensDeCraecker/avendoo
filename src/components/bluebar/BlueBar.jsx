import React from 'react';

import BreadInfo from '../breadinfo/BreadInfo';

import './bluebar.css';

const BlueBar = props => {
  return (
    <div className="blue">
      <span className="fa fa-search" />
      <input />
      {props.automaten.automaten.map((item, i) => {
        return <BreadInfo key={i} straat={item.adres} bakker={item.omschrijving} wit_quantity="" grof_quantity="" bruin_quantity="" />;
      })}
    </div>
  );
};

export default BlueBar;
