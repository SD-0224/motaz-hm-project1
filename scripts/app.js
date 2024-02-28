import { displayStarsString } from "./displayStars.js";

const courseContainer = document.getElementById("cards-container");
const topicsFound = document.getElementById("topics-found");

displayList();

//functions
async function displayList() {
  const data = await fetchData("https://tap-web-1.herokuapp.com/topics/list");

  if (!data) {
    return;
  }

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
    courseContainer.appendChild(liElement);
  });
}

async function fetchData(path) {
  try {
    const response = await fetch(path);
    return await response.json();
  } catch (error) {
    topicsFound.innerText = "Something went wrong. Web topics failed to load.";
    return;
  }
}
