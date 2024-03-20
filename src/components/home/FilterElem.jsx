import React from "react";

const FilterElem = () => {
  return (
    <div className="filterby-bar">
      <label htmlFor="filterby">Filter by:</label>
      <select id="filterby" name="filter-sort">
        <option value="">Default</option>
      </select>
    </div>
  );
};

export default FilterElem;
