"Use strict"
let resetButton = document.querySelector("#resetBasic");

window.onload = init;

function init() {
    const addButton = document.querySelector("#addButton");
    const subtractButton = document.querySelector("#subtractButton");
    const multiplyButton = document.querySelector("#multiplyButton");
    const divideButton = document.querySelector("#divideButton");

    addButton.addEventListener("click", add);
    subtractButton.addEventListener("click", subtract);
    multiplyButton.addEventListener("click", multiply);
    divideButton.addEventListener("click", divide);
    resetButton.addEventListener("click", reset);
}

function add(event) {
    event.preventDefault();
    let number1 = Number(document.querySelector("#number1Field").value);
    let number2 = Number(document.querySelector("#number2Field").value);

    let result = number1 + number2;

    document.querySelector("#answerField").innerHTML = result;
}

function subtract(event) {
    event.preventDefault();
    let number1 = Number(document.querySelector("#number1Field").value);
    let number2 = Number(document.querySelector("#number2Field").value);

    let result = number1 - number2;

    document.querySelector("#answerField").innerHTML = result;
}

function multiply(event) {
    event.preventDefault();
    let number1 = Number(document.querySelector("#number1Field").value);
    let number2 = Number(document.querySelector("#number2Field").value);

    let result = number1 * number2;

    document.querySelector("#answerField").innerHTML = result;
}

function divide(event) {
    event.preventDefault();
    let number1 = Number(document.querySelector("#number1Field").value);
    let number2 = Number(document.querySelector("#number2Field").value);

    let result = number1 / number2;

    document.querySelector("#answerField").innerHTML = result;
}

function reset() {
    document.querySelector("#answerField").innerHTML = null;
}