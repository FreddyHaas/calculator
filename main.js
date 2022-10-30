/* Prompt user for input

let numberOne = parseInt(prompt("Input first number"));
let mathOperator = prompt('Input "+", "-", "x" or ":"');
let numberTwo = parseInt(prompt("Input second number"));

console.log(mathOperator);

/ Perform mathematical operation /

function add (a,b) {
    return a + b;
}
console.log(add(numberOne,numberTwo));

function subtract (a,b) {
    return a - b;
}
console.log(subtract(numberOne,numberTwo));

function multiply(a,b) {
    return a * b;
}

function divide(a,b) {
    return a / b;
}

/ Select corret mathematical operation and initiate respective function /

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
    if (mathOperator === ":") {
        return divide(numberOne,numberTwo)
    }
}

console.log(operate(numberOne, mathOperator, numberTwo));

*/