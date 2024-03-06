import { fetchData } from "../modules/fetch.js";
import { displayList, addFilterTypes } from "./indexView.js";
const dataPath = "https://tap-web-1.herokuapp.com/topics/list";

const data = await fetchData(dataPath);

displayList(data);
addFilterTypes(data);

const sortElem = document.getElementById("sortby");
const filterElem = document.getElementById("filterby");
let sortType = "";
let filterType = "";

sortElem.addEventListener("change", (event) => {
  let sortedData = [];
  sortType = event.target.value;
  const filteredData = filterData(data, filterType);
  sortedData = sortData(filteredData, sortType);
  displayList(sortedData);
});

filterElem.addEventListener("change", (event) => {
  let filteredData = [];
  filterType = event.target.value;
  const sortedData = sortData(data, sortType);
  filteredData = filterData(sortedData, filterType);
  displayList(filteredData);
});

// functions
function sortData(data, sortType) {
  if (!sortType) {
    return data;
  }
  let sorted = [];

  if (sortType === "rating") {
    sorted = data.toSorted((a, b) => {
      return b.rating - a.rating;
    });
  } else if (sortType === "id") {
    sorted = data.toSorted((a, b) => {
      return a.id - b.id;
    });
  } else {
    sorted = data.toSorted((a, b) => {
      let textA = a[sortType].toUpperCase();
      let textB = b[sortType].toUpperCase();
      return textA < textB ? -1 : textA > textB ? 1 : 0;
    });
  }
  return sorted;
}

function filterData(data, filterType) {
  if (!filterType) {
    return data;
  }
  const filtered = data.filter((item) => item.category === filterType);
  return filtered;
}
