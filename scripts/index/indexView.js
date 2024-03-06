import { displayStarsString } from "../modules/displayStars.js";

const cardsContainer = document.getElementById("cards-container");
const topicsFound = document.getElementById("topics-found");
const errorMessage = "Something went wrong. Web topics failed to load.";

export async function displayList(data) {
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
