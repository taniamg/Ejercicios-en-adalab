"use strict";

const input1 = document.querySelector(".js_input1");
const input2 = document.querySelector(".js_input2");

const info = document.querySelector(".js_text");

const button = document.querySelector(".js_button");

const favourites = [];

function inputHandler() {
  favourites[0] = input1.value;
  favourites[1] = input2.value;

  console.log(favourites);
  for (const favourite of favourites) {
    console.log(
      "A mi también me encantó " +
        favourite +
        ". Tenemos mucho en común, humana!"
    );
  }
}

button.addEventListener("click", inputHandler);
