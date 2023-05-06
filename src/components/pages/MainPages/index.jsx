import React from "react";
import s from "./index.module.css";
import photo from './media/photo.png'
import { NavLink } from "react-router-dom";


function MainPages() {
  return (
    <>
      <div className={s.containerMain}>
        <img width={350}  src={photo} alt="my_photo"/>
        <div className={s.infoText}>
          <p>My name is Victor and I specialize in working with HTML, CSS, JavaScript, and React.</p>
          <p>In programming, I am passionate about the ability to create, constant development, and the end result of my work. I strive to use advanced technologies and methods to create products that meet modern requirements. I am an ambitious person with a great desire to learn and grow. I am ready to work in a team and share my knowledge to achieve common goals and implement high-level projects.</p>
          <p>In addition to my passion for development, I also enjoy learning about new cultures and meeting new people during my travels.</p>
          <p>I believe that this experience helps broaden my horizons and inspires new ideas for my work as a developer. I am happy to continue learning and growing in my career as a Front End developer. You can find out more about me in the RESUME section.</p>

          <div className={s.nav_btn}>
          <NavLink to={"/resume"}>Resume</NavLink>
          <NavLink to={"/projects"}>Projects</NavLink>
          <NavLink to={"/contacts"}>Contacts</NavLink>
          </div>
        </div>
      </div>
    </>
  );
}

export default MainPages;
