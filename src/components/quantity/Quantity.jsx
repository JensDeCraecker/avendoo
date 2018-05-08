import React from 'react';

import './quantity.css';

const Quantity = props => {
  return (
    <div className="quantity">
      <p className="icon-sort">{props.sort}</p>
      <p className="number">{props.quantity}</p>
    </div>
  );
};

export default Quantity;
