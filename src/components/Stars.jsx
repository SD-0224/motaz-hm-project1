import React from "react";

const Stars = ({ percentage }) => {
  const starsOutline = makeStarsArray(false);
  const starsFilled = makeStarsArray(true);

  return (
    <div className="stars-outer-container">
      {starsOutline}
      <div
        className="stars-inner-container"
        style={{ clipPath: `polygon(0 0, ${percentage}% 0, ${percentage}% 100%, 0% 100%)` }}
      >
        {starsFilled}
      </div>
    </div>
  );
};

function makeStarsArray(isFilled) {
  let stars = [];
  for (let i = 0; i < 5; i++) {
    stars.push(<ion-icon size="medium" name={isFilled ? "star" : "star-outline"}></ion-icon>);
  }
  return stars;
}

export default Stars;
