const courseContainer = document.getElementById("cards-container");
const topicsFound = document.getElementById("topics-found");

displayList();

//functions
async function displayList() {
  const data = await fetchData("./data.json");

  if (!data) {
    return;
  }

  topicsFound.innerText = `"${data.length}" topics found`;

  data.map((item) => {
    const liElement = document.createElement("li");
    liElement.innerHTML = `
        <a href="/${item.id}">
            <img src="./images/${item.image}" alt="html card image" />
            <article>
                <h5>${item.category}</h5>
                <h3>${item.topic}</h3>
                <div class="stars-container">
                    <div class="stars-outer">
                        &#9734;&#9734;&#9734;&#9734;&#9734;
                        <div class="stars-inner" style="width: ${
                          (item.rating / 5) * 100
                        }%;">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
                    </div>
                    <p>${item.rating.toFixed(1)}</p>
                </div>
                <h4>Author: ${item.name}</h4>
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

function ratingToStars(rating) {}
