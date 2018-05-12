import React from 'react';

import GoogleMapsContainerPlace from '../../components/googlemapscontainerplace/GoogleMapsContainerPlace';

const WhereBar = props => {
  return (
    <div className="infobar">
      <section className="wheregoogle">
        <GoogleMapsContainerPlace />
      </section>
    </div>
  );
};

export default WhereBar;
