import React, { useContext, useEffect, useState } from "react";
import { fetchFavourites } from "../utilities/fetchFavourites";

const ShowFavContext = React.createContext(null);

export const ShowFavProvider = ({ children }) => {
  const [showFav, setShowFav] = useState(false);

  const toggleShowFav = () => {
    setShowFav(!showFav);
  };

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
    <ShowFavContext.Provider value={{ favourites, showFav, toggleShowFav }}>
      {children}
    </ShowFavContext.Provider>
  );
};

export const useFav = () => {
  return useContext(ShowFavContext);
};
