// we are saving the submit button for later use
let submitButton = document.querySelector("#submitCD");

// this line runs the init function once the page has finished loading
window.onload = init;

function init() {
    submitButton.addEventListener("click", cd);
}

function cd() {
    // taking and saving user input
    let deposit = document.querySelector("#cdDeposit").value;
    let interestRate = document.querySelector("#cdInterestRate").value;
    let lengthOfTime = document.querySelector("#cdLengthOfTime").value;

    // saving modified user input for convenience
    let interestRateDecimal = (interestRate / 100);

    // why 365.25? because leap years
    const daysInAYear = 365.25;

    totalValue = deposit * ((1 + (interestRateDecimal / daysInAYear)) ** (daysInAYear * lengthOfTime));

    // rounding our answers to avoid fractional cents
    totalValue = totalValue.toFixed(2);
    let interestValue = (totalValue - deposit).toFixed(2);

    let answer = totalValue;
    answer = `If you deposit $${deposit} in a CD that earns ${interestRate}% interest and matures in ${lengthOfTime} year(s), your CD's ending balance will be $${totalValue} and you would have earned $${interestValue} in interest`
    document.querySelector("#cdAnswer").innerHTML = answer;
}