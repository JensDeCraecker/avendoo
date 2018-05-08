import React from 'react';

import './biginfo.css';

const BigInfo = props => {
  return (
    <div className="biginfo">
      <p className="icon-sort">{props.sort}</p>
      <p className="price">{props.price}</p>
    </div>
  );
};

export default BigInfo;
