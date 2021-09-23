"use strict";

const lostNumbers = [4, 8, 15, 16, 23, 42];

function bestLostNumbers(lostElement) {
  let pairLostNumbers = [];
  let tripleLostNumbers = [];
  let newLostNumbers = [];

  for (const number of lostElement) {
    if (number % 2 === 0) {
      pairLostNumbers.push(number);
    }
    if (number % 3 === 0) {
      tripleLostNumbers.push(number);
    }
  }

  newLostNumbers = pairLostNumbers.concat(tripleLostNumbers);
  console.log(pairLostNumbers);
  console.log(tripleLostNumbers);
  console.log(newLostNumbers);
}

bestLostNumbers(lostNumbers);
