import "../styles/App.css";
import React from "react";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <nav className="footer-nav">
          <ul className="footer-soc-network-list">
            <li>
              <div
                className="footer-network facebook"
                href="https://coolors.co/fcb97d-edd892-9db4c0-5c6b73-253237"
              ></div>
            </li>
            <li>
              <div
                className="footer-network instagram"
                href="https://coolors.co/fcb97d-edd892-9db4c0-5c6b73-253237"
              ></div>
            </li>
            <li>
              <div
                className="footer-network twitter"
                href="https://coolors.co/fcb97d-edd892-9db4c0-5c6b73-253237"
              ></div>
            </li>
          </ul>
          <ul className="footer-list">
            <li className="footer-nav-item">
              <NavLink
                activeClassName="footer-nav-active"
                className="footer-nav-link"
                exact
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li className="footer-nav-item">
              <NavLink
                activeClassName="footer-nav-active"
                className="footer-nav-link"
                to="/catalog"
              >
                Catalog
              </NavLink>
            </li>
            <li className="footer-nav-item">
              <NavLink
                activeClassName="footer-nav-active"
                className="footer-nav-link"
                to="/cart"
              >
                Cart
              </NavLink>
            </li>
          </ul>
          <ul className="footer-list">
            <li className="footer-nav-item">
              <NavLink
                activeClassName="footer-nav-active"
                className="footer-nav-link"
                exact
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li className="footer-nav-item">
              <NavLink
                activeClassName="footer-nav-active"
                className="footer-nav-link"
                to="/catalog"
              >
                Catalog
              </NavLink>
            </li>
            <li className="footer-nav-item">
              <NavLink
                activeClassName="footer-nav-active"
                className="footer-nav-link"
                to="/cart"
              >
                Cart
              </NavLink>
            </li>
          </ul>
        </nav>
        <div className="footer-text">
          <strong>Bing</strong> e-commerce App.
        </div>
      </div>
    </div>
  );
}

export default Footer;
