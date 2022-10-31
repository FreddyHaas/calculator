let numberOne = 0;
let numberTwo = 0;
let mathOperator = 0;
let resultShown = 0;

/* Update, store and display inputs */
const displayLarge = document.getElementById('displayLarge');
const displaySmall = document.getElementById('displaySmall');

function displayOperation () {
    if (resultShown === 0) {
        if (numberOne === 0 && mathOperator === 0 && numberTwo === 0) {
            displaySmall.style.color = 'white';
            displayLarge.textContent = `${numberOne}`;
        }
        if (numberOne !== 0 && mathOperator === 0 && numberTwo === 0) {
            displayLarge.textContent = `${numberOne}`;
            displaySmall.style.color = `white`;
        }
        if (numberOne !==0 && mathOperator !== 0 && numberTwo === 0) {
            displaySmall.textContent = `${numberOne} ${mathOperator}`;
            displaySmall.style.color = 'black';
            displayLarge.textContent = `${numberOne}`;
        }
        if (numberOne !== 0 && mathOperator !== 0 && numberTwo !== 0) {
            displayLarge.textContent = `${numberTwo}`;
    }}
    if (resultShown === 1) {
            displayLarge.textContent = `${operate(numberOne, mathOperator, numberTwo)}`;
            displaySmall.textContent = `${numberOne} ${mathOperator} ${numberTwo}`;
            console.log (`Result: ${operate(numberOne, mathOperator, numberTwo)}`);
    }};

function updateStorage (numberStorage, currentNumber) {
    numberStorage += currentNumber;
        numberStorage = parseInt(numberStorage);
        return numberStorage;
}

function storeNumber (currentNumber) {
    if (numberOne === 0 && mathOperator === 0 && numberTwo === 0) {
        return numberOne = updateStorage (numberOne, currentNumber);
    }
    if (numberOne !== 0 && mathOperator === 0 && numberTwo === 0) {
        return numberOne = updateStorage (numberOne, currentNumber);
    }
    if (numberOne !==0 && mathOperator !== 0 && resultShown === 0) {
        return numberTwo = updateStorage (numberTwo, currentNumber);
    }
    if (numberOne !==0 && mathOperator !== 0 && numberTwo !== 0 && resultShown === 1) {
        resetAllValues ();
        return numberOne = updateStorage (numberOne, currentNumber);
    }
}

const numbers = document.querySelectorAll('#number');
numbers.forEach((number) => {
    number.addEventListener ('click', () => {
        let currentNumber = number.textContent;
        storeNumber (currentNumber);
        displayOperation ();
        console.log(`NumberOne:${numberOne}; mathOperator:${mathOperator}; NumberTwo:${numberTwo}`);
})});

/* Update variable for operator OR initiate result when operator is clicked and two numbers are already entered */

const operators = document.querySelectorAll('#operator');
operators.forEach((operator) => { 
    operator.addEventListener ('click', () => {
        if (numberOne === 0 && mathOperator === 0 && numberTwo === 0) {
            console.log(`NumberOne:${numberOne}; mathOperator:${mathOperator}; NumberTwo:${numberTwo}`);
        }
        if (numberOne !== 0 && numberTwo === 0) {
            mathOperator = operator.textContent;
            displayOperation ();
            console.log(`NumberOne:${numberOne}; mathOperator:${mathOperator}; NumberTwo:${numberTwo}`);
        }
        if (numberOne !== 0 && mathOperator !== 0 && numberTwo !== 0) {
            showResult ();
            numberOne = operate(numberOne, mathOperator, numberTwo);
            numberTwo = 0;
            mathOperator = operator.textContent;
            console.log(`NumberOne:${numberOne}; mathOperator:${mathOperator}; NumberTwo:${numberTwo}`);
        }})});

/* Delete last input */

function deleteLastFigure (number) {
    number = number.toString();
    if (number.length === 1) {
        return 0;
    }
    return parseInt (number.slice(0,number.length-1));
};

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

/* Select corret mathematical operation and initiate respective function */

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

/* Show results */

const equal = document.querySelector ('#equal');
equal.addEventListener ('click', () => {
    if (numberOne !== 0 && mathOperator !== 0 && numberTwo !== 0) {
        resultShown = 1;
        displayOperation ();
    }
});

/* Clear inputs and display */

const clear = document.querySelector ('#clear');
clear.addEventListener ('click', () => {
    resetAllValues ();
    displayOperation ();
    console.log(`NumberOne:${numberOne}; mathOperator:${mathOperator}; NumberTwo:${numberTwo}`)
});

function resetAllValues () {
    numberOne = 0;
    numberTwo = 0; 
    mathOperator = 0;
    resultShown = 0;
    displayLarge.textContent = 0;
}
