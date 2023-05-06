import React from "react";
import { NavLink } from 'react-router-dom'
import s from "./index.module.css";
import ScrollButton from "../ScrollButton";

function NavMenu() {
  return (
    <>
      <div className={s.containerNav}>
      <NavLink className={`${'colorBtn'} ${s.lineMain}`} to="/" activeClassName="active">
        Main
      </NavLink>
      <NavLink className={`${'colorBtn'} ${s.lineMain}`} to="/resume" activeClassName="active">
        Resume
      </NavLink>
      <NavLink className={`${'colorBtn'} ${s.lineMain}`} to="/projects" activeClassName="active">
        Projects
      </NavLink>
      <NavLink className="colorBtn" to="/contacts" activeClassName="active">
        Contacts
      </NavLink>

      <ScrollButton/>
      </div>
    </>
  );
}

export default NavMenu;
