import React from "react";
import { ShowFavProvider } from "./FavouritesContext";
import { ThemeProvider } from "./ThemeContext";

const AppContextProviders = ({ children }) => {
  return (
    <ShowFavProvider>
      <ThemeProvider>{children}</ThemeProvider>
    </ShowFavProvider>
  );
};

export default AppContextProviders;
