/* Prompt user for input */

let numberOne = 0;
let numberTwo = 0;
let mathOperator = 0;

/* Update and store input */

function updateStorage (numberStorage, currentNumber) {
    numberStorage += currentNumber;
        numberStorage = parseInt(numberStorage);
        return numberStorage;
}

function storeNumber (currentNumber) {
    if (numberOne != 0 && mathOperator !=0) {
        return numberTwo = updateStorage (numberTwo, currentNumber);
    }
    return numberOne = updateStorage (numberOne, currentNumber);
}

const numbers = document.querySelectorAll('#number');
numbers.forEach((number) => {
    number.addEventListener ('click', () => {
        let currentNumber = number.textContent;
        storeNumber (currentNumber);
        console.log(`NumberOne:${numberOne}; mathOperator:${mathOperator}; NumberTwo:${numberTwo}`)
})});

const operators = document.querySelectorAll('#operator');
operators.forEach((operator) => { 
    operator.addEventListener ('click', () => {
        mathOperator = operator.textContent;
        console.log(`NumberOne:${numberOne}; mathOperator:${mathOperator}; NumberTwo:${numberTwo}`)
    })
})

/* Perform mathematical operation */

function add (a,b) {
    return a + b;
}

function subtract (a,b) {
    return a - b;
}

function multiply(a,b) {
    return a * b;
}

function divide(a,b) {
    return a / b;
}

/* Select corret mathematical operation and initiate respective function */

function operate (numberOne, mathOperator, numberTwo) {
    if (mathOperator === "+") {
        return add(numberOne,numberTwo);
    }
    if (mathOperator === "-") {
        return subtract(numberOne,numberTwo);
    }
    if (mathOperator === "x") {
        return multiply(numberOne,numberTwo);
    }
    if (mathOperator === "÷") {
        return divide(numberOne,numberTwo)
    }
}

/* Initiate mathematical operation upon clicking "=" */

const equal = document.querySelector ('#equal');
equal.addEventListener ('click', () => {
    console.log (`Result: ${operate(numberOne, mathOperator, numberTwo)}`);
});

/* Clear function */

const clear = document.querySelector ('#clear');
clear.addEventListener ('click', () => {
    numberOne = 0;
    numberTwo = 0; 
    mathOperator = 0;
    console.log(`NumberOne:${numberOne}; mathOperator:${mathOperator}; NumberTwo:${numberTwo}`)
});