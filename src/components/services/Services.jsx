import React from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";

const Services = () => {
  return (
    <section id="services">
      <h5>我能为企业做出</h5>
      <h2>贡献</h2>
      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>前端</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Maiores, consequatur.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Maiores, consequatur.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Maiores, consequatur.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Maiores, consequatur.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Maiores, consequatur.
              </p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>后端</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Maiores, consequatur.
              </p>
            </li>{" "}
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Maiores, consequatur.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Maiores, consequatur.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Maiores, consequatur.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Maiores, consequatur.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Maiores, consequatur.
              </p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>软件测试</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Maiores, consequatur.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Maiores, consequatur.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Maiores, consequatur.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Maiores, consequatur.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Maiores, consequatur.
              </p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
