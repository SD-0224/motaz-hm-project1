import React from "react";

const SortElem = () => {
  return (
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
  );
};

export default SortElem;
