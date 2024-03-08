import { displayStarsString } from "../modules/displayStars.js";

const categoryElem = document.getElementById("category");
const titleElems = document.querySelectorAll(".title-elem");
const starsElem = document.getElementById("stars");
const descriptionElem = document.getElementById("description");
const imageElem = document.getElementById("image");
const authorElem = document.getElementById("author");
const subTopicsHeaderElem = document.getElementById("sub-topics-header");
const subTopicsListElem = document.getElementById("sub-topics-list");

export async function displayItem(item) {
  //main section
  categoryElem.innerText = item.category;
  titleElems.forEach((elem) => (elem.innerText = item.topic));
  const ratingPercentage = (item.rating / 5) * 100;
  starsElem.innerHTML = displayStarsString(ratingPercentage);
  descriptionElem.innerText = item.description;

  //aside section
  imageElem.src = `./images/${item.image}`;
  imageElem.alt = item.topic;
  authorElem.innerText = item.name;

  //sub topics section
  subTopicsHeaderElem.innerText = item.topic + " Sub Topics";
  item.subtopics.forEach(
    (topic) =>
      (subTopicsListElem.innerHTML =
        subTopicsListElem.innerHTML +
        `<li class="sub-topic-container">
              <ion-icon class="sub-topic-icon" name="checkmark-circle-outline"></ion-icon>
              <h3 class="sub-tobic-header">${topic}</h3>
          </li>`)
  );
}

const addFavButton = document.getElementById("add-fav-button");
const addFavText = document.getElementById("add-fav-text");
const addFavIcon = document.getElementById("add-fav-icon");

export function isFavourite(id, array) {
  if (array.includes(id)) {
    addFavourite();
  }
}

export function addFavouritesEventListeners(id, array) {
  addFavButton.addEventListener("click", () => {
    if (!array.includes(id)) {
      array.push(id);
      localStorage.favourites = JSON.stringify(array);
      addFavourite();
    } else {
      array = array.filter((itemId) => itemId !== id);
      localStorage.favourites = JSON.stringify(array);
      removeFavourite();
    }
  });
}

function addFavourite() {
  addFavText.innerText = "Remove Favourite";
  addFavIcon.setAttribute("name", "heart");
}

function removeFavourite() {
  addFavText.innerText = "Add to Favourites";
  addFavIcon.setAttribute("name", "heart-outline");
}
