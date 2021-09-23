"use strict";

const body = document.querySelector(".js_body");
const face = document.querySelector(".js_face");
const select = document.querySelector(".js_select");
const button = document.querySelector(".js_btn");

function changeMood() {
  face.innerHTML = select.value;
  let number = getRandom(101);

  if (number % 2 == 0) {
    body.classList.remove("sad");
    body.classList.add("happy");
  } else {
    body.classList.remove("sad");
    body.classList.add("happy");
  }
  console.log(number);
}

function getRandom() {
  return Math.floor(Math.random() * 101);
}

function changeColor() {
  // changeMood();
  // let numberRandom = getRamdom();
  changeMood(numberRandom);
}

button.addEventListener("click", changeMood);
