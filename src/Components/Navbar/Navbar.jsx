import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <NavLink to="/">Главная</NavLink>
      <NavLink to="/login">Логин</NavLink>
      <NavLink to="/shop">Магазин</NavLink>
    </nav>
  );
}

export default Navbar;
