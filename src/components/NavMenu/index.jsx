import React, { useState } from "react";
import { NavLink } from 'react-router-dom'
import s from "./index.module.css";
import ScrollButton from "../ScrollButton";

function NavMenu() {

  const [active, setActive] = useState(false);

  const activeBurger = () => {
    setActive(!active);
  };

  const closeNavMenu = () => {
    setActive(false);
  };

  return (
    <>
      <div onClick={activeBurger} className={`${s.btn_burger} ${active ? '': s.active }`}>
        <span className={`${s.line} ${active ? s.active : '' }`}></span>
        <span className={`${s.line1} ${active ? s.active : '' }`}></span>
        <span className={`${s.line2} ${active ? s.active : '' }`}></span>
       </div>

      <div className={`${s.containerNav} ${active ? s.active : ""}`}>
        <NavLink 
          className={`${'colorBtn'} ${s.lineMain}`} to="/" activeClassName="active"
          onClick={closeNavMenu}>
          Main
        </NavLink>
        <NavLink 
          className={`${'colorBtn'} ${s.lineMain}`} to="/resume" activeClassName="active"
          onClick={closeNavMenu}>
          Resume
        </NavLink>
        <NavLink 
          className={`${'colorBtn'} ${s.lineMain}`} to="/projects" activeClassName="active"
          onClick={closeNavMenu}>
          Projects
        </NavLink>
        <NavLink 
          className="colorBtn" to="/contacts" activeClassName="active"
          onClick={closeNavMenu}>
          Contacts
        </NavLink>

        <ScrollButton/>
      </div>
     
    </>
  );
}

export default NavMenu;





// .btn_burger {
//   width: 50px;
//   height: 50px;
//   margin-top: 20px;
//   margin-right: 20px;
//   position: fixed;
//   top: 0;
//   right: 0;
//   z-index: 10000;
//   animation: pulse 2s infinite;
// }