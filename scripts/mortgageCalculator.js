// we are saving the submit button for later use
let submitButton = document.querySelector("#submitMortgage");

// this line runs the init function once the page has finished loading
window.onload = init;

function init() {
    submitButton.addEventListener("click", mortgage);
}

function mortgage() {
    // taking and saving user input
    let principal = document.querySelector("#mortgagePrincipal").value;
    let interestRate = document.querySelector("#mortgageInterestRate").value;
    let loanLength = document.querySelector("#mortgageLoanLength").value;

    // saving modified user input for convenience
    let loanLengthInMonths = loanLength * 12;
    let interestRateMonthly = ((interestRate / 100) / 12);

    let monthlyPayment = principal * ((interestRateMonthly) / (1 - (1 / ((1 + interestRateMonthly) ** loanLengthInMonths))));
    let totalAmount = monthlyPayment * loanLengthInMonths;
    let interestAmount = totalAmount - principal;

    // rounding our answers to avoid fractional cents
    monthlyPayment = monthlyPayment.toFixed(2);
    interestAmount = interestAmount.toFixed(2);

    let answer = `A $${principal} loan at ${interestRate}% interest for ${loanLength} years would have a $${monthlyPayment}/mo payment with a total interest of $${interestAmount}`
    document.querySelector("#mortgageAnswer").innerHTML = answer;
}