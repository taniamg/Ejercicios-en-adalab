"use strict";

const adalaber1 = {
  name: "Susana",
  age: 34,
  job: "periodista",
};

adalaber1.showBio = function () {
  return (
    "mi nombre es" + this.name + ",tengo" + this.age + "años y soy" + this.job
  );
};
console.log(adalaber1.showBio());

// const text = document.querySelector(".text");

// text.innerHTML = `Mi nombre es ${adalaber1.name}, tengo ${adalaber1.age} años y soy ${adalaber1.job}`;
