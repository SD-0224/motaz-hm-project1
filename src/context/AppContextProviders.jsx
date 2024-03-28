import React from "react";
import { ShowFavProvider } from "./FavouritesContext";
import { ThemeProvider } from "./ThemeContext";
import { DataPrvider } from "./DataContext";

const AppContextProviders = ({ children }) => {
  return (
    <DataPrvider>
      <ShowFavProvider>
        <ThemeProvider>{children}</ThemeProvider>
      </ShowFavProvider>
    </DataPrvider>
  );
};

export default AppContextProviders;
