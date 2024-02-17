const darkToggleButton = document.getElementById("dark-toggle");

detectDarkMode();
darkToggleButton.addEventListener("click", darkToggle);

//functions
function darkToggle() {
  document.body.classList.toggle("dark");
}

function detectDarkMode() {
  if (window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches) {
    darkToggle();
  }
}
