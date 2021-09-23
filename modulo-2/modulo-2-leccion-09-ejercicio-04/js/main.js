"use strict";

const tasks = [
  { name: "Recoger setas en el campo", completed: true },
  { name: "Comprar pilas", completed: true },
  { name: "Poner una lavadora de blancos", completed: true },
  {
    name: "Aprender cómo se realizan las peticiones al servidor en JavaScript",
    completed: false,
  },
];

/* crear html*/
const body = document.querySelector("body");
body.innerHTML = `<p>Número de tareas: ${tasks.length}</p>`;
body.innerHTML += '<p class="message"><p>';
body.innerHTML += '<ul class="list"></ul>';
let list = document.querySelector(".list");

/*incluir elementos listas*/
for (let i = 0; i < tasks.length; i++) {
  // Pinta el elemento en pantalla
  list.innerHTML += `<li>${tasks[i].name}</li>`;

  // selecciona el último item pintado, que es el que acabamos de pintar y lo guardaos en una variable
  let item = list.querySelector("li:last-child");

  // |--> Si la tarea está completada, añadirle el estilo "done" al último elemento (que es el que estamos analizando en esta vuelta de loop)
  if (tasks[i].completed === true) {
    item.classList.add("done");

    const checkboxTrue = `<input type="checkbox" checked class="completed">`;

    //Añádeselo al final del elemento li (que está completado!)
    item.innerHTML += checkboxTrue;
  } else {
    // Crea elemento checkboxFalse que  NO aparece marcado como hecho
    const checkboxFalse = `<input type="checkbox" class="not-completed">`;
    //Añádeselo al final del elemento li (que NO está completado!)
    item.innerHTML += checkboxFalse;
  }
}

// Parte de actualizar el valor de completed (trye/false) del objeto y añadirle done a las tareas cuando hacemos click en un checklist:

// Necesitamos actualizar el valor
// Creamos array que contiene todos los elementos checkbox de la lista:
const checkbox = document.querySelectorAll("input[type=checkbox]");

// Creamos la función handler que actualizará el estatus de las tareas:
function updateStatus() {
  // Creo array con todos los items de la lista (li) de esta manera tengo ahora 3 arrays:
  // el de objetos, el de checkbox y el de items y puedo utilizar un loop para actualizar todos la mismo
  // tiempo ya que todos tendrian el mismo index (i) en cada vuelta
  const listItems = document.querySelectorAll("li");

  for (let i = 0; i < checkbox.length; i++) {
    if (checkbox[i].checked === true) {
      tasks[i].completed = true;
      listItems[i].classList.add("done");
    } else {
      tasks[i].completed = false;
      listItems[i].classList.remove("done");
    }
  }

  // Parte última de mostrar mensaje arriba de las tareas que nos quedan por hacer:
  // Ahora hacemos referencia al párrafo que creamos al principio con clase message
  let message = document.querySelector(".message");

  // Las tareas hechas es un array con todos los checkbox que están checked (su length, o número de items)
  let completedTasks = document.querySelectorAll(
    'input[type="checkbox"]:checked'
  ).length;

  // Las tareas por hacer son la length de checkbox (si recuerdas, es un array con el número total de checboxes)
  // menos las tareas completadas
  let todoTasks = parseInt(checkbox.length) - parseInt(completedTasks);

  // Actualizamos mensaje
  message.innerHTML = `Tienes ${checkbox.length} tareas. ${completedTasks} completadas y ${todoTasks} por realizar.`;
}

// Creamos un loop para asignarle a cada checkbox un event listener que ejecutará la función
for (let i = 0; i < checkbox.length; i++) {
  checkbox[i].addEventListener("change", updateStatus); // busca el change event en MDN!
}

// Llamo a la función de updateStatus nada más recargar la página para que actualice la parte de cuántas tareas
// hay completadas, por hacer y hechas, si no, el párrafo aparecería vacío.
updateStatus();
