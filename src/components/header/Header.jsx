import React from "react";
import "./header.css";
import CTA from "./CTA";
import ME from "../../assets/me.png";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>你好，我是</h5>
        <h2>雷诺</h2>
        <h5 className="text-light">全栈工程师</h5>
        <CTA />

        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a href="#contact" className="scroll__down">
          向下划动
        </a>

        <HeaderSocials />
      </div>
    </header>
  );
};

export default Header;
