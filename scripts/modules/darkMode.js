const darkToggleButton = document.getElementById("dark-toggle");
const darkIconElement = document.getElementById("dark-icon");
const darkTextElement = document.getElementById("dark-text");
let isDarkMode = localStorage.getItem("theme") !== "light";

detectDarkMode();
darkToggleButton.addEventListener("click", darkToggle);

//functions
function darkToggle() {
  isDarkMode = !isDarkMode;
  localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  document.body.classList.toggle("dark");
  darkTextToggle();
}

function detectDarkMode() {
  if (!isDarkMode) {
    localStorage.setItem("theme", "light");
    document.body.classList.toggle("dark");
    darkTextElement.innerText = "Dark Mode";
    darkIconElement.setAttribute("name", "moon-outline");
  }
}

function darkTextToggle() {
  if (darkIconElement.getAttribute("name") === "sunny") {
    darkTextElement.innerText = "Dark Mode";
    darkIconElement.setAttribute("name", "moon-outline");
  } else {
    darkTextElement.innerText = "Light Mode";
    darkIconElement.setAttribute("name", "sunny");
  }
}
