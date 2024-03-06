import { fetchData } from "../modules/fetch.js";
import { displayList } from "./indexView.js";

const data = await fetchData("https://tap-web-1.herokuapp.com/topics/list");

displayList(data);

const sortElem = document.getElementById("sortby");

sortElem.addEventListener("change", (event) => {
  let sortedData = [];
  let sortType = event.target.value;
  sortedData = sortData(sortType);
  displayList(sortedData);
});

function sortData(sortType) {
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

function filterData(filterType) {}
