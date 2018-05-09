import React from 'react';

import GoogleMapsContainer from '../../components/googlemapscontainer/GoogleMapsContainer';

const WhereBar = props => {
  return (
    <div className="infobar">
      <GoogleMapsContainer />
    </div>
  );
};

export default WhereBar;
