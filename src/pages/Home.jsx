import React from "react";
import { useState, useEffect } from "react";
import LayoutContainer from "../components/shared/layout/LayoutContainer";
import Searchbar from "../components/home/Searchbar";
import ArticlesList from "../components/home/ArticlesList";
import { fetchData } from "../modules/fetch";

const path = "https://tap-web-1.herokuapp.com/topics/list";

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      setData(await fetchData(path));
    })();
  }, []);
  console.log(data);

  return (
    <LayoutContainer className={"main"}>
      <Searchbar />
      <ArticlesList data={data} />
    </LayoutContainer>
  );
};

export default Home;
