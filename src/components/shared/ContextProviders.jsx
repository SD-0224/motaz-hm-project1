import React from "react";
import { ShowFavProvider } from "./favourites/ShowFavContext";
import ThemeProvider from "./ThemeContext";

const ContextProviders = ({ children }) => {
  return (
    <ShowFavProvider>
      <ThemeProvider>{children}</ThemeProvider>
    </ShowFavProvider>
  );
};

export default ContextProviders;
