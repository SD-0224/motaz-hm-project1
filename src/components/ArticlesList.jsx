import Article from "./Article";
import "../styles/ArticlesList.css";

const ArticlesList = ({ data }) => {
  return (
    <section className="cards-section">
      <h2 id="topics-found">
        {data.length > 0 ? `"${data.length}" Web Topics Found` : "Loading Web Topics..."}
      </h2>
      <ul id="cards-container">
        {data.length > 0 &&
          data.map((item) => {
            return <Article key={item.id} item={item} />;
          })}
      </ul>
    </section>
  );
};

export default ArticlesList;
