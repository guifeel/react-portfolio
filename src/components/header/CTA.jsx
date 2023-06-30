import React from "react";
import CV from "../../assets/cv.pdf";

const CTA = () => {
  return (
    <div className="cta">
      <a href={CV} download className="btn">
        下载简历
      </a>
      <a href="#contact" className="btn btn-primary">
        让我们聊聊
      </a>
    </div>
  );
};

export default CTA;
