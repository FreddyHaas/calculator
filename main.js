let numberOne = null;
let numberTwo = null;
let mathOperator = null;
let resultShown = 0;

/* Update, store and display inputs */
const displayLarge = document.getElementById('displayLarge');
const displaySmall = document.getElementById('displaySmall');

function displayOperation () {
    if (resultShown === 0) {
        if (numberOne === null && mathOperator === null && numberTwo === null) {
            displaySmall.style.color = 'white';
            displayLarge.textContent = `0`;
        }
        if (numberOne !== null && mathOperator === null && numberTwo === null) {
            displayLarge.textContent = `${numberOne}`;
            displaySmall.style.color = `white`;
        }
        if (numberOne !== null && mathOperator !== null && numberTwo === null) {
            displaySmall.textContent = `${numberOne} ${mathOperator}`;
            displaySmall.style.color = 'black';
            displayLarge.textContent = `${numberOne}`;
        }
        if (numberOne !== null && mathOperator !== null && numberTwo !== null) {
            displayLarge.textContent = `${numberTwo}`;
    }}
    if (resultShown === 1) {
            displayLarge.textContent = `${operate(numberOne, mathOperator, numberTwo)}`;
            displaySmall.textContent = `${numberOne} ${mathOperator} ${numberTwo} =`;
            console.log (`Result: ${operate(numberOne, mathOperator, numberTwo)}`);
    }};

function updateStorage (numberStorage, currentNumber) {
    if (numberStorage === null) {
        numberStorage = 0;
    };
    numberStorage += currentNumber;
        numberStorage = parseInt(numberStorage);
        return numberStorage;
}

function storeNumber (currentNumber) {
    if (numberOne === null && mathOperator === null && numberTwo === null) {
        return numberOne = updateStorage (numberOne, currentNumber);
    }
    if (numberOne !== null && mathOperator === null && numberTwo === null) {
        return numberOne = updateStorage (numberOne, currentNumber);
    }
    if (numberOne !== null && mathOperator !== null && resultShown === 0) {
        return numberTwo = updateStorage (numberTwo, currentNumber);
    }
    if (numberOne !== null && mathOperator !== null && numberTwo !== null && resultShown === 1) {
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
            if (numberOne === null && mathOperator === null && numberTwo === null) {
                console.log(`NumberOne:${numberOne}; mathOperator:${mathOperator}; NumberTwo:${numberTwo}`);
            }
            if (numberOne !== null && numberTwo === null) {
                mathOperator = operator.textContent;
                displayOperation ();
                console.log(`NumberOne:${numberOne}; mathOperator:${mathOperator}; NumberTwo:${numberTwo}`);
            }
            if (numberOne !== null && mathOperator !== null && numberTwo !== null) {
                resultShown = 0 /* Avoids to show result again eventhough second no. was not yet entered */
                numberOne = operate(numberOne, mathOperator, numberTwo);
                numberTwo = null;
                mathOperator = operator.textContent;
                displayOperation();
                console.log(`NumberOne:${numberOne}; mathOperator:${mathOperator}; NumberTwo:${numberTwo}`);
            }})});

/* Delete last input */

function deleteLastFigure (number) {
    number = number.toString();
    if (number.length === 1) {
        return null;
    }
    return parseInt (number.slice(0,number.length-1));
};

const del = document.querySelector ('#delete');
del.addEventListener ('click', () => {
    if (resultShown === 1) {
        resetAllValues ();
    }
    
    if (numberOne !== null && mathOperator === null && numberTwo === null) {
        numberOne = deleteLastFigure (numberOne);
        console.log(`NumberOne:${numberOne}; mathOperator:${mathOperator}; NumberTwo:${numberTwo}`);
    };
    if (numberOne !== null && mathOperator !== null && numberTwo === null) {
        mathOperator = null;
        console.log(`NumberOne:${numberOne}; mathOperator:${mathOperator}; NumberTwo:${numberTwo}`);
    };
    if (numberOne !== null && mathOperator !== null && numberTwo !== null) {
        numberTwo = deleteLastFigure (numberTwo);
        console.log(`NumberOne:${numberOne}; mathOperator:${mathOperator}; NumberTwo:${numberTwo}`);
    };
    displayOperation ();
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
    if (b === 0) {
        return "ERROR";
    }
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
    if (numberOne !== null && mathOperator !== null && numberTwo !== null) {
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
    numberOne = null;
    numberTwo = null; 
    mathOperator = null;
    resultShown = 0;
    displayLarge.textContent = 0;
}