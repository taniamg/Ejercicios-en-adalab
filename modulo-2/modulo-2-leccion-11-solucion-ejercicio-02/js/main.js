'use strict';

const search = document.querySelector ('.js_search');
const btn = document.querySelector ('.js_btn');
function findCharacter (ev){
    const textSearch = search.value;
    const url = "https://swapi.dev/api/people/?search="+textSearch;
    console.log (url);

    fetch(url)
    .then (result => result.json())
    .then ((data)=>{
        console.log(data);
        console.log (data.results[0].name);
    })
}


btn.addEventListener("click",findCharacter);