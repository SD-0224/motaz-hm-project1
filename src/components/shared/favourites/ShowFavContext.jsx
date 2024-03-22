import React, { useState } from "react";

export const ShowFavContext = React.createContext();
export const ShowFavToggle = React.createContext();

export const ShowFavProvider = ({ children }) => {
  const [showFavContext, setShowFavContext] = useState(false);

  const toggleShowFav = () => {
    setShowFavContext(!showFavContext);
  };

  return (
    <ShowFavContext.Provider value={showFavContext}>
      <ShowFavToggle.Provider value={toggleShowFav}>{children}</ShowFavToggle.Provider>
    </ShowFavContext.Provider>
  );
};
