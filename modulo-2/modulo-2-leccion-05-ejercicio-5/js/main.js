"use strict";

const keyColor = document.body;

function changeColor(event) {
  if (event.key === "r") {
    keyColor.classList.add("color1");
    keyColor.classList.remove("color2");
  } else if (event.key === "m") {
    keyColor.classList.add("color2");
    keyColor.classList.remove("color1");
  }
}

keyColor.addEventListener("keyup", changeColor);
