'use strict';

console.log("number_one.value");

let numberone = document.getElementById('number_one');
let numbertwo = document.getElementById('number_two');
const clear = document.getElementById('clear');


function init() {
    numberone.value = null;
    numbertwo.value = null;
    document.getElementById("result").value = null;

}
function operator(value) {
    let res = `${numberone.value}${value}${numbertwo.value}`;
    document.getElementById("result").value = eval(res);
}

clear.addEventListener('click', () => {
    init();
})