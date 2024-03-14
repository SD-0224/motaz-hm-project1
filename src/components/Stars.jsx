import React from "react";

const Stars = ({ percentage }) => {
  return (
    <div className="stars-outer-container">
      <ion-icon size="medium" name="star-outline"></ion-icon>
      <ion-icon size="medium" name="star-outline"></ion-icon>
      <ion-icon size="medium" name="star-outline"></ion-icon>
      <ion-icon size="medium" name="star-outline"></ion-icon>
      <ion-icon size="medium" name="star-outline"></ion-icon>

      <div
        className="stars-inner-container"
        style={{ clipPath: `polygon(0 0, ${percentage}% 0, ${percentage}% 100%, 0% 100%)` }}
      >
        <ion-icon size="medium" name="star"></ion-icon>
        <ion-icon size="medium" name="star"></ion-icon>
        <ion-icon size="medium" name="star"></ion-icon>
        <ion-icon size="medium" name="star"></ion-icon>
        <ion-icon size="medium" name="star"></ion-icon>
      </div>
    </div>
  );
};

export default Stars;
