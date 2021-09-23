'use strict';

const marks = [ 5, 4, 6, 7, 9];
const newMark = mark => mark+1;
const allHappies = marks.map(newMark);

console.log(allHappies);