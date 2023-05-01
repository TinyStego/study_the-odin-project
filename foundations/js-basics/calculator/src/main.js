const operations = {
    "+": add,
    "-": subtract,
    "*": multiply,
    "/": divide
}
const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");
let expressions = [];
let equalWasPressed = false;
let isLastDisplayCalc = false;
let operationWasPressed = false;

buttons.forEach(button => button.addEventListener("click", () => {
    if (button.textContent in operations) {
        newOp(button.textContent);
    } else if (button.textContent === "C") {
        clearDisplay();
    } else if (button.textContent === "=") {
        calculate();
    } else if (button.textContent === "DEL") {
        del();
    } else if (Number(button.textContent) in [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]) {
        addToDisplay(button.textContent);
        if (equalWasPressed) { 
            resetCalc();
            equalWasPressed = false;
        }
        isLastDisplayCalc = false;
        operationWasPressed = false;
    }
}));

function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

function operate(op, num1, num2) {
    if (op === "/" && num2 === 0) {
        addToDisplay("Error: Division by 0");
        return;
    }
    let result = operations[op](num1, num2);
    result = Math.round(result * 100) / 100;
    addToDisplay(result);
    return result;
}

function addToDisplay(item) {
    display.value = isLastDisplayCalc ? item : display.value + item;
}

function newOp(op) {
    const num = Number(display.value);
    equalWasPressed = false;
    isLastDisplayCalc = true;
    if (operationWasPressed) {
        expressions[1] = op;
        return;
    }
    if (expressions.length === 0) {
        expressions[0] = num;
        expressions[1] = op;
    } else if (expressions.length === 2 && !equalWasPressed) {
        expressions[0] = operate(expressions[1], expressions[0], num);
        expressions[1] = op;
    }
    operationWasPressed = true;
}

function calculate() {
    const num = Number(display.value);
    isLastDisplayCalc = true;
    operationWasPressed = true;
    if(!equalWasPressed) {
        expressions[0] = operate(expressions[1], expressions[0], num); 
        equalWasPressed = true;
    }
}

function clearDisplay() {
    isLastDisplayCalc = true;
    resetCalc();
    addToDisplay("");
}

function resetCalc() {
    expressions = [];
}

function del() {
    if (isLastDisplayCalc) {
        return;
    }
    if (display.value.length >= 1) {
        display.value = display.value.substring(0, display.value.length - 1);
    }
}
