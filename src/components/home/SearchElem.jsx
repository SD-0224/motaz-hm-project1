import React from "react";

const SearchElem = ({ handle }) => {
  return (
    <div className="search-bar">
      <ion-icon id="search-icon" name="search-outline"></ion-icon>
      <input
        id="filter-search"
        type="text"
        placeholder="Search the website"
        onChange={(e) => {
          handle(e.target.value);
        }}
      />
    </div>
  );
};

export default SearchElem;
