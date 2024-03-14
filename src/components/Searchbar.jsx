import React from "react";
import "../styles/Searchbar.css";

const Searchbar = () => {
  return (
    <section className="filter-bar-container">
      <div className="search-bar">
        <ion-icon id="search-icon" name="search-outline"></ion-icon>
        <input id="filter-search" type="text" placeholder="Search the website" />
      </div>
      <div className="sortby-bar">
        <label htmlFor="sortby">Sort by:</label>
        <select id="sortby" name="filter-sort">
          <option value="id">Default</option>
          <option value="topic">Topic</option>
          <option value="name">Author</option>
          <option value="category">Category</option>
          <option value="rating">Rating</option>
        </select>
      </div>
      <div className="filterby-bar">
        <label htmlFor="filterby">Filter by:</label>
        <select id="filterby" name="filter-sort">
          <option value="">Default</option>
        </select>
      </div>
    </section>
  );
};

export default Searchbar;
