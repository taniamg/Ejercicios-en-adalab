'use strict';

const breedName = document.querySelector('#breed-name');
const breedImage = document.querySelector('#breed-image');
const breedContainer = document.querySelector('#breed-container');

function getNumber() {
    fetch('https://api.rand.fun/number/integer?max=90')
      .then(response => response.json())
      .then(data => {
      let number = data.result;
      return fetch ('https://dog.ceo/api/breeds/list/all')
      .then(response => response.json())
      .then(data => {
        const breeds = Object.keys(data.message);
        const breed = breeds[number];
        return fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
        .then(response => response.json())
        .then(data => {
          breedName.innerHTML = breed;
          breedImage.src = data.message;
        })
      })
      });
}

document.addEventListener("click", getNumber);