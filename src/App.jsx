import Navbar from "./components/Navbar";
import WelcomeSection from "./components/WelcomeSection";
import Searchbar from "./components/Searchbar";
import ArticlesList from "./components/ArticlesList";
import FavouritesList from "./components/FavouritesList";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <header>
        <Navbar />
        <WelcomeSection />
      </header>
      <main className="main def-pad">
        <Searchbar />
        <ArticlesList />
        <FavouritesList show={true}/>
      </main>
      <Footer />
    </>
  );
}

export default App;
