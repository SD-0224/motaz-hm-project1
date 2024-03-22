import React, { useContext } from "react";
import { Link } from "react-router-dom";
import ButtonIonIcon from "../ButtonIonIcon";
import LayoutContainer from "./LayoutContainer";
import { ShowFavToggle } from "../favourites/ShowFavContext";
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
            <ButtonIonIcon text={"Dark Mode"} icon={"sunny"} />
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
