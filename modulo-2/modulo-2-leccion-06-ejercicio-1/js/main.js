"use strict";

// function adalaber(name, age, job) {
//   this.name : name;
//   this.age =:age;
//   this.job : job;
// }

// const adalaber1 = new adalaber("Susana", "34", "periodista");

// const adalaber2 = new adalaber("Rocio", "25", "actriz");

const adalaber1 = {
  name: "Susana",
  age: 34,
  job: "periodista",
};
const adalaber2 = {
  name: "Rocio",
  age: 25,
  job: "actriz",
};

const text = document.querySelector(".text");
const addText = document.querySelector(".text");

text.innerHTML = `Mi nombre es ${adalaber1.name}, tengo ${adalaber1.age} años y soy ${adalaber1.job}`;

text.innerHTML = `Mi nombre es ${adalaber2.name}, tengo ${adalaber2.age} años y soy ${adalaber2.job}`;
