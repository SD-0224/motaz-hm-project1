import React, { useEffect, useState } from "react";
import ArticlesList from "../components/home/ArticlesList";
import Searchbar from "../components/home/Searchbar";
import { fetchData } from "../utilities/fetch";

const path = "https://tap-web-1.herokuapp.com/topics/list";

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      setData(await fetchData(path));
    })();
  }, []);

  return (
    <main className="main def-pad">
      <Searchbar />
      <ArticlesList data={data} />
    </main>
  );
};

export default Home;
