import React from "react";
import { Link } from "react-router-dom";
import { useFav } from "../../../context/FavouritesContext";
import { useTheme } from "../../../context/ThemeContext";
import ButtonIonIcon from "../ButtonIonIcon";

import "./styles/Navbar.css";

const Navbar = () => {
  const { toggleShowFav } = useFav();
  const { theme, toggleTheme } = useTheme();

  return (
    <header>
      <nav className="navbar def-pad">
        <Link to="./" className="brand-logo">
          Web Topics
        </Link>
        <ul className="nav-buttons">
          <li>
            <ButtonIonIcon
              text={theme === "dark" ? "Light Mode" : "Dark Mode"}
              icon={theme === "dark" ? "sunny" : "moon-outline"}
              onClick={toggleTheme}
            />
          </li>
          <li>
            <ButtonIonIcon text={"Favourites"} icon={"heart-outline"} onClick={toggleShowFav} />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
