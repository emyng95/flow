import React from "react";
import { NavLink } from "react-router-dom";
import appRoutes from "../shared/appRoutes";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div>
      <nav className="navbar fixed-top navbar-expand-lg navbar-light">
        <div className="container">
          <NavLink className="navbar-brand" to={appRoutes.home}>
            {/* <img src={Logo} alt="logo" /> */}
            
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto ml-auto">
              <li className="nav-item">
                <NavLink className="nav-link" to={appRoutes.home} exact>
                  Flow.
                </NavLink>
              </li>
              {/* <li className="nav-item">
                <NavLink className="nav-link" to={appRoutes.quiz}>
                  Quiz
                </NavLink>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
