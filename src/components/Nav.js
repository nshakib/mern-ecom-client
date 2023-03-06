import "../styles/App.css";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import logo from "../assets/images/BingLogo.svg";
import { signout } from "../actions/userActions";

function Nav() {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const dispatch = useDispatch();

  const burgerFunc = () => {
    const menu = document.getElementById("menu");
    menu.classList.toggle("active-menu");
  };
  const signoutHandler = () => {
    dispatch(signout());
  };

  return (
    <div className="header">
      <div className="container container-between header-body">
        <NavLink exact to="/" className="header-logo">
          <img src={logo} alt="logo" className="header-img" />
        </NavLink>

        <div id="menu" className="menu-wrapper active">
          <nav className="header-nav">
            <ul>
              <li className="header-nav-item">
                <NavLink
                  activeClassName="nav-active"
                  className="link"
                  exact
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li className="header-nav-item">
                <NavLink
                  activeClassName="nav-active"
                  className="link"
                  to="/catalog?model=All&price=All"
                >
                  Catalog
                </NavLink>
              </li>
              <li className="header-nav-item">
                <NavLink
                  activeClassName="nav-active"
                  className="link"
                  to="/cart"
                >
                  Cart
                  {cartItems.length > 0 && (
                    <span className="badge">{cartItems.length}</span>
                  )}
                </NavLink>
              </li>
            </ul>
          </nav>
          <div className="header-buttons">
            {userInfo ? (
              <div className="dropdown">
                <NavLink className="button-sign-in" to="#">
                  {userInfo.name} <i className="arrow"></i>
                </NavLink>
                <ul className="dropdown-content">
                  <NavLink to="#signout" onClick={signoutHandler}>
                    Sign Out
                  </NavLink>
                </ul>
              </div>
            ) : (
              <NavLink to="/signin" className="button-sign-in">
                Sign In
              </NavLink>
            )}

            {userInfo && userInfo.isAdmin && (
              <div className="dropdown">
                <NavLink className="button-sign-in" to="#admin">
                  Admin <i className="arrow"></i>
                </NavLink>
                <ul className="dropdown-content">
                  <NavLink to="/userList">
                    Users
                  </NavLink>
                </ul>
              </div>
            )}
          </div>
        </div>
        <div onClick={burgerFunc} id="burger" className="header-burger">
          <div className="line1"></div>
          <div className="line1"></div>
          <div className="line1"></div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
