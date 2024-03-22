import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/shared/layout/Navbar";
import WelcomeSection from "./components/shared/layout/WelcomeSection";
import FavouritesList from "./components/shared/favourites/FavouritesList";
import Footer from "./components/shared/layout/Footer";
import Home from "./pages/Home";
import Details from "./pages/Details";
import ContextProviders from "./components/shared/ContextProviders";

function App() {
  return (
    <ContextProviders>
      <Navbar />
      <WelcomeSection />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details/:id" element={<Details />} />
        </Routes>
      </main>

      <FavouritesList />
      <Footer />
    </ContextProviders>
  );
}

export default App;
