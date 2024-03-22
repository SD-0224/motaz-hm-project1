import React, { useContext } from "react";
import { Link } from "react-router-dom";
import ButtonIonIcon from "../ButtonIonIcon";
import LayoutContainer from "./LayoutContainer";
import { ShowFavToggle } from "../favourites/ShowFavContext";
import { ThemeContextUpdate } from "../ThemeContext";
import { ThemeContext } from "../ThemeContext";
import "./styles/Navbar.css";

const Navbar = () => {
  return (
    <header>
      <LayoutContainer className="navbar">
        <Link to="./" className="brand-logo">
          Web Topics
        </Link>
        <ul className="nav-buttons">
          <li>
            <ButtonIonIcon
              text={useContext(ThemeContext) === "dark" ? "Light Mode" : "Dark Mode"}
              icon={useContext(ThemeContext) === "dark" ? "sunny" : "moon-outline"}
              onClick={useContext(ThemeContextUpdate)}
            />
          </li>
          <li>
            <ButtonIonIcon text={"Favourites"} icon={"heart-outline"} onClick={useContext(ShowFavToggle)} />
          </li>
        </ul>
      </LayoutContainer>
    </header>
  );
};

export default Navbar;
