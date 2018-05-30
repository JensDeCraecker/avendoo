import React, { Component } from 'react';
import moment from 'moment';

import './dealsbluebar.css';

import DealsBreadinfo from '../dealsbreadinfo/DealsBreadinfo';

class DealsBluebar extends Component {
  render() {
    return (
      <div className="blue">
        <span className="fa fa-search" />
        <input />
        {this.props.aanbiedingen.aanbiedingen.map((automaat, i) => {
          const date = moment(automaat.geldigTot).format('DD/MM/YYYY');
          return <DealsBreadinfo key={i} automaat={automaat} actie={automaat.actie} geldigTot={date} />;
        })}
      </div>
    );
  }
}

export default DealsBluebar;
