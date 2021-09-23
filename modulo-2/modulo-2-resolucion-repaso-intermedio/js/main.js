"use strict";
const update = document.querySelector(".js_update");
const container = document.querySelector(".container");
const selectEl = document.querySelector(".js_select");
const faceEl = document.querySelector(".face");

function getRandomNumber() {
  const randomNumber = Math.round(Math.random() * 100);
  return randomNumber;
}

function updateBackground() {
  /*crear numero ramndom*/
  const randomNumber = getRandomNumber();
  console.log(randomNumber);

  /*comprobar si es par o impar*/
  const restNumber = randomNumber % 2;
  if (restNumber === 0) {
    container.classList.add("background-Y");
    container.classList.remove("background-n");
  } else {
    container.classList.add("background-n");
    container.classList.remove("background-Y");
  }
}

function updateFace() {
  const selectValue = selectEl.value;
  faceEl.innerHTML = selectValue;
}
/*llamar funciones*/
function handleUpdateBtn() {
  updateBackground();
  updateFace();
  //   console.log(":)");
}

update.addEventListener("click", handleUpdateBtn);
