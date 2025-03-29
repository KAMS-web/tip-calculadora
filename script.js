const billInput = document.querySelector(".bill-input");
const peopleInput = document.querySelector(".people-input");
const tipPerson = document.getElementById(".tip-amount");
const totalPerPerson = document.getElementById("total-amount");

billInput.addEventListener("input", billInputFun);
peopleInput.addEventListener("input", peopleInputFun);

billInput.value = "0.0";
peopleInput.value = "1";
tipPerPerson.innerHTML = "$" + (0.0).toFixed(2);
totalPerPerson.innerHTML = "$" + (0.0).toFixed(2);

let billvalue = 0.0;
let peoplevalue = 1;

function billInputFun(){
    billvalue = parseFloat(billInput.value);
    console.log(billvalue);
}

function peopleInputFun(){
    peoplevalue = parseFloat(peopleInput.value);
}