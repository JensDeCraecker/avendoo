import React from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.css';

const NavBar = props => {
  return (
    <div className="app-header">
      <h2>Gebruiker</h2>
      <NavLink to="/" className="icon-bread">
        Brood
      </NavLink>
      <NavLink to="/waar" className="icon-place">
        Waar?
      </NavLink>
      <NavLink to="/aanbiedingen" className="icon-deal">
        Aanbiedingen
      </NavLink>
    </div>
  );
};

export default NavBar;
