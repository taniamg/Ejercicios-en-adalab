"use strict";

function getEl(selector) {
  const newJsquery = document.querySelector(selector);
  return newJsquery;
}

function number(num) {
  return num;
}
const numResult = number(20);
if (numResult % 2 === 0) {
  console.log(`El número ${num} es par`);
} else {
  console.log(`El número ${num} es impar`);
}

const theNumber = getEl(".text");
theNumber.innerHTML = theNumber;
console.log(`tu numero : ${theNumber.innerHTML}`);
