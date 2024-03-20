import React from "react";
import "./styles/WelcomeSection.css";

const WelcomeSection = () => {
  return (
    <section className="welcome-container">
      <div id="header-triangle-gradiant"></div>
      <div id="header-triangle"></div>
      <div className="welcome-text-container">
        <h1 className="welcome-header">Welcome to our website!</h1>
        <p className="welcome-text">We have a new design that's fresh, modern, and easy to use.</p>
      </div>
    </section>
  );
};

export default WelcomeSection;
