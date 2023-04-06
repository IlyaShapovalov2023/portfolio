const nav = document.querySelector("#nav");
const naBtn = document.querySelector("#nav-btn");
const navBtnImg = document.querySelector("#nav-btn-img");

naBtn.addEventListener("click", function () {
  if (nav.classList.toggle("open")) {
    navBtnImg.src = "./img/icons/nav-close.svg";
  } else {
    navBtnImg.src = "./img/icons/nav-open.svg";
  }
});

AOS.init({
  /*disable: "mobile",*/
  once: true,
});
