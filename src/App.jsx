import { useState, useEffect } from "react";

import Navbar from "./components/Navbar";
import WelcomeSection from "./components/WelcomeSection";
import Searchbar from "./components/Searchbar";
import ArticlesList from "./components/ArticlesList";
import FavouritesList from "./components/FavouritesList";
import Footer from "./components/Footer";

import { fetchData } from "./modules/fetch";
const path = "https://tap-web-1.herokuapp.com/topics/list";

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    (async () => {
      setData(await await fetchData(path));
    })();
  }, []);
  console.log(data)

  return (
    <>
      <header>
        <Navbar />
        <WelcomeSection />
      </header>
      <main className="main def-pad">
        <Searchbar />
        <ArticlesList data={data} />
        <FavouritesList show={true} />
      </main>
      <Footer />
    </>
  );
}

export default App;
