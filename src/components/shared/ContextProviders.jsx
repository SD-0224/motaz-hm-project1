import React from "react";
import { ShowFavProvider } from "./favourites/ShowFavContext";

const ContextProviders = ({ children }) => {
  return <ShowFavProvider>{children}</ShowFavProvider>;
};

export default ContextProviders;
