// Typing Effect
const typingText = document.querySelector(".typing-text");
const phrases = ["Mohamed Nishath", "Web Developer", "Full Stack Learner"];
let index = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
  const currentPhrase = phrases[index];
  let currentText = currentPhrase.substring(0, charIndex);
  typingText.textContent = currentText;

  if (!isDeleting && charIndex < currentPhrase.length) {
    charIndex++;
    setTimeout(type, 100);
  } else if (isDeleting && charIndex > 0) {
    charIndex--;
    setTimeout(type, 50);
  } else {
    isDeleting = !isDeleting;
    if (!isDeleting) index = (index + 1) % phrases.length;
    setTimeout(type, 1000);
  }
}
type();

// Dark Mode Toggle
const toggleBtn = document.getElementById("toggle-theme");
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  document.body.classList.toggle("light-mode");

  toggleBtn.textContent = document.body.classList.contains("dark-mode")
    ? "☀️ Toggle Light Mode"
    : "🌙 Toggle Dark Mode";

  toggleBtn.classList.toggle("btn-warning");
  toggleBtn.classList.toggle("btn-light");
});

// Project Scroll Buttons
const scrollContainer = document.getElementById("projectSlider");
document.getElementById("scrollLeft").addEventListener("click", () => {
  scrollContainer.scrollBy({ left: -300, behavior: "smooth" });
});
document.getElementById("scrollRight").addEventListener("click", () => {
  scrollContainer.scrollBy({ left: 300, behavior: "smooth" });
});
