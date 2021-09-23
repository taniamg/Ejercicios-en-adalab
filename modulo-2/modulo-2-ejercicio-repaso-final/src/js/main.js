"use strict";

const palettesContainer = document.querySelector(".js-palettes-container");

let palettes = [];
let favorites = [];
// hay que hacer un evento que al señalar ponga un color distinto señalandolo como favorito
function handlePalette(ev) {
  console.log(ev.currentTarget.id);
  const selectedPalette = ev.currentTarget.id;
  const objectClicked = palettes.find((palette) => {
    return palette.id === selectedPalette;
  });

  // si devuelve -1 no se enuentra sino devuelve la posicion
  const favoritesFound = favorites.findIndex((fav) => {
    return fav.id === selectedPalette;
  });

  if (favoritesFound === -1) {
    favorites.push(objectClicked);
  } else {
    favorites.splice(favoritesFound, 1);
  }
  console.log(favoritesFound);
  console.log(favorites);
  paintPalettes(); //llama a la funcion manejadora porque ha realizado otra vez. se invoca aquiy el fetch
}
//este evento se realiza sobre cada una de las paletas
function listenPalettes() {
  const listPalettes = document.querySelectorAll(".js-palette");
  for (const paletteEl of listPalettes) {
    paletteEl.addEventListener("click", handlePalette);
  }
}
//aquí pintamos el html y las diferentes paletas
function isFavorite() {
  const favoriteFound = favorites.find((fav) => {
    return fav.id === palette.id;
  });
  if (favoriteFound === undefined) {
    return false;
  } else {
    return true;
  }
}
function paintPalettes() {
  let html = "";
  let favClass = "";
  for (const palette of palettes) {
    const isFav = isFavorite(palette);
    if (isFav) {
      favClass = "palete--favorite";
    } else {
      favClass = "";
    }
    html += `<li class="palettes js-palette ${favClass}" id="${palette.id}">`;
    html += `<h2>${palette.name}</h2>`;
    html += `<div class="palette__colors">`;
    for (const palleteColor of palette.colors) {
      html += `<div class="palette__color" style="background-color:#${palleteColor}"></div>`;
    }
    html += `</div>`;
    html += `</li>`;
  }
  palettesContainer.innerHTML = html;
  listenPalettes();
}

fetch(
  "https://beta.adalab.es/ejercicios-extra/js-ejercicio-de-paletas/data/palettes.json"
)
  .then((response) => response.json())
  .then((data) => {
    palettes = data.palettes;
    paintPalettes();
  });
