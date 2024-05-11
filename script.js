"use strict";

const expand = document.querySelectorAll(".expand");
const faqAnswer = document.querySelector(".hidden");
const icon = document.querySelector(".icon");

function expandMore() {
  faqAnswer.classList.remove("hidden");
  icon.setAttribute("src", "assets/images/icon-minus.svg");
}

function expandLess() {
  faqAnswer.classList.add("hidden");
  icon.setAttribute("src", "assets/images/icon-plus.svg");
}

expand.forEach((item) => {
  item.addEventListener("click", expandMore);
});

expand.forEach((item) => {
  item.removeEventListener("click", expandLess);
});
