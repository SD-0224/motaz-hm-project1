import React, { useEffect, useState } from "react";
import DetailsCard from "../components/details/DetailsCard";
import DetailsContent from "../components/details/DetailsContent";
import SubTopics from "../components/details/SubTopics";
import "../components/details/styles/Details.css";
import { fetchData } from "../utilities/fetch";
import { useFav } from "../context/FavouritesContext";

import { useParams } from "react-router-dom";

const Details = () => {
  const [item, setItem] = useState();
  const [isFav, setIsFav] = useState(false);
  const { id } = useParams();
  const { favourites, updateFavourites } = useFav();

  useEffect(() => {
    const path = `https://tap-web-1.herokuapp.com/topics/details/${id}`;
    (async () => {
      setItem(await fetchData(path));
    })();
  }, [id]);

  useEffect(() => {
    if (!favourites) {
      return;
    }
    for (let i = 0; i < favourites.length; i++) {
      if (favourites && favourites.length > 0) {
        if (favourites[i].id === Number(id)) {
          setIsFav(true);
          return;
        }
      }
    }
    setIsFav(false);
  }, [favourites, id]);

  const addFavourite = (id) => {
    updateFavourites(id);
  };

  return (
    <main>
      <div className="gray-backdrop"></div>
      <section className="details-container">
        <DetailsContent item={item} />
        <DetailsCard isFav={isFav} item={item} addFav={addFavourite} />
        <SubTopics item={item} />
      </section>
    </main>
  );
};

export default Details;
