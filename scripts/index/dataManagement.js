import { fetchData } from "../modules/fetch.js";

const dataPath = "https://tap-web-1.herokuapp.com/topics/list";

let storedData = [];

let searchValue = "";
let sortType = "";
let filterType = "";

export async function initializeData() {
  const data = await fetchData(dataPath);
  storedData = data;
  return storedData;
}

export async function onSearch(searchText) {
  searchValue = searchText;
  storedData = await fetchData(`https://tap-web-1.herokuapp.com/topics/list?phrase=${searchValue}`);
  return mutateData();
}

export function onSort(sortText) {
  sortType = sortText;
  return mutateData();
}

export function onFilter(filterText) {
  filterType = filterText;
  return mutateData();
}

export function mutateData() {
  let mutatedData = storedData;
  if (sortType) {
    mutatedData = sortData(mutatedData, sortType);
  }
  if (filterType) {
    mutatedData = filterData(mutatedData, filterType);
  }
  return mutatedData;
}

function sortData(data) {
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

function filterData(data) {
  const filtered = data.filter((item) => item.category === filterType);
  return filtered;
}
