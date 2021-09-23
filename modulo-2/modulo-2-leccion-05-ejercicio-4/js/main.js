"use strict";

const changeColor = document.querySelector(".js_textColor");
function newColor() {
  changeColor.classList.add("color1");
  console.log("change");
}

window.addEventListener("scroll", newColor);
