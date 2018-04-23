import React from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.css';

const NavBar = props => {
  return (
    <div className="app-header">
      <h2>Gebruiker</h2>
      <NavLink to="/brood" className="bread">
        Brood
      </NavLink>
      <NavLink to="/waar"> Waar? </NavLink>
      <NavLink to="/favorieten"> Favorieten </NavLink>
      <NavLink to="/aanbiedingen"> Aanbiedingen </NavLink>
    </div>
  );
};

export default NavBar;
