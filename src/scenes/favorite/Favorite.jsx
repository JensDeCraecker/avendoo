import React from 'react';

import NavBar from '../../components/navbar/NavBar';
import UpperBar from '../../components/upperbar/UpperBar';

const Favorite = props => {
  return (
    <div className="view">
      <NavBar />
      <UpperBar />
      <div className="blue" />
      <p> Favoriten </p>
    </div>
  );
};

export default Favorite;
