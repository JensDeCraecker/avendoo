import React from 'react';

import NavBar from '../../components/navbar/NavBar';
import UpperBar from '../../components/upperbar/UpperBar';
import BlueBar from '../../components/bluebar/BlueBar';

const Favorite = props => {
  return (
    <div className="view">
      <NavBar />
      <UpperBar />
      <BlueBar />
      <p> Favoriten </p>
    </div>
  );
};

export default Favorite;
