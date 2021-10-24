import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class NavBar extends Component {
  render() {
    return (
      <div
        className="navbar navbar-expand-lg navbar-light bg-light mt-n5 mb-4"
        id="navbarNavAltMarkup"
      >
        <div className="navbar-nav">
          <a className="navbar-brand" href="/">
            Vidly
          </a>
          <NavLink className="nav-item nav-link" to="./movies">
            Movies
          </NavLink>
          <NavLink className="nav-item nav-link" to="./customers">
            Customers
          </NavLink>
          <NavLink className="nav-item nav-link" to="./rentals">
            Rentals
          </NavLink>
          <NavLink className="nav-item nav-link" to="./login">
            Login
          </NavLink>
          <NavLink className="nav-item nav-link" to="./register">
            Register
          </NavLink>
        </div>
      </div>
    );
  }
}

export default NavBar;
