import React from "react";

const SearchElem = () => {
  return (
    <div className="search-bar">
      <ion-icon id="search-icon" name="search-outline"></ion-icon>
      <input id="filter-search" type="text" placeholder="Search the website" />
    </div>
  );
};

export default SearchElem;
