// Portfolio Website JavaScript

// Welcome message
console.log("Portfolio Website Loaded");

// Contact form alert
function showMessage() {
  alert("Message submitted successfully!");
}

// Change button text on hover
const buttons = document.querySelectorAll(".btn");

buttons.forEach((button) => {
  button.addEventListener("mouseover", () => {
    button.innerHTML = "Explore Now";
  });

  button.addEventListener("mouseout", () => {
    button.innerHTML = "View My Projects";
  });
});
