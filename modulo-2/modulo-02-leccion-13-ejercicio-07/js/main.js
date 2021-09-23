'use strict';

const times = [56, 9, 45, 28, 35];
const newTimes = times.reduce ((acc, number) => acc + number/2 );
console.log (newTimes);