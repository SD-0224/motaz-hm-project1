import React, { useId } from "react";

const SortElem = ({ title, options, handle }) => {
  const id = useId();

  return (
    <div className="searchbar-selector">
      <label htmlFor={id}>{title}</label>
      <select
        id={id}
        name="filter-sort"
        onChange={(e) => {
          handle(e.target.value);
        }}
      >
        <option value="id">Default</option>

        {options &&
          options.map((option) => {
            return (
              <option key={option.value.toLowerCase()} value={option.value}>
                {option.text}
              </option>
            );
          })}
      </select>
    </div>
  );
};

export default SortElem;
