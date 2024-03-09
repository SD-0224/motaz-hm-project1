const favButton = document.getElementById("favourites-toggle");
const favSection = document.getElementById("favrourites-section");

favButton.addEventListener("click", favourtiesVisibilityToggle);

export function favourtiesVisibilityToggle() {
  favSection.classList.toggle("push-to-bottom");
}