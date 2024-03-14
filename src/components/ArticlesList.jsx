import React, { useEffect, useState } from "react";
import Article from "./Article";
import "../styles/ArticlesList.css";
import { fetchData } from "../modules/fetch";

const path = "https://tap-web-1.herokuapp.com/topics/list";

const ArticlesList = () => {
  //   debugger;
  const [data, setData] = useState([]);
  useEffect(() => {
    (async () => {
      setData(await await fetchData(path));
    })();
  }, []);

  return (
    <section className="cards-section">
      <h2 id="topics-found">
        {(data.length > 0) ? `"${data.length}" Web Topics Found` : "Loading Web Topics..."}
      </h2>
      <ul id="cards-container">
        {(data.length > 0) &&
          data.map((item) => {
            return <Article key={item.id} item={item} />;
          })}
      </ul>
    </section>
  );
};

export default ArticlesList;
