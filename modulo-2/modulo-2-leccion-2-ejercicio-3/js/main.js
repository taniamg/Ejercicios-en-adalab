"use strict";
const js_kiwi = 5;
const js_pear = 2;
const js_grape = 4;
const fruitTotal = 5 * 2 + 2 * 3 + 4 / 2;
const totalAmount = document.querySelector(".total");

totalAmount.innerHTML = totalAmount.innerHTML + fruitTotal + "€";
