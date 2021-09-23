'use strict';

const userDataChoice = [
{
    name : 'Manuela',
    lastName : 'González',
    phone : 666333555,
},
{
    name : 'Iris',
    lastName : 'Martín',
    phone : 777222444,   
},
{
    name : 'Carlota',
    lastName : 'Martín',
    phone : 666111444,   
}

];

const select = document.querySelector ('.js-select');
const input = document.querySelectorAll ('.js-input');

function fillGaps (ev) {
    debugger
    for (let i= 0; i< userDataChoice.length; i++){
        if (ev.currentTarget.value === userDataChoice[i].name){
            input[0].value = userDataChoice[i].name;
            input[1].value = userDataChoice[i].lastName;
            input[2].value = userDataChoice[i].phone;
        }
    }
}

select.addEventListener('change', fillGaps);