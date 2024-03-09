const favButton = document.getElementById("favourites-toggle");
const favSection = document.getElementById("favrourites-section");

favButton.addEventListener("click", favourtiesVisibilityToggle);

function favourtiesVisibilityToggle() {
  favSection.classList.toggle("push-to-bottom");
}