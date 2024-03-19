import React from "react";
import { Link } from "react-router-dom";
import ButtonIonIcon from "./ButtonIonIcon";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar def-pad">
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
    </nav>
  );
};

export default Navbar;
