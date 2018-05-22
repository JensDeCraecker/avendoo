import React from 'react';

import BreadInfo from '../breadinfo/BreadInfo';

import './bluebar.css';

const BlueBar = props => {
  return (
    <div className="blue">
      <span className="fa fa-search" />
      <input />
      {props.automaten.automaten.map((item, i) => {
        return (
          <BreadInfo
            key={i}
            straat={item.adres}
            bakker={item.omschrijving}
            laatsteLevering={item.laatsteLevering}
            volgendeLevering={item.volgendeLevering}
            wit_quantity=""
            grof_quantity=""
            bruin_quantity=""
            vendor={props.automaten}
          />
        );
      })}
    </div>
  );
};

export default BlueBar;
