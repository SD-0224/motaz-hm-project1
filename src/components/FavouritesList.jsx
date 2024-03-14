import React, { useEffect, useState } from "react";
import { fetchData } from "../modules/fetch";
import Favourite from "./Favourite";

localStorage.favourites = [1, 4, 5, 10, 2];

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
            return <Favourite key={fav.id} fav={fav} />;
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
