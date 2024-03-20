import React from "react";
import "./styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-text">
        <span>Developed With</span>
        <ion-icon class="heart-icon" name="heart" aria-hidden="true"></ion-icon>
        <span>© 2023</span>
      </div>
    </footer>
  );
};

export default Footer;
