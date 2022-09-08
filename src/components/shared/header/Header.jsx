import React from "react";
import { NavLink } from "react-router-dom";
import "./styles.css";
const Header = () => {
  return (
    <header className="header">
      <NavLink to="/">
        <h1 className="header__logo">e-commerce</h1>
      </NavLink>

      <ul className="header__list">
        <p></p>
        <li className="header__item">
          <NavLink
            className={({ isActive }) => (isActive ? "active-link" : "")}
            to="/login"
          >
            <i className="fa-regular fa-user"></i>
          </NavLink>
        </li>
        <p></p>
        <li className="header__item">
          <NavLink
            className={({ isActive }) => (isActive ? "active-link" : "")}
            to="/purchases"
          >
            <i className="fa-solid fa-box-archive"></i>
          </NavLink>{" "}
        </li>
        <p></p>
        <li className="header__item">
          <NavLink
            className={({ isActive }) => (isActive ? "active-link" : "")}
            to="/cart"
          >
            <i className="fa-solid fa-cart-shopping"></i>
          </NavLink>{" "}
        </li>
      </ul>
    </header>
  );
};

export default Header;
