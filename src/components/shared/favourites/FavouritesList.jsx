import React from "react";
import { useFav } from "../../../context/FavouritesContext";
import FavouriteCard from "./FavouriteCard";
import "./styles/FavouritesList.css";

const FavouritesList = () => {
  const { favourites, showFav } = useFav();

  return (
    <section id="favrourites-section" className={`def-pad ${!showFav && "push-to-bottom"}`}>
      <h2 id="favourites-header">
        {favourites ? "My Favourite Topics" : "You have no favourites, maybe add some?"}
      </h2>
      <ul id="favourites-container">
        {favourites.length > 0 &&
          favourites.map((fav) => {
            return <FavouriteCard key={fav.id} fav={fav} />;
          })}
      </ul>
    </section>
  );
};

export default FavouritesList;
