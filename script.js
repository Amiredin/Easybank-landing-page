"use strict";

const hamburger = document.querySelector(".hamburger");
const overlay = document.querySelector(".overlay");
const mobileNav = document.querySelector(".mobile-nav");

console.log(overlay);

hamburger.addEventListener("click", function () {
  mobileNav.classList.remove("hidden");
  overlay.classList.remove("hidden");
});


overlay.addEventListener("click", function () {
  mobileNav.classList.add("hidden");
  overlay.classList.add("hidden");
});
