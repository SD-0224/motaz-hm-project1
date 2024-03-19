import React from "react";

const ButtonIonIcon = ({ text, icon }) => {
  return (
    <button>
      <ion-icon name={icon? `${icon}` : "power-outline"} size="smaller"></ion-icon>
      <h3>{text}</h3>
    </button>
  );
};

export default ButtonIonIcon;
