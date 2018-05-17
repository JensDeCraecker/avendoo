import React from 'react';
import moment from 'moment';

import './dealsbluebar.css';

import DealsBreadinfo from '../dealsbreadinfo/DealsBreadinfo';

const DealsBluebar = props => {
  return (
    <div className="blue">
      <span className="fa fa-search" />
      <input />
      {props.aanbiedingen.aanbiedingen.map((item, i) => {
        const date = moment(item.geldigTot).format('DD/MM/YYYY');
        return <DealsBreadinfo key={i} actie={item.actie} geldigTot={date} />;
      })}
    </div>
  );
};

export default DealsBluebar;
