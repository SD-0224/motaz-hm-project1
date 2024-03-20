import React from "react";
import { Link } from "react-router-dom";
import ButtonIonIcon from "../ButtonIonIcon";
import "./styles/Navbar.css";
import LayoutContainer from "./LayoutContainer";

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
            <ButtonIonIcon text={"Favourites"} icon={"heart-outline"} />
          </li>
        </ul>
      </LayoutContainer>
    </header>
  );
};

export default Navbar;
