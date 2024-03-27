import React from "react";
import SearchElem from "./SearchElem";
import SearchBarSelector from "./SearchBarSelector";
import "./styles/Searchbar.css";

const sortOptions = [
  { value: "topic", text: "Topics" },
  { value: "name", text: "Author" },
  { value: "category", text: "Category" },
  { value: "rating", text: "Rating" },
];

const Searchbar = ({ categories, dataHandle }) => {
  return (
    <section className="filter-bar-container">
      <SearchElem handle={dataHandle.setSearchPhrase} />
      <SearchBarSelector title={"Sort By:"} options={sortOptions} handle={dataHandle.setSortPhrase} />
      <SearchBarSelector title={"Filter By:"} options={categories} handle={dataHandle.setFilterPhrase} />
    </section>
  );
};

export default Searchbar;
