'use strict';

function getRandonNumber (){
    fecth ('https://api.rand.fun/number/integer')
    .then(response => response.json ())
    .then ( function(data){
        document.querySelector('.js_result').innerHTML = data.result;
    });
}
document.querySelector('.js_number').addEventListener('click', getRandonNumber);