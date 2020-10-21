import React, {Component} from 'react';
import {NavLink} from "react-router-dom";
import {FaSearch} from "react-icons/fa";

class HeaderBar extends Component {
  render() {
    return (
      <nav className='navbar navbar-expand-lg navbar-light bg-light fixed-top'>
        <div className='navbar-brand rounded'>
          <NavLink
            activeClassName="navbar-brand ml-2"
            className="navbar-brand ml-2"
            to="/" exact
          >
            Zoologico Cali
          </NavLink>
        </div>

        <div className="navbar-collapse collapse show" id="navbarCollapse">
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
            <li className="nav-item mr-auto">
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

          <form className="form-inline mt-2 mt-md-0">
            <div className="input-group-prepend">
              <span className="input-group-text" id="iconSearch">
                <FaSearch className="headerBar-icons" />
              </span>
            </div>
            <input className="form-control mr-sm-2" type="text" aria-describedby="iconSearch" />
          </form>
        </div>
      </nav>
    );
  }
}

export default HeaderBar;
