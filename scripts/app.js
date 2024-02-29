import { displayStarsString } from "./displayStars.js";

const cardsContainer = document.getElementById("cards-container");
const topicsFound = document.getElementById("topics-found");
const sortElem = document.getElementById("sortby");

const data = await fetchData("https://tap-web-1.herokuapp.com/topics/list");
const errorMessage = "Something went wrong. Web topics failed to load.";

displayList(data);

sortElem.addEventListener("change", (event) => {
  let sortedData = [];
  let sortType = event.target.value;
  sortedData = sortData(sortType);
  displayList(sortedData);
});

//functions
async function displayList(data) {
  if (!data) {
    topicsFound.innerText = errorMessage;
    return;
  }
  cardsContainer.innerHTML = ``;

  topicsFound.innerText = `"${data.length}" Web Topics Found`;

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
    cardsContainer.appendChild(liElement);
  });
}

async function fetchData(path) {
  try {
    const response = await fetch(path);
    return await response.json();
  } catch (error) {
    topicsFound.innerText = errorMessage;
    return;
  }
}

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
