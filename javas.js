const cursorBlur = document.querySelector(".blur-cursor");

let mouseX = window.innerWidth / 2;
let mouseY = window.innerHeight / 2;

let posX = mouseX;
let posY = mouseY;

document.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

function animateBlur(){

  posX += (mouseX - posX) * 0.08;
  posY += (mouseY - posY) * 0.08;

  cursorBlur.style.transform =
  `translate(${posX - 175}px, ${posY - 175}px)`;

  requestAnimationFrame(animateBlur);
}

animateBlur();

const menu = document.querySelector(".menu");
const links = document.querySelectorAll(".menu a");
const bar = document.querySelector(".menu-bar");

links.forEach(link => {

link.addEventListener("mouseenter", () => {

const rect = link.getBoundingClientRect();
const parentRect = menu.getBoundingClientRect();

bar.style.left = rect.left - parentRect.left + "px";
bar.style.width = rect.width + "px";

});

});