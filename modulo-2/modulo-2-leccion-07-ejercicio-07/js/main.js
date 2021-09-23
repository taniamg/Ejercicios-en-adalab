"use strict";

const jobs = {
  DESIGN: "diseñadora",
  CHEMICALENGINEER: "ingeniera química",
  JOURNALIST: "periodista",
  ACTRESS: "actriz",
};

const adalabers = [
  {
    name: "Maria",
    age: 29,
    job: jobs.DESING,
  },
  {
    name: "Lucía",
    age: 31,
    job: jobs.CHEMICALENGINEER,
  },
  {
    name: "Susana",
    age: 34,
    job: jobs.JOURNALIST,
  },
  {
    name: "Rocío",
    age: 25,
    job: jobs.ACTRESS,
  },
  {
    name: "Inmaculada",
    age: 25,
    job: jobs.DESING,
  },
  {
    name: "Tania",
    age: 20,
    job: jobs.DESING,
  },
];

function countAdalabers(param) {
  if (Array.isArray(param)) {
    console.log("countAdalabers -> " + param.length);
  } else {
    console.log("Dato erroneo");
  }
}

function averageAge(param) {
  if (Array.isArray(param)) {
    let sum = 0;

    for (const adalaber of param) {
      sum += adalaber.age;
    }

    let media = sum / param.length;

    console.log("averageAge ->" + media);
  } else {
    console.log("Dato erroneo");
  }
}

function theYoungest(param) {
  if (Array.isArray(param)) {
    const youngest = param.reduce(function (previous, current) {
      return previous.age < current.age ? previous : current;
    });
    console.log("youngest ->" + youngest.name);
  } else {
    console.log("Dato erroneo");
  }
}

function countDesigners(param) {
  if (Array.isArray(param)) {
    const desingers = param.filter(checkDesingJob);
    console.log("diseñadoras ->" + desingers.length);
  } else {
    console.log("Dato erroneo");
  }
}

function checkDesingJob(adalaber) {
  return adalaber.job == jobs.DESING;
}

//
countAdalabers(adalabers);
countAdalabers(3);
countAdalabers("Prueba");
averageAge(adalabers);

theYoungest(adalabers);
countDesigners(adalabers);
