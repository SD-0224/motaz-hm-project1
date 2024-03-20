import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/shared/layout/Navbar";
import WelcomeSection from "./components/shared/layout/WelcomeSection";
import FavouritesList from "./components/shared/favourites/FavouritesList";
import Footer from "./components/shared/layout/Footer";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <WelcomeSection />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>

      <FavouritesList show={true} />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
