const firstName = "Maria";
const secondname = "Daniela";
const Surname = "Darnea";

const totalCaracteres = firstName.length + secondname.length + Surname.length;
const title = document.querySelector(".title");
title.innerHTML = `El nombre de mi compañera es ${firstName} ${secondname} ${Surname}, y está compuesto por ${totalCaracteres} caracteres.`;
