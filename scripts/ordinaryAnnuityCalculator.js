"use strict"
// we are saving the submit button for later use
let submitButton = document.querySelector("#submitOrdinaryAnnuity");
let resetButton = document.querySelector("#resetOrdinaryAnnuity");

// this line runs the init function once the page has finished loading
window.onload = init;

function init() {
    submitButton.addEventListener("click", ordinaryAnnuity);
    resetButton.addEventListener("click", reset);
}

function ordinaryAnnuity(event) {
    event.preventDefault();
    // taking and saving user input
    let monthlyPayout = Number(document.querySelector("#ordinaryAnnuityMonthlyPayout").value);
    let interestRate = Number(document.querySelector("#ordinaryAnnuityInterestRate").value);
    let years = Number(document.querySelector("#ordinaryAnnuityLengthOfTime").value);

    // saving modified user input for convenience
    // 12 compundings per year because it's done monthly
    let compoundingsPerYear = 12;
    let interestRateDecimal = (interestRate / 100);

    let presentValue = monthlyPayout * ((1 - ((1 + (interestRateDecimal / 12)) ** -(years * compoundingsPerYear))) / (interestRateDecimal / compoundingsPerYear));

    // rounding our answers to avoid fractional cents
    presentValue = presentValue.toFixed(2);

    let answer = `To fund an annuity that pays $${monthlyPayout} monthly for ${years} years and earns and expected ${interestRate}% interest, you would need to invest $${presentValue} today.`
    document.querySelector("#ordinaryAnnuityAnswer").innerHTML = answer;
}

function reset() {
    document.querySelector("#ordinaryAnnuityAnswer").innerHTML = null;
}