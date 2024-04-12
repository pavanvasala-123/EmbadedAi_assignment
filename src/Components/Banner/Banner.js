import React from "react";
import "../Banner/Banner.css";
const Banner = () => {
  return (
    <div className="banner">
      <div className="banner_left">
        <p>What do you want to do?</p>
        <h5>Epic Cahllenges await</h5>
      </div>
      <div className="banner_right">
        <div className="card">
          <div className="banner_card_image_con">
            <img src="https://characterai.io/i/80/static/avatars/uploaded/2023/7/28/kkHVTmudZ1v434Rt1gwDCvkBnBFv4cv2EaVvrLuDRzk.webp?webp=true&anim=0" />
            <p>Puzzle Prodigy</p>
          </div>
          <div>
            <p>
              I'm your personal life coach here to help you live yoyr best lift
              and give you guidence and ...
            </p>
          </div>
        </div>
        <div className="card">
          <div className="banner_card_image_con">
            <img src="https://characterai.io/i/80/static/avatars/uploaded/2023/7/28/kkHVTmudZ1v434Rt1gwDCvkBnBFv4cv2EaVvrLuDRzk.webp?webp=true&anim=0" />
            <p>Puzzle Prodigy</p>
          </div>
          <div>
            <p>
              I'm your personal life coach here to help you live yoyr best lift
              and give you guidence and ...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
