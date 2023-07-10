import React, { useRef } from "react";
import emailjs from "emailjs-com";
import "./contact.css";
import { MdEmail } from "react-icons/md";
import { BsTencentQq } from "react-icons/bs";
import { FaWeixin } from "react-icons/fa";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      "service_nvk41bi",
      "template_xrd2gto",
      form.current,
      "JbS6bthNRLhNSBfQa"
    );
    e.target.reset()
  };
  return (
    <section id="contact">
      <h5>取得联系</h5>
      <h2>联系我</h2>
      <div className="container contact_container">
        <div className="contact__options">
          <article className="contact__option">
            <MdEmail />
            <h4>Email</h4>
            <h5>guifeel@qq.com</h5>
            <a href="mailto:guifeel@qq.com" target="_blannk">
              发送消息
            </a>
          </article>
          <article className="contact__option">
            <FaWeixin />
            <h4>微信</h4>
            <h5>Golangact</h5>
            <a href="weixin://contacts/Golangact">发送消息</a>
          </article>
          <article className="contact__option">
            <BsTencentQq />
            <h4>QQ</h4>
            <h5>guifeel@qq.com</h5>
            <a href="tencent://Message/?uin=24538598">发送消息</a>
          </article>
        </div>
        {/* contact option 结束 */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="您的名字" required />
          <input type="email" name="email" placeholder="您的邮箱" required />
          <textarea
            name="message"
            rows="7"
            placeholder="您的消息"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            发送消息
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
