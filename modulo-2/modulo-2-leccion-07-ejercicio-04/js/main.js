"use strict";
let currentYear = 2017;
let hunterMoon = [];

for (let i = 0; i < 15; i++) {
  currentYear += 3;
  hunterMoon[i] = currentYear;
}

console.log("las siguientes 15 lunas de cazador seran los años:" + hunterMoon);
