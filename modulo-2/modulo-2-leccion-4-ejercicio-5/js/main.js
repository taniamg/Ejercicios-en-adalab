"use strict";

function getEl(selector) {
  const newJsquery = document.querySelector(selector);
  return newJsquery;
}

const containerEl = getEl(".container");
console.log(containerEl);

const titlEl = getEl(".title");
console.log(titlEl);

const imagEl = getEl(".image");
console.log(imagEl);

const paragraphEl = getEl(".paragraph");
console.log(paragraphEl);
