import { displayStarsString } from "../modules/displayStars.js";

const cardsContainerElem = document.getElementById("cards-container");
const topicsFoundElem = document.getElementById("topics-found");
const filterByElem = document.getElementById("filterby");

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
    filterByElem.innerHTML += `
    <option value="${type}">${type}</option>
  `;
  });
}
