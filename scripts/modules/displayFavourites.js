import { displayStarsString } from "./displayStars.js";
import { fetchData } from "./fetch.js";

const favHeaderElem = document.getElementById("favourites-header");
const favListElem = document.getElementById("favourites-container");

export async function displayFavourites() {
  if (!localStorage.favourites || JSON.parse(localStorage.favourites).length === 0) {
    favHeaderElem.innerText = "You have no favourites, maybe add some?";
    favListElem.innerHTML = ``;
    return;
  }
  favHeaderElem.innerText = "My Favourite Topics";

  const favoutiresIdArray = JSON.parse(localStorage.favourites);
  const favourites = await fetchFavourites(favoutiresIdArray);

  favListElem.innerHTML = ``;

  favourites.forEach((item) => {
    displayFavourite(item);
  });
}

async function fetchFavourites(idArr) {
  const favPromises = idArr.map((id) => fetchData(`https://tap-web-1.herokuapp.com/topics/details/${id}`));
  return await Promise.all(favPromises);
}

async function displayFavourite(item) {
  const ratingPercentage = (item.rating / 5) * 100;

  favListElem.innerHTML += `
    <li>
        <a href="details.html?id=${item.id}">
            <article class="fav-article-container">
                <div class="fav-article-image-container">
                    <img class="fav-article-image" src="./images/${item.image}" alt="${item.topic}" />
                </div>

                <div class="fav-article-text-container">
                    <h3 class="fav-article-topic">${item.topic}</h3>
                    <div class="fav-stars-container">
                        ${displayStarsString(ratingPercentage)}
                    </div>
                </div>
            </article>
        </a>
    </li>
    `;
}
