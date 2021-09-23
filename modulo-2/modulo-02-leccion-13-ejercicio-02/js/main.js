'use strict';

const names =['María', 'Lucía', 'Susana', 'Rocío', 'Inmaculada'];
const getGreatings = name => 'Bienvenida'+ name;
const newArray = names.map(getGreatings);

console.log (newArray);