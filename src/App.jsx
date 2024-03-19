import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import WelcomeSection from "./components/WelcomeSection";
import FavouritesList from "./components/FavouritesList";
import Footer from "./components/Footer";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <header>
        <Navbar />
        <WelcomeSection />
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <FavouritesList show={true} />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
