import React from "react";
import s from "./index.module.css";
import { IoIosPhonePortrait } from "react-icons/io";
import { CiMail } from "react-icons/ci";
import { BsInstagram, BsLinkedin, BsFacebook, BsGithub } from "react-icons/bs";

function Footer() {
  return (
    <>
      <div className={s.container_Footer}>
        <p>{<IoIosPhonePortrait/>}: +48 57 537 6296</p>
        <p>
          <a href="kaloshaviktor1@mail.com"><CiMail/></a> : kaloshaviktor1@mail.com
        </p>
        <div className={s.sotial_logo}>
          <div className={s.logo}>
            <a href="https://www.instagram.com/kalosha_viktar/" target="blank">
              <BsInstagram style={{ color: "deeppink" }} />
            </a>
            <a href="https://www.linkedin.com/in/viktar-kalosha-1b8457151" target="blank">
              <BsLinkedin style={{ color: "dodgerblue" }} />
            </a>
            <a href="https://www.facebook.com/ViktarKalosha" target="blank">
              <BsFacebook style={{ color: "blue"}} />
            </a>
            <a href="https://github.com/Viktarprof" target="blank">
              <BsGithub  />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
