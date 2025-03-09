// dark mode button //
const darkModeToggle =document.getElementById("dark-mode-btn");

// Load dark mode state
if (localStorage.getItem("darkMode") === "enabled") {
  document.body.classList.add("dark-mode");
}

// Toggle dark mode and save preference
darkModeToggle.addEventListener("click", function() {
  document.body.classList.toggle("dark-mode");
  localStorage.setItem("darkMode", document.body.classList.contains("dark-mode") ? "enabled" : "disabled");
});

// navigation button //
const menuBtn = document.getElementById('menu-btn');
const navbar = document.getElementById('navbar');

menuBtn.addEventListener('click', function() {
  navbar.classList.toggle('active');
});

// Close navigation on outside click
document.addEventListener('click', function(event) {
  if (!navbar.contains(event.target) && !menuBtn.contains(event.target)) {
    navbar.classList.remove('active');
  }
});

// text size button //
const textSizeBtn = document.getElementById('toggle-text-size');

textSizeBtn.addEventListener('click', function() {
  document.body.classList.toggle('large-text');
});