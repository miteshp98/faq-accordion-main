"use strict";

document.addEventListener("DOMContentLoaded", function () {
  const expandButtons = document.querySelectorAll(".expand");

  expandButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      const answer = button.nextElementSibling;
      const icon = button.lastElementChild;

      answer.classList.toggle("hidden");
      icon.src = answer.classList.contains("hidden")
        ? "assets/images/icon-plus.svg"
        : "assets/images/icon-minus.svg";
    });
  });
});
