import React from "react";
import { useState, useEffect } from "react";
import Searchbar from "../components/Searchbar";
import ArticlesList from "../components/ArticlesList";
import { fetchData } from "../modules/fetch";

const path = "https://tap-web-1.herokuapp.com/topics/list";

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      setData(await await fetchData(path));
    })();
  }, []);
  console.log(data);

  return (
    <>
      <main className="main def-pad">
        <Searchbar />
        <ArticlesList data={data} />
      </main>
    </>
  );
};

export default Home;
