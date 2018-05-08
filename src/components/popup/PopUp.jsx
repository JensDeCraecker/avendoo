import React from 'react';

import './popup.css';
import cross from '../../assets/images/cross.svg';

import Toggler from '../toggler/Toggler';

const PopUp = props => {
  return (
    <div className="popup">
      <div className="popup_inner">
        <h2>{props.text}</h2>
        <img src={cross} alt="close" className="close" onClick={props.closePopup} />
        <label htmlFor="probleem" classname="probleem">
          Probleem
        </label>
        <textarea type="text" />
        <label htmlFor="defect" className="defect">
          Defect
        </label>
        <Toggler />
      </div>
    </div>
  );
};

export default PopUp;
