import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

class HeaderBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light transparent-nav fixed-top">
        {/* Brand Logo */}
        <div className="text-left">
          <NavLink
            activeClassName="navbar-brand mx-auto rounded pl-2 pr-2 active"
            className="navbar-brand mx-auto rounded pl-2 pr-2"
            to="/"
            exact
          >
            Zoologico Cali
          </NavLink>
        </div>

        {/* Collapse button */}
        <button
          className="navbar-toggler navbar-toggler-right collapsed"
          type="button"
          data-toggle="collapse"
          data-target="#mainNavbarToggle"
          aria-controls="mainNavbarToggle"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Collapse menu */}
        <div className="collapse navbar-collapse" id="mainNavbarToggle">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            {/* Animals option */}
            <li className="nav-item mr-auto">
              <NavLink
                activeClassName="nav-link ml-2 mt-2 active"
                className="nav-link ml-2 mt-2"
                to="/animals"
                exact
              >
                Animales
              </NavLink>
            </li>

            {/* Quienes somos option */}
            <li className="nav-item mr-auto">
              <NavLink
                activeClassName="nav-link ml-2 mt-2 active"
                className="nav-link ml-2 mt-2"
                to="/who"
                exact
              >
                ¿Quienes somos?
              </NavLink>
            </li>

            {/* Boleteria options */}
            <li className="nav-item mr-auto">
              <NavLink
                activeClassName="nav-link ml-2 mt-2 active"
                className="nav-link ml- mt-2"
                to="/boletas"
                exact
              >
                Boleteria
              </NavLink>
            </li>
            {/* Clases virtuales option */}
            <li className="nav-item mr-auto">
              <NavLink
                activeClassName="nav-link ml-2 mt-2 active"
                className="nav-link ml- mt-2"
                to="/clasesVirtuales"
                exact
              >
                Clases Virtuales
              </NavLink>
            </li>
          </ul>

          {/* Search in the input */}
          <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
            />
            <button className="btn btn-primary my-2 my-sm-0" type="submit">
              <FaSearch />
            </button>
          </form>
        </div>
      </nav>
    );
  }
}

export default HeaderBar;
