import React from 'react';
import './upperbar.scss';

import moment from 'moment';

import logo from '../../images/logo_ven.svg';

const UpperBar = props => {
  const date = moment().format('LLLL');
  return (
    <div className="upperbar">
      <img src={logo} alt="avendoo_logo" />
      <h6>{date}</h6>
    </div>
  );
};

export default UpperBar;
