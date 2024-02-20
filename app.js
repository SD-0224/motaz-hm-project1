const courseContainer = document.getElementById("cards-container");
const topicsFound = document.getElementById("topics-found");

displayList();

//functions
async function displayList() {
  const data = await fetchData("data.json");

  if (!data) {
    return;
  }

  topicsFound.innerText = `"${data.length}" Web Topics Found`;

  data.map((item) => {
    const liElement = document.createElement("li");
    const ratingPercentage = (item.rating / 5) * 100;
    liElement.innerHTML = `
        <a href="details.html">
          <article class="article-container">
            <div class="article-image-container">
              <img class="article-image" src="./images/${item.image}" alt="${item.topic}" />
            </div>
            <div class="article-text-container">
              <div class="article-category">${item.category}</div>
              <h3 class="article-topic">${item.topic}</h3>
              <div class="stars-container">
                <div class="stars-outer-container">
                  <ion-icon size="medium" name="star-outline"></ion-icon>
                  <ion-icon size="medium" name="star-outline"></ion-icon>
                  <ion-icon size="medium" name="star-outline"></ion-icon>
                  <ion-icon size="medium" name="star-outline"></ion-icon>
                  <ion-icon size="medium" name="star-outline"></ion-icon>

                  <div class="stars-inner-container" style="clip-path: polygon(0 0, ${ratingPercentage}% 0, ${ratingPercentage}% 100%, 0% 100%);">
                    <ion-icon size="medium" name="star"></ion-icon>
                    <ion-icon size="medium" name="star"></ion-icon>
                    <ion-icon size="medium" name="star"></ion-icon>
                    <ion-icon size="medium" name="star"></ion-icon>
                    <ion-icon size="medium" name="star"></ion-icon>
                  </div>
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
    return console.log("Data base could not be loaded");
  }
}
