"Use strict"
console.log("It is working :^)");

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
}

function add() {
    let number1 = Number(document.querySelector("#number1Field").value);
    let number2 = Number(document.querySelector("#number2Field").value);

    let result = number1 + number2;

    document.querySelector("#answerField").value = result;
}

function subtract() {
    let number1 = Number(document.querySelector("#number1Field").value);
    let number2 = Number(document.querySelector("#number2Field").value);

    let result = number1 - number2;

    document.querySelector("#answerField").value = result;
}

function multiply() {
    let number1 = Number(document.querySelector("#number1Field").value);
    let number2 = Number(document.querySelector("#number2Field").value);

    let result = number1 * number2;

    document.querySelector("#answerField").value = result;
}

function divide() {
    let number1 = Number(document.querySelector("#number1Field").value);
    let number2 = Number(document.querySelector("#number2Field").value);

    let result = number1 / number2;

    document.querySelector("#answerField").value = result;
}