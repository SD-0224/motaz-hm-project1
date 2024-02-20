const darkToggleButton = document.getElementById("dark-toggle");
const darkIconElement = document.getElementById("dark-icon");
let isDarkMode = localStorage.getItem("theme") !== "light";

detectDarkMode();
darkToggleButton.addEventListener("click", darkToggle);

//functions
function darkToggle() {
  isDarkMode = !isDarkMode;
  localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  document.body.classList.toggle("dark");
  darkIconToggle();
}

function detectDarkMode() {
  if (!isDarkMode) {
    localStorage.setItem("theme", "light");
    document.body.classList.toggle("dark");
  }
}

function darkIconToggle() {
  if (darkIconElement.getAttribute("name") === "sunny") {
    darkIconElement.setAttribute("name", "moon-outline");
  } else {
    darkIconElement.setAttribute("name", "sunny");
  }
}
