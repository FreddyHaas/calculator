let numberOne = 0;
let numberTwo = 0;
let mathOperator = 0;

/* Display inputs */
const displayLarge = document.getElementById('displayLarge');
const displaySmall = document.getElementById('displaySmall');

function displayOperation () {
    if (numberOne === 0 && mathOperator === 0 && numberTwo === 0) {
        displaySmall.style.color ='white';
        displayLarge.textContent = `${numberOne}`;
    }
    if (numberOne !== 0 && mathOperator === 0) {
        displayLarge.textContent = `${numberOne}`;
        displaySmall.style.color = `white`;
    }
    if (numberOne !==0 && mathOperator !== 0) {
        displaySmall.textContent = `${numberOne} ${mathOperator}`;
        displaySmall.style.color = 'black';
        displayLarge.textContent = `${numberOne}`;
    }
    if (numberOne !== 0 && mathOperator !== 0 && numberTwo !== 0) {
        displayLarge.textContent = `${numberTwo}`;
    }
};

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
        console.log(`NumberOne:${numberOne}; mathOperator:${mathOperator}; NumberTwo:${numberTwo}`);
        displayOperation ();
})});

const operators = document.querySelectorAll('#operator');
operators.forEach((operator) => { 
    operator.addEventListener ('click', () => {
        mathOperator = operator.textContent;
        console.log(`NumberOne:${numberOne}; mathOperator:${mathOperator}; NumberTwo:${numberTwo}`);
        displayOperation ();
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

/* Initiate mathematical operation upon clicking "=" and show result*/

const equal = document.querySelector ('#equal');
equal.addEventListener ('click', () => {
    displayLarge.textContent = `${operate(numberOne, mathOperator, numberTwo)}`;
    displaySmall.textContent = `${numberOne} ${mathOperator} ${numberTwo}`;
    console.log (`Result: ${operate(numberOne, mathOperator, numberTwo)}`);
});

/* Clear inputs and display */

const clear = document.querySelector ('#clear');
clear.addEventListener ('click', () => {
    numberOne = 0;
    numberTwo = 0; 
    mathOperator = 0;
    displaySmall.style.color = 'white';
    displayLarge.textContent = 0;
    console.log(`NumberOne:${numberOne}; mathOperator:${mathOperator}; NumberTwo:${numberTwo}`)
});

/* Delete function */

function deleteLastFigure (number) {
    number = number.toString();
    if (number.length === 1) {
        return 0;
    }
    return parseInt (number.slice(0,number.length-1));
}

const del = document.querySelector ('#delete');
del.addEventListener ('click', () => {
    if (numberOne !== 0 && mathOperator === 0 && numberTwo === 0) {
        numberOne = deleteLastFigure (numberOne);
        displayOperation ();
        console.log(`NumberOne:${numberOne}; mathOperator:${mathOperator}; NumberTwo:${numberTwo}`);
    };
    if (numberOne !== 0 && mathOperator !== 0 && numberTwo === 0) {
        mathOperator = 0;
        displayOperation ();
        console.log(`NumberOne:${numberOne}; mathOperator:${mathOperator}; NumberTwo:${numberTwo}`);
    };
    if (numberOne !== 0 && mathOperator !== 0 && numberTwo !== 0) {
        numberTwo = deleteLastFigure (numberTwo);
        displayOperation ();
        console.log(`NumberOne:${numberOne}; mathOperator:${mathOperator}; NumberTwo:${numberTwo}`);
    };
});