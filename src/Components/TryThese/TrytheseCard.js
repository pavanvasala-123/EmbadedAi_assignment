import React from "react";
import "../TryThese/TrytheseCard.css";

const TrytheseCard = ({eachItem}) => {
    const {image,heading,paragraph} = eachItem
  return (
    <div className="try_these_card">
      <img src={image} />
      <div className="try_these_card_content">
        <p className="heading">{heading}</p>
        <p>{paragraph}</p>
      </div>
    </div>
  );
};

export default TrytheseCard;
