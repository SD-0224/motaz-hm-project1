import { fetchData } from "../modules/fetch.js";
import { displayStarsString } from "../modules/displayStars.js";

const cardsContainerElem = document.getElementById("cards-container");
const topicsFoundElem = document.getElementById("topics-found");
const filterBy = document.getElementById("filterby");

const errorMessage = "Something went wrong. Web topics failed to load.";

export async function displayList(data) {
  cardsContainerElem.innerHTML = ``;

  if (!data || !Array.isArray(data)) {
    topicsFoundElem.innerText = errorMessage;
    return;
  }

  topicsFoundElem.innerText = `"${data.length}" Web Topics Found`;

  data.map((item) => {
    const liElement = document.createElement("li");
    const ratingPercentage = (item.rating / 5) * 100;
    liElement.innerHTML = `
          <a href="details.html?id=${item.id}"">
            <article class="article-container">
              <div class="article-image-container">
                <img class="article-image" src="./images/${item.image}" alt="${item.topic}" />
              </div>
              <div class="article-text-container">
                <div class="article-category">${item.category}</div>
                <h3 class="article-topic">${item.topic}</h3>
                <div class="stars-container">
                  ${displayStarsString(ratingPercentage)}
                  </div>
                  </div>
                  <div class="article-author">Author: ${item.name}</div>
                </div>
            </article>
          </a>`;
    cardsContainerElem.appendChild(liElement);
  });
}

export function addFilterTypes(data) {
  const filterTypesSet = new Set();
  data.forEach((item) => {
    filterTypesSet.add(item.category);
  });

  const filterTypes = Array.from(filterTypesSet);

  filterTypes.map((type) => {
    filterBy.innerHTML += `
    <option value="${type}">${type}</option>
  `;
  });
}

export async function handleData(searchValue, sortType, filterType) {
  const searchData = await fetchData(`https://tap-web-1.herokuapp.com/topics/list?phrase=${searchValue}`);
  const filteredData = filterData(searchData, filterType);
  const sortedData = sortData(filteredData, sortType);
  displayList(sortedData);
}

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
