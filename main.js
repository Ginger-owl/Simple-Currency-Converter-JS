//Variables
let input = require('sync-input');
let currencies = {"USD": 1, "JPY": 113.5, "EUR": 0.89,  "RUB": 74.36, "GBP": 0.75};
let fromCurrency = null;
let toCurrency = null;
let toAmount = null;
let choice = null;
let notFinished = true;


//functions
function findRate(toCur, fromCur) {
    return currencies[toCur]/currencies[fromCur]
}

function checkNames(currencyName) {
    if (!(currencyName in currencies)) {
        console.log("Unknown currency");
        baseLoop();
    }
}

function greetMenu() {
    console.log("Welcome to Currency Converter!");
    for (let currency in currencies) {
        console.log(`1 USD equals  ${currencies[currency]} ${currency}`);
    }
}

function promptInput() {
    console.log(`What do you want to convert?`);
    fromCurrency = input("From: ").toUpperCase();
    checkNames(fromCurrency);

    toCurrency = input("To: ").toUpperCase();
    checkNames(toCurrency);

    toAmount = Number(input("Amount: "));
    checkNumber(toAmount);

}

function checkNumber(number) {
    if (!Number.isInteger(number)) {
        console.log("The amount has to be a number");
        baseLoop();
    }

    if (number < 1) {
        console.log("The amount can not be less than 1");
        baseLoop();
    }

}

function displayResult() {
    console.log(`Result: ${toAmount} ${fromCurrency} equals ${(toAmount * findRate(toCurrency, fromCurrency)).toFixed(4)} ${toCurrency}`)
}

function promptChoice() {
    let incorrectChoice = true;
    while (incorrectChoice) {
        console.log('What do you want to do?');
        console.log(`1-Convert currencies 2-Exit program`);
        choice = input();
        switch (choice) {
            case "1":
                incorrectChoice = false;
                break; //???
            case "2":
                console.log("Have a nice day!")
                notFinished = false;
                process.exit();
                break;
            default:
                console.log("Unknown input")
                break;
        }
    }
}

function baseLoop() {
    while (notFinished) {
        promptChoice()
        promptInput()
        displayResult()
    }
}

function main(){
    greetMenu()
    baseLoop()
}

//Execution
main()