import React from "react";
import FavouritesList from "./favourites/FavouritesList";
import Footer from "./layout/Footer";
import Navbar from "./layout/Navbar";
import WelcomeSection from "./layout/WelcomeSection";

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
