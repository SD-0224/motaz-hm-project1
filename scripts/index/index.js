import { fetchData } from "../modules/fetch.js";
import { displayList, addFilterTypes, handleData } from "./indexView.js";
import { debounce } from "../modules/debounce.js";

const dataPath = "https://tap-web-1.herokuapp.com/topics/list";
const data = await fetchData(dataPath);

displayList(data);
addFilterTypes(data);

const searchElem = document.getElementById("filter-search");
const sortElem = document.getElementById("sortby");
const filterElem = document.getElementById("filterby");

let sortType = "";
let filterType = "";
let searchValue = "";

searchElem.addEventListener("input", (event) => {
  searchValue = event.target.value;
  debouncedSearchData(searchValue, sortType, filterType);
});

sortElem.addEventListener("change", async (event) => {
  sortType = event.target.value;
  handleData(searchValue, sortType, filterType);
});

filterElem.addEventListener("change", async (event) => {
  filterType = event.target.value;
  handleData(searchValue, sortType, filterType);
});

// functions
const debouncedSearchData = debounce(handleData, 300);
