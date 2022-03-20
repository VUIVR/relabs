import React from "react";
import { NavLink} from "react-router-dom";

import st from "./Navbar.module.css";

function Navbar() {

  return (
    <nav className={st.nav}>      
      <NavLink to="/" className={({isActive})=>isActive ? `${st.activeLink}`:''}>Главная</NavLink>
      <NavLink to="/login" className={({isActive})=>isActive ? `${st.activeLink}`:''}>Логин</NavLink>
      <NavLink to="/shop" className={({isActive})=>isActive ? `${st.activeLink}`:''}>Магазин</NavLink> 
    </nav>
  );
}

export default Navbar;
