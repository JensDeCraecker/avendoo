import React from 'react';
import './upperbar.css';

import moment from 'moment';

import logo from '../../images/avendoo_logo.png';

const UpperBar = props => {
  const date = moment().format('LLLL');
  return (
    <div className="upperbar">
      <img src={logo} alt="avendoo_logo" className="logo" />
      <h6>{date}</h6>
    </div>
  );
};

export default UpperBar;
