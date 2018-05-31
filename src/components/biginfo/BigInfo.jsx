import React from 'react';

import './biginfo.css';

const BigInfo = props => {
  if (props.sort === 'Wit') {
    return (
      <div className="biginfo">
        <p className="icon-sort">{props.sort}</p>
        <p className="price">€{props.automaat.prijsWit}</p>
      </div>
    );
  }
  if (props.sort === 'Grof') {
    return (
      <div className="biginfo">
        <p className="icon-sort">{props.sort}</p>
        <p className="price">€{props.automaat.prijsGrof}</p>
      </div>
    );
  }
  if (props.sort === 'Bruin') {
    return (
      <div className="biginfo">
        <p className="icon-sort">{props.sort}</p>
        <p className="price">€{props.automaat.prijsBruin}</p>
      </div>
    );
  }

};

export default BigInfo;
