import React, { useEffect, useState } from "react";
import { fetchData } from "../../../modules/fetch";
import FavouriteCard from "./FavouriteCard";
import "./styles/FavouritesList.css";

const FavouritesList = ({ show }) => {
  const [favourites, setFavourites] = useState([]);

  useEffect(() => {
    if (localStorage.favourites && localStorage.favourites !== "") {
      const favIds = localStorage.favourites.split(",");
      (async () => {
        setFavourites(await fetchFavourites(favIds));
      })();
    }
  }, []);

  return (
    <section id="favrourites-section" className={`def-pad ${!show && "push-to-bottom"}`}>
      <h2 id="favourites-header">
        {localStorage.favourites ? "My Favourite Topics" : "You have no favourites, maybe add some?"}
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

async function fetchFavourites(idArr) {
  const favPromises = idArr.map((id) => fetchData(`https://tap-web-1.herokuapp.com/topics/details/${id}`));
  return await Promise.all(favPromises);
}

export default FavouritesList;
