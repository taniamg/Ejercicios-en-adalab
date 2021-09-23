"use strict";
const main = document.querySelector(".js_main");

const tasks = [
  { name: "Recoger setas en el campo", completed: true },
  { name: "Comprar pilas", completed: true },
  { name: "Poner una lavadora de blancos", completed: true },
  {
    name: "Aprender cómo se realizan las peticiones al servidor en JavaScript",
    completed: false,
  },
];

for (const data of tasks) {
  if (data.completed === true) {
    const html = `<li class= "completed"> ${data.name}</li>
    <input class="checked" type="checkbox"></input>`;
    main.innerHTML += html;
  } else {
    const html = `<li > ${data.name}</li>
    <input class="checked" type="checkbox"></input>`;
    main.innerHTML += html;
  }
}

function checked(even) {
  if (data.completed === true) {
    document.querySelector("main").classList.add("cpmpleted");
  }
}

even.addEventListener("click", handlerClick);
