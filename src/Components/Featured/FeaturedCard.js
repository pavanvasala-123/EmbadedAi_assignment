import React from "react";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import "../Featured/FeaturedCard.css";

const FeaturedCard = ({eachItem}) => {
    const {image,heading,subheading,paragraph} = eachItem
  return (
    <div className="foryou_card">
      <div className="images_con">
        <img src={image} />
      </div>
      <div className="card_content">
        <div className="card_content_top">
          <p className="heading">{heading}</p>
          <p className="subheading">{subheading}</p>
          <p>{paragraph}</p>
        </div>
        <div className="card_content_bottom">
          <RemoveRedEyeIcon className="views_img"/>
          <p className="views">399.4k</p>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCard;
