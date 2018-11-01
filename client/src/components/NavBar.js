import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class NavBar extends Component {
  render() {
    return (
      <div className="NavBar">
        <NavLink className="NavLink" to="/">Home</NavLink>
        <NavLink className="NavLink" to="/expenses">Expenses</NavLink>
        </div>
    );
  };
};

export default NavBar;
