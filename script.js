document.addEventListener("scroll", () => {
  const navbar = document.querySelector("header");
  const hero = document.querySelector("#hero");
  let heroHeight = hero.offsetHeight;
  if (window.scrollY > heroHeight) {
    navbar.style.backgroundColor = "#fff";
  } else {
    navbar.style.backgroundColor = "#FFC017";
  }
});

const randomM = document.querySelectorAll("svg g g g[stroke-linecap]");

console.log(randomM.length);

const intervalID = setInterval(myCallback, 400);

function myCallback(a) {
  randomM[Math.floor(Math.random() * (560 - 1) + 1)].setAttribute("opacity", "1");
  randomM[Math.floor(Math.random() * (560 - 1) + 1)].setAttribute("opacity", "0");
}
