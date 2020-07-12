const share = document.querySelector(".share");
const links = document.querySelector(".social-links");

share.addEventListener("click", () => {
  links.classList.toggle("toggle");
});
