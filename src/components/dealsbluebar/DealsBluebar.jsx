import React from 'react';

import './dealsbluebar.css';

import DealsBreadinfo from '../dealsbreadinfo/DealsBreadinfo';

const DealsBluebar = props => {
  return (
    <div className="blue">
      <input />
      <DealsBreadinfo actie="2e brood gratis" bakker="Bakker De Craecker" />
      <DealsBreadinfo actie="1 kopen 1 gratis" bakker="Bakke Wouters" />
      <DealsBreadinfo actie="10% korting" bakker="Bakker Janssens" />
      <DealsBreadinfo actie="Volgende keer gratis" bakker="Bakker Verheyen" />
      <DealsBreadinfo actie="200g extra" bakker="Bakker Van Mol" />
    </div>
  );
};

export default DealsBluebar;
