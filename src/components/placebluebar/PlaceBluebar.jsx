import React from 'react';

const PlaceBlueBar = props => {
  return (
    <div className="blue">
      {props.automaten.automaten.map((item, i) => {
        return (
          <div key={i} className="white special">
            <h2>{item.adres}</h2>
          </div>
        );
      })}
    </div>
  );
};

export default PlaceBlueBar;
