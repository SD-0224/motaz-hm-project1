import React from "react";
import SearchElem from "./SearchElem";
import SortElem from "./SortElem";
import "./styles/Searchbar.css";
import FilterElem from "./FilterElem";

const Searchbar = () => {
  return (
    <section className="filter-bar-container">
      <SearchElem />
      <SortElem />
      <FilterElem />
    </section>
  );
};

export default Searchbar;
