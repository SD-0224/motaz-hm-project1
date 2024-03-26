import React, { useCallback, useContext, useEffect, useState } from "react";
import { fetchFavourites } from "../utilities/fetchFavourites";

const ShowFavContext = React.createContext(null);

export const ShowFavProvider = ({ children }) => {
  const [favourites, setFavourites] = useState([]);
  const [showFav, setShowFav] = useState(false);

  const updateFavourites = useCallback(async (id) => {
    let favIds = getFavIds();

    if (!id) {
      setFavourites(await fetchFavourites(favIds));
      return;
    } else if (favIds.indexOf(`${id}`) !== -1) {
      favIds = favIds.filter((i) => i !== `${id}`);
    } else {
      const idSet = new Set([...favIds, `${id}`]);
      favIds = [...idSet];
    }

    localStorage.setItem("favourites", favIds);
    setFavourites(await fetchFavourites(favIds));
  }, []);

  useEffect(() => {
    updateFavourites();
  }, [updateFavourites]);

  const toggleShowFav = () => {
    setShowFav(!showFav);
  };

  return (
    <ShowFavContext.Provider value={{ favourites, showFav, toggleShowFav, updateFavourites }}>
      {children}
    </ShowFavContext.Provider>
  );
};

const getFavIds = () => {
  if (localStorage.getItem("favourites")) {
    return localStorage.getItem("favourites").split(",");
  } else {
    return [];
  }
};

export const useFav = () => {
  return useContext(ShowFavContext);
};
