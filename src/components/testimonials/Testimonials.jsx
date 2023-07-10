import React from "react";
import "./testimonials.css";
import AVTR1 from "../../assets/任正非.webp";
import AVTR2 from "../../assets/王健林.jpeg";
import AVTR3 from "../../assets/比尔盖茨.webp";
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const data = [
  {
    avatar: AVTR1,
    name: "任正非",
    review: "不忘初心，方得始终，不拒本心，是谓自在。",
  },
  {
    avatar: AVTR2,
    name: "王健林",
    review: "他总是先定一个小目标，比如先写它个一亿行代码。",
  },
  {
    avatar: AVTR3,
    name: "比尔·盖茨",
    review: "这个中国的人才，让我印象深刻。",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>来自客户的评论</h5>
      <h2>推荐</h2>
      <Swiper
        className="container testimonials__container"
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review }, index) => (
          <SwiperSlide className="testimonial" key={index}>
            <div className="client__avatar">
              <img src={avatar} alt="AVTR1" />
            </div>
            <h5 className="client_name">{name}</h5>
            <small className="client__review">{review}</small>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
