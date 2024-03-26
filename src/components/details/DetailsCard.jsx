import React from "react";
import { Link } from "react-router-dom";

const DetailsCard = ({ isFav, item, addFav }) => {
  return (
    <aside className="details-card">
      <div className="details-image-container">
        <img
          className="details-image"
          id="image"
          src={process.env.PUBLIC_URL + (item ? `/images/${item.image}` : `/loading_icon.gif`)}
          alt={item ? item.topic : `loading`}
        />
      </div>
      <div className="details-card-content">
        <div className="details-topic-text">
          <span className="bold title-elem">{item ? item.topic : "________"}</span> by{" "}
          <Link to={""} className="inline-link" id="author">
            {item ? item.name : "________"}
          </Link>
        </div>
        <div className="add-fav-container">
          <div>Interested about this topic?</div>
          <button id="add-fav-button" onClick={() => addFav(item.id)}>
            <span id="add-fav-text">{isFav ? "Remove Favourite" : "Add to Favourites"}</span>
            <ion-icon
              id="add-fav-icon"
              size="large"
              name={isFav ? "heart" : "heart-outline"}
              aria-hidden="true"
            ></ion-icon>
          </button>
          <div className="add-fav-credits">Unlimited Credits</div>
        </div>
      </div>
    </aside>
  );
};

export default DetailsCard;
