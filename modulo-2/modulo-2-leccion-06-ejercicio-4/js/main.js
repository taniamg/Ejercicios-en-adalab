"use strict";

const buttonElement = document.querySelector(".js_button");

function handleListen(event) {
  console.log(event);
}

buttonElement.addEventListener("click", handleListen);
