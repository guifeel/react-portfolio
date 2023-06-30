import React from "react";
import "./about.css";
import ME from "../../assets/me-about.jpg";
import { FaAward } from "react-icons/fa";

const About = () => {
  return (
    <section id="about">
      <h5>认识一下</h5>
      <h2>关于我</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>经验</h5>
              <small>3年+工作经验</small>
            </article>
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>客户</h5>
              <small>200+ 人士</small>
            </article>
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>项目</h5>
              <small>20+项目</small>
            </article>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem,
            excepturi deleniti? Asperiores eaque recusandae reiciendis, amet
            magni non molestiae autem.
          </p>
          <a href="#contact" className="btn btn-primary">
            一起聊聊
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
