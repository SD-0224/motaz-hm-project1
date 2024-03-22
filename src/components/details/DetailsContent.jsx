import React from "react";
import Stars from "../shared/Stars";

const DetailsContent = ({ item }) => {
  return (
    <div className="details-text">
      <div className="details-category" id="category">
        {item ? item.category : "__________________________"}
      </div>
      <h2 className="details-title title-elem">{item ? item.topic : "____________________"}</h2>
      <div className="details-stars-container" id="stars">
        <div className="stars-outer-container">
          <Stars percentage={item ? (item.rating / 5) * 100 : 0} />
        </div>
      </div>
      <p className="details-content" id="description">
        {item
          ? item.description
          : "__________________________ __________________________ __________________________"}
      </p>
    </div>
  );
};

export default DetailsContent;
