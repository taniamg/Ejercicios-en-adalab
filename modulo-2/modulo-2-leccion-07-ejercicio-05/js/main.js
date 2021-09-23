"use strict";

let numbers = [15, 25, 35, 45, 55];

let sum = 0;
for (let i = 0; i < 5; i++) {
  sum += numbers[i];
}

let media = sum / 5;

console.log("la media de 5 es =", media);

// segunda parte

numbers = [32, 26, 48, 73, 55, 89];

sum = 0;
for (let i = 0; i <= 5; i++) {
  sum += numbers[i];
}

media = sum / 6;
console.log("la media de 6 es =", media);

// tercera parte
