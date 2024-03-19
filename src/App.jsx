import Navbar from "./components/Navbar";
import WelcomeSection from "./components/WelcomeSection";
import FavouritesList from "./components/FavouritesList";
import Footer from "./components/Footer";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <header>
        <Navbar />
        <WelcomeSection />
      </header>
      <Home />
      <FavouritesList show={true} />
      <Footer />
    </>
  );
}

export default App;
