import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import '../App.css';

class NavBar extends Component {
  render() {
    return (
      <div className="NavBar">
        <NavLink className="NavLink px-2 ml-2" to="/">
          Home
        </NavLink>

        <NavLink className="NavLink px-2 ml-2" to="/expenses">
          Expenses
        </NavLink>

        <NavLink className="NavLink px-2 ml-2" to="/categories">
          Categories
        </NavLink>

      </div>
    );
  }
}

export default NavBar;
