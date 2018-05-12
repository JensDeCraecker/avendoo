import React from 'react';

import BreadInfo from '../breadinfo/BreadInfo';

import './bluebar.css';

const BlueBar = props => {
  return (
    <div className="blue">
      <span className="fa fa-search" />
      <input />
      <BreadInfo straat="Lange Nieuwstraat" bakker="Bakker De Craecker" wit_quantity="3" grof_quantity="6" bruin_quantity="8" />
      <BreadInfo straat="BelgiëLei" bakker="Bakker Wouters" wit_quantity="1" grof_quantity="4" bruin_quantity="2" />
      <BreadInfo straat="Kammenstraat" bakker="Bakker Janssens" wit_quantity="4" grof_quantity="1" bruin_quantity="1" />
      <BreadInfo straat="Ellermanstraat" bakker="Bakker Van Mol" wit_quantity="8" grof_quantity="3" bruin_quantity="8" />
    </div>
  );
};

export default BlueBar;
