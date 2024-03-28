import ArticleCard from "./ArticleCard";
import "./styles/ArticlesList.css";

const ArticlesList = ({ data }) => {
  return (
    <section className="cards-section">
      <h2 id="topics-found">
        {data
          ? data.length === 0
            ? "No Web Topics Found"
            : `"${data.length}" Web Topics Found`
          : "Loading Web Topics..."}
      </h2>
      <ul id="cards-container">
        {data &&
          data.map((item) => {
            return <ArticleCard key={item.id} item={item} />;
          })}
      </ul>
    </section>
  );
};

export default ArticlesList;
