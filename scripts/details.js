import { displayStarsString } from "./displayStars.js";

const categoryElem = document.getElementById("category");
const titleElems = document.querySelectorAll(".title-elem");
const starsElem = document.getElementById("stars");
const descriptionElem = document.getElementById("description");
const imageElem = document.getElementById("image");
const authorElem = document.getElementById("author");
const subTopicsHeaderElem = document.getElementById("sub-topics-header");
const subTopicsListElem = document.getElementById("sub-topics-list");

const queryParams = new URLSearchParams(window.location.search);

let id = queryParams.get("id");

const path = `https://tap-web-1.herokuapp.com/topics/details/${id}`;

displayItem();

//functions
async function displayItem() {
  const item = await fetchData(path);

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

async function fetchData(path) {
  try {
    const response = await fetch(path);
    return await response.json();
  } catch (error) {
    console.log("Data could not be loaded");
    return;
  }
}
