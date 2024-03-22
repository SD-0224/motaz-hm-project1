import React from "react";
import Navbar from "./layout/Navbar";
import WelcomeSection from "./layout/WelcomeSection";
import FavouritesList from "./favourites/FavouritesList";
import Footer from "./layout/Footer";

const AppLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <WelcomeSection />
      {children}
      <FavouritesList />
      <Footer />
    </>
  );
};

export default AppLayout;
