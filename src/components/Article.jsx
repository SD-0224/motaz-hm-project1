import React from "react";
import Stars from "./Stars";

const Article = ({ item }) => {
  return (
    <li>
      <a href={`details.html?id=${item.id}`}>
        <article className="article-container">
          <div className="article-image-container">
            <img className="article-image" src={`./images/${item.image}`} alt={item.topic} />
          </div>
          <div className="article-text-container">
            <div className="article-category">{item.category}</div>
            <h3 className="article-topic">{item.topic}</h3>
            <div className="stars-container">
              <Stars percentage={(item.rating / 5) * 100} />
            </div>
            <div className="article-author">Author: {item.name}</div>
          </div>
        </article>
      </a>
    </li>
  );
};

export default Article;
