"use strict";

const dogAge = 5;

if (dogAge === 1) {
  console.log(`Tu perro tiene 15 años humanos`);
} else if (dogAge === 2) {
  console.log(`tu perro tiene ${15 + 9}años humanos`);
} else {
  console.log(`tu perro tiene ${15 + 9 + (dogAge - 2) * 5} años humanos`);
}
