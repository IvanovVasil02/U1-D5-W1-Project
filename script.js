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
