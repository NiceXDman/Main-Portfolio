let navbar = document.querySelector(".navbar");
let Toggle = document.querySelector(".navtoggle");
let Hamburger = document.querySelector(".hamtoggle");
const menutoggle = document.querySelector(".navtoggles .navinput");
const Card1 = document.querySelector(".card1");
const Card2 = document.querySelector(".card2");
const Card3 = document.querySelector(".card3");
const Card4 = document.querySelector(".card4");
const Card5 = document.querySelector(".card5");
const Card6 = document.querySelector(".card6");
const Card7 = document.querySelector(".card7");
// NAVBAR
Toggle.onclick = function () {
  navbar.classList.toggle("active");
  Toggle.classList.toggle("active");
};
Hamburger.onclick = function () {
  navbar.classList.toggle("active");
};
Card1.onclick = function () {
  Card1.classList.toggle("flip");
};
Card2.onclick = function () {
  Card2.classList.toggle("flip");
};
Card3.onclick = function () {
  Card3.classList.toggle("flip");
};
Card4.onclick = function () {
  Card4.classList.toggle("flip");
};
Card5.onclick = function () {
  Card5.classList.toggle("flip");
};
Card6.onclick = function () {
  Card6.classList.toggle("flip");
};
Card7.onclick = function () {
  Card7.classList.toggle("flip");
};
// slide button
const initSlider = () => {
  const slidebutton = document.querySelectorAll(".slidebutton1");
  const slidebutton1 = document.querySelectorAll("#prevslide1");
  const imglist1 = document.querySelector("#list1");
  const maxscrollleft = imglist1.scrollWidth - imglist1.clientWidth;
  slidebutton.forEach((button) => {
    button.addEventListener("click", () => {
      const direction = button.id === "prevslide1" ? -0.5 : 0.5;
      const scrollamout = imglist1.clientWidth * direction;
      imglist1.scrollBy({ left: scrollamout, behavior: "smooth" });
    });
  });
};
window.addEventListener("load", initSlider);
const initSlider1 = () => {
  const slidebutton = document.querySelectorAll(".slidebutton2");
  const slidebutton2 = document.querySelectorAll("#prevslide2");
  const imglist2 = document.querySelector("#list2");
  const maxscrollleft = imglist2.scrollWidth - imglist2.clientWidth;
  slidebutton.forEach((button) => {
    button.addEventListener("click", () => {
      const direction = button.id === "prevslide2" ? -0.5 : 0.5;
      const scrollamout = imglist2.clientWidth * direction;
      imglist2.scrollBy({ left: scrollamout, behavior: "smooth" });
    });
  });
};
window.addEventListener("load", initSlider1);

let Section = document.querySelectorAll("section");

window.onscroll = () => {
  Section.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop;
    let height = sec.offsetHeight;

    if (top >= offset && top < offset + height) {
      sec.classList.add("show");
    } else {
      sec.classList.remove("show");
    }
  });
};
