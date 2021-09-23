"use strict";

let arr = [];

function get100Numbers() {
  for (let i = 1; i <= 100; i++) {
    console.log(arr.push(i));
  }
}
get100Numbers();
console.log(arr);

function getReversed100Numbers() {
  console.log(arr.reverse());
}
getReversed100Numbers();
