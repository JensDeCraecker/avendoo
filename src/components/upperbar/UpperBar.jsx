import React from 'react';
import './upperbar.scss';

import logo from '../../images/logo.svg';

const UpperBar = props => {
  return (
    <div className="upperbar">
      <img src={logo} alt="avendoo_logo" />
    </div>
  );
};

export default UpperBar;
