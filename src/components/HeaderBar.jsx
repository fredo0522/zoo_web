import React, {Component} from 'react';
// import {Link} from 'react-router-dom';
// import logo from './images/zoo_logo.jpg'
// import style from './HeaderBar.module.css'
import {NavLink} from "react-router-dom";

class HeaderBar extends Component {
  render() {
    return (
      <nav className='navbar navbar-expand-lg navbar-light bg-light fixed-top'>
        <div className='navbar-brand'>
          <NavLink
            activeClassName="navbar-brand"
            className="navbar-brand"
            to="/" exact
          >
            Zoologico Cali
          </NavLink>
        </div>

        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <div className="nav-link">
              <NavLink
                activeClassName='nav-item active'
                className='nav-link'
                to="/animals" exact
              >
                Animales
              </NavLink>
            </div>
          </li>
          <li className="nav-item">
            <div className="nav-link">
              <NavLink
                activeClassName='nav-item active'
                className='nav-link'
                to='/who'
                exact
              >
                ¿Quienes somos?
              </NavLink>
            </div>
          </li>
        </ul>
      </nav>
    );
  }
}

export default HeaderBar;
