import React from "react";
import "../styles/Navbar.css"

const Navbar = () => {
  return (
    <nav class="navbar def-pad">
      <a href="index.html" class="brand-logo">
        Web Topics
      </a>
      <ul class="nav-buttons">
        <li>
          <button id="dark-toggle">
            <ion-icon id="dark-icon" name="sunny" size="smaller"></ion-icon>
            <h3 id="dark-text">Light Mode</h3>
          </button>
        </li>
        <li>
          <button id="favourites-toggle">
            <ion-icon name="heart-outline" size="smaller"></ion-icon>
            <h3>Favourites</h3>
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
