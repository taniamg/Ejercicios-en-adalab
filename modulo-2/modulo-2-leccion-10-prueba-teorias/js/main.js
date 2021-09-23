'use strict';
function getEmoji(){
fetch('https://api.rand.fun/games/rockpaperscissorslizardspock')
.then(function(response) {
    return response.json();
})
.then (function(data){
    document.querySelector('.js_result').innerHTML = data.result;
});
}
document.querySelector('.js_emoji').addEventListener('click', getEmoji);

//explicacion JSON
function getDogImage (){
fetch ('https://dog.ceo/api/breeds/image/random')
.then( response => response.json())

.then( data => {
    const img=document.querySelector('img');
    img.src = data.message;
    img.alt = 'un perro';
});
}
const btn = document.querySelector('.js-dog');
btn.addEventListener('click', getDogImage);