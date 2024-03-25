import React from "react";
import { Link } from "react-router-dom";
import Stars from "../Stars";

const FavouriteCard = ({ fav }) => {
  return (
    <li>
      <Link to={`details/${fav.id}`}>
        <article className="fav-article-container">
          <div className="fav-article-image-container">
            <img
              className="fav-article-image"
              src={process.env.PUBLIC_URL + `/images/${fav.image}`}
              alt={fav.topic}
            />
          </div>

          <div className="fav-article-text-container">
            <h3 className="fav-article-topic">{fav.topic}</h3>
            <div className="fav-stars-container">
              <Stars percentage={(fav.rating / 5) * 100} />
            </div>
          </div>
        </article>
      </Link>
    </li>
  );
};

export default FavouriteCard;
