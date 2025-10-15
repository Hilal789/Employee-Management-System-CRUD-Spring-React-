import React from "react";
import { Link, NavLink } from "react-router-dom";

const HeaderComponent = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow-lg">
        <div className="container">
          <Link className="navbar-brand fw-bold" to="/">
            Employee Management System
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/employees"
                  end
                  activeclassname="active"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/employees/add-employee"
                  activeclassname="active"
                >
                  Add Employee
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default HeaderComponent;
