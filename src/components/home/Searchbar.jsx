import React from "react";
import FilterElem from "./FilterElem";
import SearchElem from "./SearchElem";
import SortElem from "./SortElem";
import "./styles/Searchbar.css";

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
