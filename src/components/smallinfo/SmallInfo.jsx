import React from 'react';

import './smallinfo.css';

const SmallInfo = props => {
  return (
    <div className="smallinfo">
      <p className="updated">{props.updated}</p>
      <p className="new">{props.new}</p>
    </div>
  );
};

export default SmallInfo;
